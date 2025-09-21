import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'k9qzu7ux',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const queries = {
  // Blog post queries
  getAllBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    isNew,
    featuredImage,
    downloadUrl,
    category->{
      name,
      slug,
      color
    }
  }`,
  
  getBlogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    publishedAt,
    readTime,
    isNew,
    featuredImage,
    downloadUrl,
    category->{
      name,
      slug,
      color
    },
    seo
  }`,
  
  // News update queries
  getAllNewsUpdates: `*[_type == "newsUpdate"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    type,
    publishedAt,
    readTime,
    isNew,
    featuredImage,
    downloadUrl
  }`,
  
  getNewsUpdateBySlug: `*[_type == "newsUpdate" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    type,
    publishedAt,
    readTime,
    isNew,
    featuredImage,
    downloadUrl,
    seo
  }`,
  
  // Category queries
  getAllCategories: `*[_type == "category"] | order(name asc) {
    _id,
    name,
    slug,
    description,
    color
  }`,
  
  // Featured content queries
  getFeaturedBlogPosts: `*[_type == "blogPost"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    isNew,
    featuredImage,
    category->{
      name,
      slug,
      color
    }
  }`,
  
  getFeaturedNewsUpdates: `*[_type == "newsUpdate"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    type,
    publishedAt,
    readTime,
    isNew,
    featuredImage
  }`,
  
  // Search queries
  searchArticles: `*[_type in ["blogPost", "newsUpdate"] && (title match $query || excerpt match $query || content match $query)] | order(publishedAt desc) {
    _id,
    _type,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    isNew,
    type,
    category->{
      name,
      slug,
      color
    }
  }`
}
