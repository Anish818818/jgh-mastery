
import re

codes_map = {
    'AKL': 'Auckland', 'AMS': 'Amsterdam Schiphol', 'ANC': 'Anchorage', 'ARN': 'Stockholm', 'ATL': 'Atlanta Hartsfield',
    'BKK': 'Bangkok', 'BLR': 'Bengaluru', 'BOM': 'Mumbai (Bombay)', 'BOS': 'Boston', 'BRU': 'Brussels',
    'BUD': 'Budapest', 'CAI': 'Cairo', 'CAN': 'Guangzhou', 'CCU': 'Kolkata', 'CDG': 'Paris Charles de Gaulle',
    'CGK': 'Jakarta', 'CHC': 'Christchurch', 'CMB': 'Colombo', 'CNS': 'Cairns', 'CPH': 'Copenhagen',
    'CTU': 'Chengdu', 'CVG': 'Cincinnati', 'DAC': 'Dhaka', 'DCA': 'Washington Reagan', 'DEL': 'Delhi',
    'DEN': 'Denver', 'DFW': 'Dallas Fort Worth', 'DLC': 'Dalian', 'DME': 'Domodedovo', 'DTW': 'Detroit',
    'DUS': 'Dusseldorf', 'DXB': 'Dubai', 'FCO': 'Rome', 'FRA': 'Frankfurt', 'GIG': 'Rio de Janeiro',
    'GMP': 'Seoul Gimpo', 'GUM': 'Guam', 'GVA': 'Geneva', 'HAN': 'Hanoi', 'HEL': 'Helsinki',
    'HGH': 'Hangzhou', 'HKG': 'Hong Kong', 'HNL': 'Honolulu', 'IAD': 'Washington Dulles', 'IAH': 'Houston',
    'ICN': 'Seoul Incheon', 'ISB': 'Islamabad', 'IST': 'Istanbul', 'JFK': 'New York JFK', 'KOA': 'Kona',
    'KUL': 'Kuala Lumpur', 'LAS': 'Las Vegas', 'LAX': 'Los Angeles', 'LHR': 'London Heathrow', 'MAA': 'Chennai',
    'MAD': 'Madrid', 'MEL': 'Melbourne', 'MEX': 'Mexico City', 'MNL': 'Manila', 'MSP': 'Minneapolis',
    'MUC': 'Munich', 'MXP': 'Milan', 'ORD': 'Chicago', 'PEK': 'Beijing', 'PEN': 'Penang', 'PER': 'Perth',
    'PHX': 'Phoenix', 'PNH': 'Phnom Penh', 'PPT': 'Papeete', 'PUS': 'Busan', 'PVG': 'Shanghai Pudong',
    'RGN': 'Yangon', 'SAN': 'San Diego', 'SEA': 'Seattle', 'SFO': 'San Francisco', 'SGN': 'Ho Chi Minh',
    'SHA': 'Shanghai Hongqiao', 'SHE': 'Shenyang', 'SIN': 'Singapore', 'SJC': 'San Jose', 'SVO': 'Moscow',
    'SYD': 'Sydney', 'SZX': 'Shenzhen', 'TAO': 'Qingdao', 'TPE': 'Taipei', 'TSA': 'Taipei Songshan',
    'TSN': 'Tianjin', 'VIE': 'Vienna', 'VVO': 'Vladivostok', 'WUH': 'Wuhan', 'XIY': 'Xian', 'XMN': 'Xiamen',
    'YVR': 'Vancouver', 'YYZ': 'Toronto', 'ZRH': 'Zurich'
}

with open('raw_codes.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Pattern explanation:
# Line 1: CODE Hiragana(Name)
# Line 2: Katakana(Name) Hiragana(Country)
# Line 3: Katakana(Country)
# Note: Sometimes text might be shifted specific to the paste.
# The user paste has specific structure. 
# "AKL お ー く ら ん ど \n オークランド に ゅ ー じ ー ら ん ど \n ニュージーランド"

# Let's split by code pattern (3 uppercase letters at start of line)
entries = re.split(r'\n([A-Z]{3}) ', '\n' + text)

html_output = ""

# entries[0] is empty or garbage before first code
for i in range(1, len(entries), 2):
    code = entries[i]
    content = entries[i+1].strip()
    
    # We need to split content into parts.
    # It usually looks like:
    # "あ む す て る だ む  す き ぽ ー る \n アムステルダム・スキポール お ら ん だ \n オランダ"
    
    lines = content.split('\n')
    lines = [l.strip() for l in lines if l.strip()]
    
    # Heuristic parsing
    name_hira = ""
    name_kata = ""
    country_hira = ""
    country_kata = ""

    if len(lines) >= 3:
        name_hira = lines[0] # Line 1 is mostly name hiragana
        
        # Line 2 is Name Katakana + Country Hiragana
        # We need to split line 2. Usually separated by space?
        # Japanese text spacing can be weird in OCR.
        # "アムステルダム・スキポール お ら ん だ"
        # We can assume the Name Katakana ends when spaces become frequent or char type changes?
        # Or simpler: Split by wide space? 
        # Actually, looking at the paste: "オークランド に ゅ ー じ ー ら ん ど"
        # "オークランド" is solid. "に ゅ ー..." is spaced out hiragana.
        
        # Strategy: regex for Katakana block vs Hiragana block
        # Katakana block: [\u30A0-\u30FF・]+
        # Hiragana block: [\u3040-\u309F\s]+
        
        line2 = lines[1]
        
        match = re.match(r'^([\u30A0-\u30FF・]+)\s+(.*)$', line2)
        if match:
             name_kata = match.group(1)
             country_hira = match.group(2)
        else:
             # Fallback
             parts = line2.split(' ')
             name_kata = parts[0]
             country_hira = " ".join(parts[1:])

        country_kata = lines[2]
        
    elif len(lines) == 2:
        # Sometimes country hiragana might be on line 3?
        # Or merged?
        name_hira = lines[0]
        # Assume line 2 has name kata + rest
        line2 = lines[1]
        match = re.match(r'^([\u30A0-\u30FF・]+)\s+(.*)$', line2)
        if match:
             name_kata = match.group(1)
             country_hira = match.group(2)
        else:
             name_kata = line2
             
        # Missing country kata line?
        country_kata = "???"

    # Clean up spaces in Hiragana if desired? 
    # "お ー く ら ん ど" -> "おーくらん ど" ? 
    # The user input has spaces between chars: "お ー く ら ん ど"
    # Usually we remove spaces for reading unless monospaced.
    # Let's remove spaces for the small reading text to make it compact.
    name_hira_clean = name_hira.replace(" ", "")
    country_hira_clean = country_hira.replace(" ", "")
    
    eng_name = codes_map.get(code, code)
    
    # Row Format
    # Code | Airport (Eng + Kata + Hira) | Country (Kata + Hira) (No English Country in map? I'll skip Eng Country for now or guess)
    
    row = f"""
                            <tr>
                                <td><strong>{code}</strong></td>
                                <td>
                                    <div class="eng-main">{eng_name}</div>
                                    <div class="jp-main">{name_kata}</div>
                                    <div class="jp-sub">{name_hira_clean}</div>
                                </td>
                                <td>
                                    <div class="jp-main">{country_kata}</div>
                                    <div class="jp-sub">{country_hira_clean}</div>
                                </td>
                            </tr>"""
    html_output += row

with open('parsed_codes.html', 'w', encoding='utf-8') as f:
    f.write(html_output)

print("Output written to parsed_codes.html")
