import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Create client with fallback for custom domain CORS issues
export const client = createClient({
  projectId: 'k9qzu7ux',
  dataset: 'production',
  useCdn: true, // Use CDN for faster reads
  apiVersion: '2024-01-01',
  perspective: 'published', // Only fetch published documents
  stega: {
    enabled: false, // Disable for better performance
  },
  // Add token for authenticated requests if needed (optional, for draft content)
  // token: import.meta.env.VITE_SANITY_TOKEN,
  
  // Increase timeout for custom domains
  timeout: 30000, // 30 seconds
  
  // Enable withCredentials for CORS
  withCredentials: false,
})

// Fallback client without CDN for custom domain issues
export const clientNoCdn = createClient({
  projectId: 'k9qzu7ux',
  dataset: 'production',
  useCdn: false, // Direct API connection, bypasses CDN CORS
  apiVersion: '2024-01-01',
  perspective: 'published',
  timeout: 30000,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch helper with automatic fallback for CORS issues
export async function fetchWithFallback<T>(query: string, params?: Record<string, any>): Promise<T> {
  try {
    // Try CDN first (faster)
    return await client.fetch<T>(query, params)
  } catch (error: any) {
    // If CORS or network error, fallback to non-CDN client
    if (error?.message?.includes('CORS') || 
        error?.message?.includes('Network') || 
        error?.statusCode === 0) {
      // Silently fallback to non-CDN client
      return await clientNoCdn.fetch<T>(query, params)
    }
    // Re-throw other errors
    throw error
  }
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
    type,
    publishedAt
  }`,
  
  // Search queries
  searchArticles: `*[_type in ["blogPost", "newsUpdate"] && (title match $query || excerpt match $query)] | order(publishedAt desc)[0...10] {
    _id,
    _type,
    title,
    slug,
    excerpt,
    publishedAt,
    type,
    category->{
      name
    }
  }`
  ,
  // Career openings
  getCareerOpenings: `*[_type == "careerOpening" && isActive == true] | order(sortOrder asc, _createdAt desc) {
    _id,
    title,
    location,
    type,
    experience,
    requirements,
    sortOrder,
    isActive
  }`
}
