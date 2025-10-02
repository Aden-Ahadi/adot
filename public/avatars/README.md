# Avatar Images Setup

## Directory Structure
```
/public/avatars/
├── avatar-1.jpg to avatar-6.jpg    # Testimonial avatars (main interactive ones)
└── grid/
    └── grid-1.jpg to grid-15.jpg   # Background grid avatars
```

## Image Requirements

### Testimonial Avatars (avatar-1.jpg to avatar-6.jpg)
- **Size**: 400x400px minimum (will be optimized by Next.js)
- **Format**: JPG, PNG, or WebP
- **Content**: Professional headshots of diverse individuals
- **Quality**: High quality, well-lit photos
- **Naming**: avatar-1.jpg, avatar-2.jpg, avatar-3.jpg, avatar-4.jpg, avatar-5.jpg, avatar-6.jpg

### Background Grid Avatars (grid-1.jpg to grid-15.jpg)
- **Size**: 200x200px minimum
- **Format**: JPG, PNG, or WebP  
- **Content**: Diverse professional headshots
- **Quality**: Good quality (will be grayscaled automatically)
- **Naming**: grid-1.jpg, grid-2.jpg, ..., grid-15.jpg

## How to Add Your Images

1. **Download or take photos** of diverse professionals (with permission)
2. **Crop to square aspect ratio** (1:1) focusing on the face
3. **Resize appropriately** (400x400 for testimonials, 200x200 for grid)
4. **Save with correct names** in the respective folders
5. **Restart your development server** to see changes

## Image Sources
- Use your own photos of team members or clients (with permission)
- Purchase stock photos from Getty Images, Shutterstock, or Adobe Stock
- Use free sources like Unsplash (download and host locally)
- Commission a photographer for authentic team photos

## Fallback Behavior
If images fail to load, the system will:
- Show a gray placeholder for grid avatars
- Display alt text for testimonial avatars
- Continue functioning without breaking the layout

## Performance Benefits
- **Faster loading**: Local images load instantly
- **No external dependencies**: No rate limiting or network issues
- **Better SEO**: Images are optimized by Next.js
- **Offline support**: Works without internet connection