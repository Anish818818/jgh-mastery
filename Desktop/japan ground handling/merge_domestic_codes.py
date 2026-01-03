
import os

# Read the generated domestic codes
with open('domestic_codes.html', 'r', encoding='utf-8') as f:
    domestic_html = f.read()

# Read the target file
with open('codes.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Find the airport section
start_marker = '<div id="airport"'
section_start = html_content.find(start_marker)

if section_start == -1:
    print("Error: Could not find #airport div")
    exit(1)

# Find the existing h3 header inside the section
header_start_tag = '<h3 style="margin-bottom: 20px; color: #2c3e50;">'
header_original = 'Airport Codes (3 Letter)'
header_start_idx = html_content.find(header_start_tag, section_start)

# We will modify the existing header to be Part A
# And then search for the end of the existing table to append Part B
table_end_tag = '</table>'
table_end_idx = html_content.find(table_end_tag, section_start)
div_table_container_end_idx = html_content.find('</div>', table_end_idx) 
# Usually styling is: <div class="table-container"><table>...</table></div>
# So we want to insert AFTER the closing </div> of the table container.

if header_start_idx == -1 or div_table_container_end_idx == -1:
    print("Error: Structure mismatch")
    exit(1)

# Construct new Header A
# We can just replace the text inside the H3
updated_header_a = 'A. International & Major Airports (Main)'

# However, splitting string is easier.
pre_header = html_content[:header_start_idx + len(header_start_tag)]
post_header = html_content[header_start_idx + len(header_start_tag):]
header_content_end = post_header.find('</h3>')
existing_header_content = post_header[:header_content_end]

# If it's already updated, be careful?
# Just replace "Airport Codes (3 Letter)" with "A. International & Major Airports"

new_html = html_content.replace('Airport Codes (3 Letter)', 'A. International & Major Airports')

# Now find the end of the first table container again in the NEW string
section_start = new_html.find(start_marker)
table_end_idx = new_html.find('</table>', section_start)
div_table_container_end_idx = new_html.find('</div>', table_end_idx)

# Insertion point is after that closing div
insert_point = div_table_container_end_idx + 6 # len('</div>')

final_html = new_html[:insert_point] + "\n" + domestic_html + new_html[insert_point:]

with open('codes.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("Successfully added Part B Airport Codes")
