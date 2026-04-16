Place the real product image here as 'piece1.jpg'.

This placeholder folder is for local product images referenced by the demo site.

Expected path: pink-exe-store/images/piece1.jpg

If you have the image downloaded (e.g. c:\Users\HP\Downloads\image0 (1).jpeg), copy it here and rename to 'piece1.jpg':

PowerShell example:

Copy-Item "C:\Users\HP\Downloads\image0 (1).jpeg" -Destination "${PWD}\pink-exe-store\images\piece1.jpg"

After placing the file, refresh the site preview to see the real product image.
