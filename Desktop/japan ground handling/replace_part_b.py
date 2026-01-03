
import os

# Read the generated grouped domestic codes
with open('domestic_codes_grouped.html', 'r', encoding='utf-8') as f:
    new_part_b = f.read()

# Read the target file
with open('codes.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Locate Part B
# Header: <h3 ...>B. 日本の主なおもな空港の空白のスリーレター・コード</h3>
# Note: The ID/structure isn't wrapped in a unique div for Part B specifically, it sits inside #airport.
# So we need to find the specific H3 and the table that follows it.

header_snippet = "B. 日本の" # Good enough to find start
start_idx = html_content.find(header_snippet)

if start_idx == -1:
    print("Error: Could not find Part B Header")
    exit(1)

# Backtrack to the start of the <h3> or <h3 style...>
# The generation script uses <h3 style="...">
# So let's find the '<h3' before start_idx
h3_start_idx = html_content.rfind('<h3', 0, start_idx)

# Now find the end of the table following this header.
# Structure: h3 -> div.table-container -> table -> ... -> </table> -> </div>
# We need to find the closing div of table-container.
next_table_end = html_content.find('</table>', start_idx)
container_end = html_content.find('</div>', next_table_end)

if h3_start_idx == -1 or container_end == -1:
    print("Error: Could not delimit Part B section")
    exit(1)

end_idx = container_end + 6 # </div>

# Replace
new_html = html_content[:h3_start_idx] + new_part_b + html_content[end_idx:]

with open('codes.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Successfully replaced Part B with grouped version")
