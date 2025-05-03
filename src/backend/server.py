import os
from flask import Flask, request, jsonify, send_file, render_template_string, session
from flask_cors import CORS
import uuid
from functools import wraps
from pathlib import Path

app = Flask(__name__)
CORS(app)

# Add secret key for session management
app.secret_key = os.urandom(24)

# Configuration
UPLOAD_FOLDER = Path(os.getcwd()) / "uploads"
UPLOAD_FOLDER.mkdir(exist_ok=True)
app.config["UPLOAD_FOLDER"] = str(UPLOAD_FOLDER)

# In-memory file password storage (could be replaced with database)
file_passwords = {}

# HTML Templates
def get_html_template(title, content):
    return f'''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{title}</title>
        <style>
            body {{ 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f8fafc;
                text-align: center;
                padding: 50px;
                margin: 0;
                color: #333;
                position: relative;
                overflow-x: hidden;
                min-height: 100vh;
                background-image: 
                    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.03) 0%, transparent 70%);
            }}
            .container {{
                max-width: 500px;
                margin: 0 auto;
                background-color: white;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                position: relative;
                z-index: 10;
                backdrop-filter: blur(5px);
                border: 1px solid rgba(255, 255, 255, 0.8);
            }}
            h1 {{
                margin-bottom: 30px;
                color: #2563eb;
                font-weight: 700;
            }}
            .download-btn {{
                padding: 12px 25px;
                background-color: #2563eb;
                color: white;
                font-size: 16px;
                border: none;
                cursor: pointer;
                border-radius: 8px;
                text-decoration: none;
                display: inline-block;
                margin-top: 15px;
                transition: all 0.2s ease;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
            }}
            .download-btn:hover {{
                background-color: #1d4ed8;
                transform: translateY(-2px);
                box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
            }}
            input {{
                padding: 12px;
                width: 70%;
                border: 1px solid #d1d5db;
                border-radius: 8px;
                margin-right: 10px;
                font-size: 16px;
                transition: all 0.2s ease;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            }}
            input:focus {{
                outline: none;
                border-color: #3b82f6;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
            }}
            button[type="submit"] {{
                padding: 12px 20px;
                background-color: #2563eb;
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                font-size: 16px;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
                transition: all 0.2s ease;
            }}
            button[type="submit"]:hover {{
                background-color: #1d4ed8;
                transform: translateY(-2px);
            }}
            .blob {{
                position: absolute;
                border-radius: 50%;
                filter: blur(80px);
                z-index: -1;
                opacity: 0.15;
            }}
            .blob1 {{
                top: 10%;
                left: 20%;
                width: 600px;
                height: 600px;
                background-color: #3b82f6;
                animation: float1 20s ease-in-out infinite;
            }}
            .blob2 {{
                bottom: 10%;
                right: 20%;
                width: 500px;
                height: 500px;
                background-color: #8b5cf6;
                animation: float2 15s ease-in-out infinite;
            }}
            .blob3 {{
                top: 50%;
                left: 50%;
                width: 400px;
                height: 400px;
                background-color: #ec4899;
                transform: translate(-50%, -50%);
                opacity: 0.07;
                animation: pulse 10s ease-in-out infinite;
            }}
            .dots {{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
                background-size: 30px 30px;
                z-index: -2;
                opacity: 0.3;
            }}
            @keyframes float1 {{
                0% {{ transform: translate(0, 0); }}
                50% {{ transform: translate(-50px, 30px); }}
                100% {{ transform: translate(0, 0); }}
            }}
            @keyframes float2 {{
                0% {{ transform: translate(0, 0); }}
                50% {{ transform: translate(50px, -30px); }}
                100% {{ transform: translate(0, 0); }}
            }}
            @keyframes pulse {{
                0% {{ transform: translate(-50%, -50%) scale(1); }}
                50% {{ transform: translate(-50%, -50%) scale(1.2); }}
                100% {{ transform: translate(-50%, -50%) scale(1); }}
            }}
            .file-info {{
                background-color: rgba(243, 244, 246, 0.8);
                padding: 12px 15px;
                border-radius: 8px;
                margin: 15px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 15px;
            }}
            .file-info-icon {{
                margin-right: 10px;
                color: #6366f1;
            }}
            .file-name {{
                font-weight: 500;
            }}
            .version {{
                position: absolute;
                bottom: 10px;
                left: 0;
                right: 0;
                text-align: center;
                font-size: 12px;
                color: #9ca3af;
            }}
        </style>
    </head>
    <body>
        <div class="dots"></div>
        <div class="blob blob1"></div>
        <div class="blob blob2"></div>
        <div class="blob blob3"></div>
        <div class="container">
            <h1>Direct<span style="color: #3b82f6;">Drop</span></h1>
            {content}
        </div>
        <div class="version">DirectDrop v1.0</div>
    </body>
    </html>
    '''

