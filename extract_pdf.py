import pypdf
import os

pdf_path = "Ground handling安全品質 - Copy_watermark.pdf"
output_path = "content.txt"

try:
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(text)
    
    print(f"Successfully extracted {len(text)} characters to {output_path}")

except Exception as e:
    print(f"Error extracting PDF: {e}")
