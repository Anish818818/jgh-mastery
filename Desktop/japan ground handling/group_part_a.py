
import re

# Read codes.html
with open('codes.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract Part A Table Body
# Part A is the first table in #airport. 
# It is preceded by "A. International & Major Airports"
# The table body starts after <thead>...</thead>

# Find start of #airport
start_marker = '<div id="airport"'
airport_start = content.find(start_marker)

# Find first tbody after that
tbody_start_tag = '<tbody>'
tbody_end_tag = '</tbody>'
tbody_start = content.find(tbody_start_tag, airport_start)
tbody_end = content.find(tbody_end_tag, tbody_start)

if tbody_start == -1 or tbody_end == -1:
    print("Error: Could not find Part A tbody")
    exit(1)

tbody_content = content[tbody_start + len(tbody_start_tag):tbody_end]

# 2. Parse Rows
# We simple split by <tr> and </tr>
# Regex might be safer to capture content.

# Regex to find each row content: <tr>(.*?)</tr> (dotall)
# Then inside, find 3 TDs.
# 3rd TD: <div class="jp-main">(.*?)</div>

row_pattern = re.compile(r'<tr>(.*?)</tr>', re.DOTALL)
td_pattern = re.compile(r'<td>(.*?)</td>', re.DOTALL)
country_name_pattern = re.compile(r'<div class="jp-main">\s*(.*?)\s*</div>', re.DOTALL)

rows = []
for match in row_pattern.finditer(tbody_content):
    row_html = match.group(1).strip()
    full_row_tag = f"<tr>{row_html}</tr>"
    
    # Extract tds
    tds = td_pattern.findall(row_html)
    if len(tds) < 3:
        continue # Skip malformed or empty
        
    # Extract Country Name from 3rd TD
    country_td = tds[2]
    # match jp-main div
    c_match = country_name_pattern.search(country_td)
    if c_match:
        country_name = c_match.group(1).strip()
    else:
        # Fallback if no jp-main, just raw text?
        country_name = "Unknown"
        
    rows.append({
        'country': country_name,
        'html': full_row_tag
    })

# 3. Group by Country
# We want to maybe sort by country name.
# Japanese sorting (Kana) is hard without a library, but sorting by unicode string is... okay for grouping.
# Or better, we just sort by Country Name String.
rows.sort(key=lambda x: x['country'])

# 4. Generate New HTML with Headers
new_html = ""
current_country = None

# Styles for header
# We can use inline style or class. I'll use class="country-separator"
for row in rows:
    c = row['country']
    if c != current_country:
        # New Group
        current_country = c
        # Insert Header Row
        # Spanning 3 columns
        new_html += f"""
                            <tr class="country-row">
                                <td colspan="3" class="country-header">{current_country}</td>
                            </tr>"""
    
    new_html += "\n" + row['html']

# 5. Inject back
final_content = content[:tbody_start + len(tbody_start_tag)] + new_html + "\n                        " + content[tbody_end:]

with open('codes.html', 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Grouped {len(rows)} codes by country.")
