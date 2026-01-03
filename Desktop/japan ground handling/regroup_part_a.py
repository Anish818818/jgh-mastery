
import re

# Read codes.html
with open('codes.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract Part A Table Body (same logic as before)
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

# 2. Parse Rows, IGNORING current headers
# Current headers: <tr class="country-row"><td ...>...</td></tr>
# We want to keep standard <tr>s.

row_pattern = re.compile(r'<tr>(.*?)</tr>', re.DOTALL)
td_pattern = re.compile(r'<td>(.*?)</td>', re.DOTALL)
country_name_pattern = re.compile(r'<div class="jp-main">\s*(.*?)\s*</div>', re.DOTALL)

rows = []
seen_countries = set()

for match in row_pattern.finditer(tbody_content):
    row_html = match.group(1).strip()
    
    # If the row has class="country-row", skip it (it's a header we made)
    # But wait, regex captured <tr> content, not the class attr of tr.
    # So we need to match the FULL tag including attributes if possible, or just check content.
    # My regex was `<tr>(.*?)</tr>`. This does NOT match `<tr class="...">`.
    # Let's use a regex that captures attributes too.
    pass

# Better approach: Split by </tr> and check start tag.
# Or just use the original raw file lines? No, regex is acceptable if robust.
# Let's grab full blocks <tr ...>...</tr>
full_row_pattern = re.compile(r'<tr[^>]*>(.*?)</tr>', re.DOTALL)

for match in full_row_pattern.finditer(tbody_content):
    full_row = match.group(0) # <tr...>...</tr>
    inner_html = match.group(1)
    
    # Check if it is a header row
    if 'class="country-row"' in full_row or 'class="country-header"' in inner_html:
        continue

    # Extract tds
    tds = td_pattern.findall(inner_html)
    if len(tds) < 3:
        continue
        
    # Extract Country Name from 3rd TD
    country_td = tds[2]
    c_match = country_name_pattern.search(country_td)
    if c_match:
        country_name = c_match.group(1).strip()
    else:
        country_name = "Unknown"
        
    rows.append({
        'country': country_name,
        'html': full_row
    })
    seen_countries.add(country_name)

# 3. Define Map
# Based on seen_countries, I will manually map the Japanese to English.
# Assuming standard names found in the file.
country_map = {
    "アメリカ": "USA",
    "イギリス": "UK",
    "イタリア": "Italy",
    "インド": "India",
    "インドネシア": "Indonesia",
    "エジプト": "Egypt",
    "オーストラリア": "Australia",
    "オーストリア": "Austria",
    "オランダ": "Netherlands",
    "カナダ": "Canada",
    "韓国": "South Korea",
    "カンボジア": "Cambodia",
    "シンガポール": "Singapore",
    "スイス": "Switzerland",
    "スウェーデン": "Sweden",
    "スペイン": "Spain",
    "スリランカ": "Sri Lanka",
    "タイ": "Thailand",
    "台湾": "Taiwan",
    "中国": "China",
    "ドイツ": "Germany",
    "トルコ": "Turkey",
    "ニューカレドニア": "New Caledonia",
    "ニュージーランド": "New Zealand",
    "ハンガリー": "Hungary",
    "フィリピン": "Philippines",
    "フィンランド": "Finland",
    "フランス": "France",
    "ベトナム": "Vietnam",
    "ベルギー": "Belgium",
    "香港": "Hong Kong",
    "マレーシア": "Malaysia",
    "メキシコ": "Mexico",
    "UAE（アラブ首長国）": "UAE", # Might be just 'アラブ首長国'
    "ロシア": "Russia",
    # Add potential ones found in list
    "アラブ首長国": "UAE",
    "カタール": "Qatar",
    "グアム": "Guam (USA)", # Sometimes listed as country in these lists
    "サイパン": "Saipan",
    "タヒチ": "Tahiti",
    "フィジー": "Fiji",
    "ブラジル": "Brazil",
    "ペルー": "Peru",
    "日本": "Japan" # Technically included in A list headers? (Prob not, usually separate, but just in case)
}

# 4. Group and Build
rows.sort(key=lambda x: country_map.get(x['country'], x['country']))

new_html = ""
current_country = None

for row in rows:
    c = row['country']
    if c != current_country:
        current_country = c
        en_name = country_map.get(c, c)
        
        # Format: English <span class="jp-sm">Japanese</span>
        # But we want it to look like a header.
        # Maybe: USA (アメリカ)
        
        header_content = f'{en_name} <span class="jp-main" style="font-size: 0.9em; margin-left: 10px;">{c}</span>'
        
        new_html += f"""
                            <tr class="country-row">
                                <td colspan="3" class="country-header">{header_content}</td>
                            </tr>"""
    
    new_html += "\n" + row['html']

# 5. Inject
final_content = content[:tbody_start + len(tbody_start_tag)] + new_html + "\n                        " + content[tbody_end:]

with open('codes.html', 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Re-grouped {len(rows)} codes with bilingual headers.")
