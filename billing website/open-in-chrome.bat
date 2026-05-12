@echo off
set "HTMLFILE=%~dp0index.html"

REM Try different Chrome locations
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" "file:///%HTMLFILE%"
    goto :end
)

if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    start "" "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "file:///%HTMLFILE%"
    goto :end
)

REM Try using chrome command if in PATH
where chrome >nul 2>&1
if %errorlevel% == 0 (
    start chrome.exe "file:///%HTMLFILE%"
    goto :end
)

REM Fallback to default browser
start "" "file:///%HTMLFILE%"

:end
pause

