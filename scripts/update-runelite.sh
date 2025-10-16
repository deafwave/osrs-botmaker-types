#!/bin/bash
set -e

# Navigate to the runelite-to-ts directory
cd "$(dirname "$0")/runelite-to-ts"

# Install dependencies
pnpm install --frozen-lockfile

# Execute the runelite-to-ts script
pnpm start

# Return to the original directory
cd -
