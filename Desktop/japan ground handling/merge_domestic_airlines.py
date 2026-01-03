
import os

# Read the generated domestic airlines html
with open('domestic_airlines.html', 'r', encoding='utf-8') as f:
    domestic_html = f.read()

# Read the target file
with open('codes.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# We need to insert this into the #airline div.
# The #airline div currently contains Part C.
# We want to append Part D after Part C's table container.

# Find #airline div start
start_marker = '<div id="airline"'
start_idx = html_content.find(start_marker)

if start_idx == -1:
    print("Error: Could not find #airline div")
    exit(1)

# Find the next section (#phonetic)
phonetic_marker = '<div id="phonetic"'
phonetic_idx = html_content.find(phonetic_marker)

if phonetic_idx == -1:
    print("Error: Could not find #phonetic div")
    exit(1)

# Now within the range [start_idx, phonetic_idx], find the LAST closing div </div>
# which should be the closing of Part C's table-container, OR the closing of the #airline div?
# Actually #airline div closes right before #phonetic (usually).
# Let's check the indentation/structure.
# Structure:
# <div id="airline" ...>
#    <h3>Part C...</h3>
#    <div class="table-container">...</div>
# </div>
# <div id="phonetic"...>

# So we want to insert BEFORE the closing </div> of #airline.
# The closing </div> of #airline should be the last </div> before #phonetic.

# Search backwards from phonetic_idx for '</div>'
# This should be the closing tag of #airline.
airline_end_div_idx = html_content.rfind('</div>', 0, phonetic_idx)

# We want to insert BEFORE this closing tag?
# Wait, if we insert before the last </div>, we are inside #airline.
# But we must be careful about whitespace.

# Let's verify by checking content.
# The content before airline_end_div_idx should be the end of Part C table container.

insert_point = airline_end_div_idx

# Let's add some newlines for spacing
new_content = "\n" + domestic_html + "\n"

new_html = html_content[:insert_point] + new_content + html_content[insert_point:]

with open('codes.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Successfully merged Part D Airlines")
