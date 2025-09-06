#!/bin/bash

# Script to add front matter to all markdown files in the exercises directory

# Function to add front matter to a file
add_front_matter() {
  local file=$1
  local content=$(cat "$file")
  
  # Check if front matter already exists
  if [[ "$content" != "---"* ]]; then
    # Create temporary file
    local temp_file=$(mktemp)
    
    # Add front matter and original content to temp file
    echo "---" > "$temp_file"
    echo "layout: page" >> "$temp_file"
    echo "---" >> "$temp_file"
    echo "" >> "$temp_file"
    cat "$file" >> "$temp_file"
    
    # Replace original file with temp file
    mv "$temp_file" "$file"
    echo "Added front matter to $file"
  else
    echo "Front matter already exists in $file"
  fi
}

# Process all markdown files in the exercises directory and subdirectories
find ./exercises -name "*.md" -type f -exec bash -c "add_front_matter \"{}\"" \;

echo "All markdown files have been processed."