# Error handling decorator
def handle_file_errors(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        try:
            return f(*args, **kwargs)
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    return decorated_function

@app.route("/upload", methods=["POST"])
@handle_file_errors
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if not file.filename:
        return jsonify({"error": "No selected file"}), 400

    password = request.form.get("password")
    unique_filename = f"{uuid.uuid4()}_{file.filename}"
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], unique_filename)
    
    file.save(file_path)
    
    if password:
        file_passwords[unique_filename] = password

    download_link = f"http://localhost:5000/download/{unique_filename}"
    return jsonify({"download_link": download_link})

@app.route("/download/<filename>", methods=["GET"])
@handle_file_errors
def download_file_ui(filename):
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    if not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 404

    # Generate file info for display
    file_size = round(os.path.getsize(file_path) / (1024 * 1024), 2)  # Size in MB
    original_filename = filename.split('_', 1)[1] if '_' in filename else filename
    
    # Determine file type icon based on extension
    extension = original_filename.split('.')[-1].lower() if '.' in original_filename else ''
    icon = "📄"  # Default document icon
    if extension in ['jpg', 'jpeg', 'png', 'gif', 'svg']:
        icon = "🖼️"
    elif extension in ['pdf']:
        icon = "📑"
    elif extension in ['zip', 'rar', '7z']:
        icon = "🗜️"
    elif extension in ['txt', 'md']:
        icon = "📝"
    
    file_info = f'''
        <div class="file-info">
            <span class="file-info-icon">{icon}</span>
            <span class="file-name">{original_filename}</span>
            <span style="margin-left: 10px; color: #6b7280;">({file_size} MB)</span>
        </div>
    '''
    
    # Check if the file is already verified in the session
    if filename in file_passwords and not session.get(f"verified_{filename}"):
        # Password protected file
        content = f'''
            <h2>Password Protected File</h2>
            {file_info}
            <p style="margin-bottom: 20px;">This file is protected. Please enter the password to download.</p>
            <form action="/download_file/{filename}" method="post">
                <input type="password" name="password" placeholder="Enter password" required>
                <button type="submit">Unlock File</button>
            </form>
        '''
    else:
        # Non-protected file or already verified
        content = f'''
            <h2>Ready to Download</h2>
            {file_info}
            <p style="margin-bottom: 20px;">Your file is ready. Click the button below to download.</p>
            <a href="/download_file/{filename}" class="download-btn" target="_blank">Download File</a>
        '''

    return render_template_string(get_html_template("DirectDrop - Download", content))

@app.route("/download_file/<filename>", methods=["POST", "GET"])
@handle_file_errors
def download_file_with_password(filename):
    file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    if not os.path.exists(file_path):
        return jsonify({"error": "File not found"}), 404

    # Extract original filename for display
    original_filename = filename.split('_', 1)[1] if '_' in filename else filename

    if request.method == "POST":
        # Password verification workflow
        entered_password = request.form.get("password")
        correct_password = file_passwords.get(filename)

        if correct_password and entered_password == correct_password:
            # Mark this file as verified in the session
            session[f"verified_{filename}"] = True
            
            content = f'''
                <h2>Password Correct!</h2>
                <div class="file-info">
                    <span class="file-info-icon">✅</span>
                    <span class="file-name">{original_filename}</span>
                </div>
                <p style="margin-bottom: 20px;">Authentication successful. Your file is now ready for download.</p>
                <a href="/download_file/{filename}" class="download-btn" target="_blank">Download Now</a>
            '''
            return render_template_string(get_html_template("DirectDrop - Download Ready", content))
        else:
            content = f'''
                <h2>Incorrect Password</h2>
                <div class="file-info" style="background-color: rgba(254, 226, 226, 0.8);">
                    <span class="file-info-icon" style="color: #ef4444;">❌</span>
                    <span class="file-name">{original_filename}</span>
                </div>
                <p style="margin-bottom: 20px; color: #dc2626;">The password you entered was incorrect. Please try again.</p>
                <form action="/download_file/{filename}" method="post">
                    <input type="password" name="password" placeholder="Enter password" required>
                    <button type="submit">Try Again</button>
                </form>
            '''
            return render_template_string(get_html_template("DirectDrop - Password Error", content)), 403

    elif request.method == "GET":
        # Direct download workflow
        if filename in file_passwords and file_passwords.get(filename) and not session.get(f"verified_{filename}"):
            return jsonify({"error": "Password required"}), 403
        else:
            return send_file(file_path, as_attachment=True, download_name=original_filename)

@app.route("/", methods=["GET"])
def index():
    content = f'''
        <h2>Upload Your Files</h2>
        <p style="margin-bottom: 20px;">Upload your files securely with optional password protection.</p>
        <form action="/upload" method="post" enctype="multipart/form-data">
            <div style="margin-bottom: 15px;">
                <input type="file" name="file" required>
            </div>
            <div style="margin-bottom: 15px;">
                <input type="password" name="password" placeholder="Optional password">
            </div>
            <button type="submit">Upload File</button>
        </form>
    '''
    return render_template_string(get_html_template("DirectDrop - Upload", content))

if __name__ == "__main__":
    app.run(debug=True)