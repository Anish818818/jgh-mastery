import os
from pypdf import PdfReader

def extract_images(pdf_path, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    reader = PdfReader(pdf_path)
    count = 0
    
    print(f"Extracting images from PDF...")
    
    for page_num, page in enumerate(reader.pages):
        for image_file_object in page.images:
            try:
                with open(os.path.join(output_dir, f"img_{page_num+1}_{count}.{image_file_object.name.split('.')[-1]}"), "wb") as fp:
                    fp.write(image_file_object.data)
                    print(f"Saved: img_{page_num+1}_{count}.{image_file_object.name.split('.')[-1]}")
                count += 1
            except Exception as e:
                print(f"Error saving image on page {page_num+1}: {e}")

    print(f"Finished! Extracted {count} images to {output_dir}")

if __name__ == "__main__":
    pdf_file = "Ground handling安全品質 - Copy_watermark.pdf"
    output_folder = "extracted_images"
    extract_images(pdf_file, output_folder)
