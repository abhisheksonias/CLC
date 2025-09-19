import { useQuery } from '@tanstack/react-query'
import { client, queries } from '@/lib/sanity'
import type { BlogPost, BlogPostPreview, NewsUpdate, NewsUpdatePreview, Category } from '@/types/sanity'

// Blog post hooks
export function useBlogPosts() {
  return useQuery<BlogPostPreview[]>({
    queryKey: ['blogPosts'],
    queryFn: () => client.fetch(queries.getAllBlogPosts),
  })
}

export function useBlogPost(slug: string) {
  return useQuery<BlogPost>({
    queryKey: ['blogPost', slug],
    queryFn: () => client.fetch(queries.getBlogPostBySlug, { slug }),
    enabled: !!slug,
  })
}

export function useFeaturedBlogPosts() {
  return useQuery<BlogPostPreview[]>({
    queryKey: ['featuredBlogPosts'],
    queryFn: () => client.fetch(queries.getFeaturedBlogPosts),
  })
}

// News update hooks
export function useNewsUpdates() {
  return useQuery<NewsUpdatePreview[]>({
    queryKey: ['newsUpdates'],
    queryFn: () => client.fetch(queries.getAllNewsUpdates),
  })
}

export function useNewsUpdate(slug: string) {
  return useQuery<NewsUpdate>({
    queryKey: ['newsUpdate', slug],
    queryFn: () => client.fetch(queries.getNewsUpdateBySlug, { slug }),
    enabled: !!slug,
  })
}

export function useFeaturedNewsUpdates() {
  return useQuery<NewsUpdatePreview[]>({
    queryKey: ['featuredNewsUpdates'],
    queryFn: () => client.fetch(queries.getFeaturedNewsUpdates),
  })
}

// Category hooks
export function useCategories() {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => client.fetch(queries.getAllCategories),
  })
}
