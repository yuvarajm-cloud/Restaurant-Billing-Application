@echo off
echo Starting local server and opening in Chrome...
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "http://localhost:8000/index.html"
timeout /t 2 /nobreak >nul
python -m http.server 8000


