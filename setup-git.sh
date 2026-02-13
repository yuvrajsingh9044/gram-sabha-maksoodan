#!/bin/bash

echo "========================================"
echo "Gram Sabha Maksoodan - Git Setup"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ ERROR: Git is not installed!"
    echo ""
    echo "Please install Git:"
    echo "  macOS: brew install git"
    echo "  Linux: sudo apt-get install git"
    echo ""
    echo "Or download from: https://git-scm.com/downloads"
    exit 1
fi

echo "✓ Git is installed. Proceeding with setup..."
echo ""

# Initialize git repository
echo "[1/4] Initializing Git repository..."
if git init; then
    echo "✓ Git repository initialized"
else
    echo "❌ ERROR: Failed to initialize git repository"
    exit 1
fi
echo ""

# Add all files
echo "[2/4] Adding all files to Git..."
if git add .; then
    echo "✓ All files added"
else
    echo "❌ ERROR: Failed to add files"
    exit 1
fi
echo ""

# Create initial commit
echo "[3/4] Creating initial commit..."
if git commit -m "Initial commit: Gram Sabha Maksoodan website"; then
    echo "✓ Initial commit created"
else
    echo "❌ ERROR: Failed to create commit"
    exit 1
fi
echo ""

# Instructions for GitHub
echo "[4/4] Next Steps:"
echo ""
echo "========================================"
echo "✅ SUCCESS! Git repository is ready."
echo "========================================"
echo ""
echo "NEXT STEPS:"
echo ""
echo "Option 1 - Using GitHub Desktop (EASIEST):"
echo "  1. Download GitHub Desktop from: https://desktop.github.com"
echo "  2. Open GitHub Desktop and sign in"
echo "  3. File → Add Local Repository"
echo "  4. Select this folder"
echo "  5. Click 'Publish repository'"
echo ""
echo "Option 2 - Using Command Line:"
echo "  1. Create a new repository on GitHub.com"
echo "  2. Run these commands:"
echo "     git remote add origin https://github.com/YOUR_USERNAME/gram-sabha-maksoodan.git"
echo "     git branch -M main"
echo "     git push -u origin main"
echo ""
echo "After pushing to GitHub:"
echo "  - Go to vercel.com or netlify.com"
echo "  - Import your GitHub repository"
echo "  - Click Deploy"
echo "  - Your website will be LIVE!"
echo ""
echo "For detailed instructions, see: DEPLOYMENT_GUIDE.md"
echo ""
