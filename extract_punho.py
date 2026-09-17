import os
import math
from PIL import Image

def extract_green_fist():
    img_path = "public/logo.jpg"
    out_path = "public/punho.png"
    
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    cx, cy = width / 2, height / 2
    
    data = img.getdata()
    new_data = []
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            dist = math.hypot(x - cx, y - cy)
            
            # Abaixando drasticamente o raio para 240! O pico de pixels no raio 250/260 
            # era literalmente o anel que ele mencionou.
            if g > 70 and g > r + 30 and g > b + 30 and dist < 240:
                new_data.append((r, g, b, 255))
            else:
                new_data.append((r, g, b, 0))
                
    img.putdata(new_data)
    
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(out_path, "PNG")
    print("Segundo anel removido com sucesso (raio restrito a 240)!")

if __name__ == "__main__":
    extract_green_fist()
