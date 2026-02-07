#!/bin/bash

echo "════════════════════════════════════════════════════════"
echo "  🚀 Pushing to GitHub - LittleKirchhof/paintwebsite12"
echo "════════════════════════════════════════════════════════"
echo ""
echo "Repository: https://github.com/LittleKirchhof/paintwebsite12"
echo ""
echo "📝 You will be prompted for your GitHub credentials:"
echo "   Username: LittleKirchhof"
echo "   Password: [Your Personal Access Token]"
echo ""
echo "💡 Don't have a token? Create one at:"
echo "   https://github.com/settings/tokens"
echo "   (Select 'repo' scope)"
echo ""
echo "Press ENTER to continue..."
read

# Push to GitHub
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 View your repository at: https://github.com/LittleKirchhof/paintwebsite12"
    echo ""
    echo "Cloudflare Pages will automatically detect the changes and rebuild."
else
    echo ""
    echo "❌ Push failed."
    echo ""
    echo "Troubleshooting:"
    echo "1. Make sure you're using a Personal Access Token (not password)"
    echo "2. Token must have 'repo' scope"
    echo "3. Try again with: ./push_to_github_kabilan.sh"
fi
