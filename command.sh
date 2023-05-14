# REPO_URL https://github.com/MarkTrepanier/blackbird

npx create-react-app blackbird
choco install gh
gh help
gh auth login
cd ./blackbird/
gh repo create

git checkout -b update_logo
git add src/App.js
git commit -m 'replaces use of logo with newLogo from propeller'
git add src/App.js
git commit -m 'changes "learn react" to "learn propeller" with link address changed to such'

gh pr create
gh pr list
gh pr merge
git checkout master
git pull origin master