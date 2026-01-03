
import os

# Read the generated rows
with open('parsed_codes.html', 'r', encoding='utf-8') as f:
    new_rows = f.read()

# Read the target file
with open('codes.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Construct the new tbody
new_tbody = f"<tbody>\n{new_rows}\n                        </tbody>"

# We want to replace the FIRST tbody in the file, which corresponds to the Airport Codes table (id="airport")
# The structure is:
# <div id="airport" ...>
#   ...
#   <table ...>
#       <thead>...</thead>
#       <tbody> ... </tbody>

# Let's find the start and end of the first tbody after id="airport"
start_marker = '<div id="airport"'
start_idx = html_content.find(start_marker)

if start_idx == -1:
    print("Error: Could not find #airport div")
    exit(1)

tbody_start = html_content.find('<tbody>', start_idx)
tbody_end = html_content.find('</tbody>', tbody_start)

if tbody_start == -1 or tbody_end == -1:
    print("Error: Could not find tbody in #airport section")
    exit(1)

# Perform replacement
# tbody_end + len('</tbody>') gives us the index after the closing tag
new_html = html_content[:tbody_start] + new_tbody + html_content[tbody_end+8:]

with open('codes.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Successfully injected new code rows into codes.html")
