#!/bin/bash

set -ex

BUILD_DIR="$(mktemp -d /tmp/next-eui-starter.XXXXXX)"
HASH="$(git rev-parse --short HEAD)"

export PATH_PREFIX=true

yarn build
next export -o "$BUILD_DIR"

git checkout gh-pages
git ls-files | xargs git rm

tar cf - "$BUILD_DIR"  | tar xf - --strip-components 2
touch .nojekyll

git add .
git commit -m "Update gh-pages to $HASH"

git checkout master

rm -rf "$BUILD_DIR"

echo >&2 <<EOF
gh-pages updated to $HASH. You can now execute:

    git push upstream gh-pages

EOF
