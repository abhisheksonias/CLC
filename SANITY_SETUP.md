# Sanity CMS Integration Setup Guide

This guide will help you set up and use the Sanity CMS integration for your CLC website.

## 🚀 Quick Start

### 1. Start the Sanity Studio

```bash
cd sanity
npm run dev
```

This will start the Sanity Studio at `http://localhost:3333` where you can manage your content.

### 2. Start the React App

```bash
# From the root directory
npm run dev
```

This will start your React app at `http://localhost:5173`.

## 📝 Content Management

### Adding Blog Posts

1. Go to the Sanity Studio (`http://localhost:3333`)
2. Click on "Blog Post" in the sidebar
3. Click "Create" to add a new blog post
4. Fill in the required fields:
   - **Title**: The blog post title
   - **Slug**: Auto-generated from title (can be customized)
   - **Excerpt**: Short description for the blog listing
   - **Content**: Rich text content using the editor
   - **Category**: Select from existing categories or create new ones
   - **Published At**: Publication date
   - **Read Time**: Estimated reading time
   - **Mark as New**: Toggle for highlighting new content
   - **Featured Image**: Optional hero image
   - **Download URL**: Optional link to download related documents

### Adding News Updates

1. Go to "News Update" in the Sanity Studio
2. Click "Create" to add a new news update
3. Fill in the required fields:
   - **Title**: The news update title
   - **Slug**: Auto-generated from title
   - **Excerpt**: Short description
   - **Content**: Rich text content
   - **Type**: Select from Case Update, News, Publication, or Deal Corner
   - **Published At**: Publication date
   - **Read Time**: Estimated reading time
   - **Mark as New**: Toggle for highlighting
   - **Featured Image**: Optional hero image
   - **Download URL**: Optional link to related documents

### Managing Categories

1. Go to "Category" in the Sanity Studio
2. Create categories for your blog posts
3. Each category can have:
   - **Name**: Category name
   - **Slug**: URL-friendly identifier
   - **Description**: Optional description
   - **Color**: Hex color code for display

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in your root directory:

```env
VITE_SANITY_PROJECT_ID=k9qzu7ux
VITE_SANITY_DATASET=production
```

### Sanity Configuration

The Sanity configuration is in `sanity/sanity.config.ts`. The project ID and dataset are already configured.

## 📁 File Structure

```
CLC/
├── sanity/                          # Sanity Studio
│   ├── schemas/                     # Content schemas
│   │   ├── blogPost.ts             # Blog post schema
│   │   ├── newsUpdate.ts           # News update schema
│   │   └── category.ts             # Category schema
│   ├── sanity.config.ts            # Sanity configuration
│   └── migrate-content.js          # Sample content migration
├── src/
│   ├── lib/
│   │   ├── sanity.ts               # Sanity client configuration
│   │   └── sanityContent.tsx       # Content rendering utilities
│   ├── hooks/
│   │   └── useSanityData.ts        # React hooks for data fetching
│   ├── types/
│   │   └── sanity.ts               # TypeScript types
│   ├── components/
│   │   ├── Insights.tsx            # Updated to use Sanity data
│   │   ├── NewsUpdates.tsx         # New news updates component
│   │   └── RightSidebar.tsx        # Updated with Sanity data
│   └── pages/
│       ├── Blog.tsx                # Updated to use Sanity data
│       └── News.tsx                # New news page
```

## 🎨 Customization

### Styling

The components maintain the existing design system. All styling uses Tailwind CSS classes that match your current design.

### Content Rendering

Rich text content is rendered using the `SanityContentRenderer` component, which supports:
- Headings (H3, H4)
- Paragraphs
- Lists (bullet and numbered)
- Bold and italic text
- Images with alt text
- Custom styling that matches your design

### Adding New Content Types

To add new content types:

1. Create a new schema in `sanity/schemas/`
2. Add it to `sanity/schemaTypes/index.ts`
3. Create TypeScript types in `src/types/sanity.ts`
4. Add queries in `src/lib/sanity.ts`
5. Create React hooks in `src/hooks/useSanityData.ts`
6. Build components to display the content

## 🚀 Deployment

### Sanity Studio

The Sanity Studio can be deployed to Sanity's hosting:

```bash
cd sanity
npm run build
npx sanity deploy
```

### React App

Deploy your React app as usual. Make sure to set the environment variables in your production environment.

## 🔍 Troubleshooting

### Common Issues

1. **Content not loading**: Check that the Sanity project ID and dataset are correct
2. **Images not displaying**: Ensure images are properly uploaded to Sanity
3. **Type errors**: Make sure all TypeScript types are properly defined

### Getting Help

- Sanity Documentation: https://www.sanity.io/docs
- Sanity Community: https://www.sanity.io/community

## 📊 Sample Content

To populate your Sanity instance with sample content, you can run the migration script:

```bash
cd sanity
node migrate-content.js
```

Note: You'll need to set up a Sanity token for this to work.

## 🎯 Next Steps

1. Start the Sanity Studio and add your content
2. Customize the schemas if needed
3. Add more content types as required
4. Set up proper SEO metadata
5. Configure image optimization
6. Set up content previews

Your Sanity CMS integration is now ready to use! 🎉
