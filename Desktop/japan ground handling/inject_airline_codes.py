
import os

# Read the generated airline html
with open('airline_codes.html', 'r', encoding='utf-8') as f:
    airline_html = f.read()

# Read the target file
with open('codes.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Target div
start_marker = '<div id="airline" class="code-section" style="display: none;">'
start_idx = html_content.find(start_marker)

if start_idx == -1:
    print("Error: Could not find #airline div")
    exit(1)

# Find end of this div
# This simple logic assumes the div content is indented and ends with a matching </div> at the same level or we scan.
# However, given the structure with multiple divs, we need to be careful.
# The `code-section` div contains the h3 and table container.
# It ends before the next comment or next code-section.
# The next section is `<!-- Phonetic Alphabet Table -->` or div id="phonetic".

next_section_marker = '<div id="phonetic"'
next_section_idx = html_content.find(next_section_marker)

if next_section_idx == -1:
    print("Error: Could not find #phonetic div")
    exit(1)

# Scan backwards from next section to find the closing div of #airline
# There might be some whitespace/comments between.
end_idx = html_content.rfind('</div>', 0, next_section_idx)

# Let's replace everything between start_marker + len and end_idx
# Actually, let's keep the wrapper div (start_marker) and just replace content.
content_start = start_idx + len(start_marker)
content_end = end_idx

new_html = html_content[:content_start] + "\n" + airline_html + "\n            " + html_content[content_end:]

with open('codes.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Successfully injected Airline Codes Part C")
