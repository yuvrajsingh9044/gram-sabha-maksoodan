@echo off
echo ========================================
echo Gram Sabha Maksoodan - Git Setup
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed!
    echo.
    echo Please download and install Git from:
    echo https://git-scm.com/downloads
    echo.
    pause
    exit /b 1
)

echo Git is installed. Proceeding with setup...
echo.

REM Initialize git repository
echo [1/4] Initializing Git repository...
git init
if errorlevel 1 (
    echo ERROR: Failed to initialize git repository
    pause
    exit /b 1
)
echo ✓ Git repository initialized
echo.

REM Add all files
echo [2/4] Adding all files to Git...
git add .
if errorlevel 1 (
    echo ERROR: Failed to add files
    pause
    exit /b 1
)
echo ✓ All files added
echo.

REM Create initial commit
echo [3/4] Creating initial commit...
git commit -m "Initial commit: Gram Sabha Maksoodan website"
if errorlevel 1 (
    echo ERROR: Failed to create commit
    pause
    exit /b 1
)
echo ✓ Initial commit created
echo.

REM Instructions for GitHub
echo [4/4] Next Steps:
echo.
echo ========================================
echo SUCCESS! Git repository is ready.
echo ========================================
echo.
echo NEXT STEPS:
echo.
echo Option 1 - Using GitHub Desktop (EASIEST):
echo   1. Download GitHub Desktop from: https://desktop.github.com
echo   2. Open GitHub Desktop and sign in
echo   3. File → Add Local Repository
echo   4. Select this folder
echo   5. Click "Publish repository"
echo.
echo Option 2 - Using Command Line:
echo   1. Create a new repository on GitHub.com
echo   2. Run these commands:
echo      git remote add origin https://github.com/YOUR_USERNAME/gram-sabha-maksoodan.git
echo      git branch -M main
echo      git push -u origin main
echo.
echo After pushing to GitHub:
echo   - Go to vercel.com or netlify.com
echo   - Import your GitHub repository
echo   - Click Deploy
echo   - Your website will be LIVE!
echo.
echo For detailed instructions, see: DEPLOYMENT_GUIDE.md
echo.
pause
