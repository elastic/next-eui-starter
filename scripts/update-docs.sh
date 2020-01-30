#!/bin/bash

if [[ -n "$(git status --porcelain)" ]]; then
  echo >&2
  echo "You have uncommitted changes. Please commit or revert them before proceeding." >&2
  echo >&2
  exit 1
fi

set -ex

# Generate a fresh temp directory for each build
BUILD_DIR="$(mktemp -d /tmp/next-eui-starter.XXXXXX)"

# Find the current commit. We'll use this in the commit message for
# tracking
HASH="$(git rev-parse --short HEAD)"

# Necessary for GitHub pages - see next.config.js
export PATH_PREFIX=true

# Build the site
yarn build
# Now export the static version to the build dir
next export -o "$BUILD_DIR"

# Switch to the GitHub Pages branch
git checkout gh-pages

# Remove all tracked files, except .gitignore
git ls-files | grep -v .gitignore | xargs git rm

# Copy the static site into the branch
tar cf - "$BUILD_DIR"  | tar xf - --strip-components 2
# Tell GitHub that this isn't a Jekyll site, and to leave our files alone
touch .nojekyll

# Commit the changes
git add .
git commit -m "Update gh-pages to $HASH"

# And go back to the project source
git checkout master

# Clean up after ourselves
rm -rf "$BUILD_DIR"

cat >&2 <<EOF

gh-pages updated to $HASH. You can now publish your changes. For example, if your
git remote is 'upstream', then you could execute:

    git push upstream master gh-pages

EOF
