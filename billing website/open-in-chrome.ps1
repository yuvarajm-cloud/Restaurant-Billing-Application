# PowerShell script to open the website in Chrome
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$chromePathAlt = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"

$htmlPath = Join-Path $PSScriptRoot "index.html"

if (Test-Path $chromePath) {
    Start-Process $chromePath -ArgumentList "file:///$htmlPath"
} elseif (Test-Path $chromePathAlt) {
    Start-Process $chromePathAlt -ArgumentList "file:///$htmlPath"
} else {
    Write-Host "Chrome not found. Opening with default browser..."
    Start-Process "index.html"
}


