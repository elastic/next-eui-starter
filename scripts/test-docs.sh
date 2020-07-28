#!/bin/bash

set -ex

# Generate a fresh temp directory for each build
BUILD_DIR="$(mktemp -d /tmp/next-eui-starter.XXXXXX)"

# The actual build goes in here
PREFIXED_DIR="$BUILD_DIR/$(node -e 'console.log((require("./package.json")).name.split("/").pop())')"
mkdir "$PREFIXED_DIR"

# Necessary for GitHub pages - see next.config.js
export PATH_PREFIX="true"

# Build the site
yarn build
# Now export the static version to the build dir
next export -o "$PREFIXED_DIR"

# Serve up the site at http://localhost:5000
yarn serve "$BUILD_DIR"

# Clean up after ourselves
rm -rf "$BUILD_DIR"

