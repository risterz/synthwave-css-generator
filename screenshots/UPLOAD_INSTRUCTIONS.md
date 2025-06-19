# 📸 Screenshot Upload Instructions

The README.md file references screenshot images that need to be uploaded to this directory.

## Required Screenshots

Please upload the following screenshot files to this `/screenshots` directory:

1. **synthwave-app-main.png** - Main interface showing all three panels
2. **synthwave-controls.png** - Control panel with sliders and inputs  
3. **synthwave-code-output.png** - Code generation panel
4. **synthwave-reset-button.png** - Reset button with hover effect

## How to Upload Screenshots

### Method 1: GitHub Web Interface
1. Navigate to https://github.com/risterz/synthwave-css-generator/tree/main/screenshots
2. Click "Add file" → "Upload files"
3. Drag and drop or select the screenshot files
4. Commit the changes

### Method 2: Git Command Line
```bash
# Clone the repository
git clone https://github.com/risterz/synthwave-css-generator.git
cd synthwave-css-generator

# Add your screenshot files to the screenshots directory
cp /path/to/your/screenshots/*.png screenshots/

# Commit and push
git add screenshots/*.png
git commit -m "📸 Add application screenshots"
git push origin main
```

### Method 3: Take New Screenshots
1. Run the development server: `npm run dev`
2. Navigate to http://localhost:5173/
3. Take screenshots of:
   - Full application interface (1400x900px recommended)
   - Control panel section
   - Code output section  
   - Reset button with hover effect
4. Save as PNG files with the names listed above
5. Upload using Method 1 or 2

## Screenshot Specifications

- **Format**: PNG (preferred) or JPG
- **Main Interface**: 1400x900px or similar wide aspect ratio
- **Component Screenshots**: 500x800px or appropriate size
- **Quality**: High resolution for clear documentation

## After Upload

Once the screenshots are uploaded:
1. The README.md will automatically display the images
2. The repository will have complete visual documentation
3. Users can see the application's interface before trying it

## Current Status

❌ synthwave-app-main.png - **MISSING**  
❌ synthwave-controls.png - **MISSING**  
❌ synthwave-code-output.png - **MISSING**  
❌ synthwave-reset-button.png - **MISSING**

Please upload these files to complete the repository documentation.