import { PortableText } from '@portabletext/react'
import { urlFor } from './sanity'
import type { SanityContent, SanityImage } from '@/types/sanity'

// Custom components for rendering Sanity content
const portableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset) return null
      
      return (
        <div className="my-6">
          <img
            src={urlFor(value).width(800).height(400).fit('crop').url()}
            alt={value.alt || ''}
            className="w-full h-auto rounded-lg shadow-md"
            loading="lazy"
            decoding="async"
          />
          {value.alt && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.alt}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed text-gray-700">{children}</p>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-6">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-lg font-semibold text-gray-800 mb-3 mt-5">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-4">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
}

interface SanityContentRendererProps {
  content: SanityContent
  className?: string
}

export function SanityContentRenderer({ content, className = '' }: SanityContentRendererProps) {
  return (
    <div className={`prose max-w-none prose-p:leading-relaxed ${className}`}>
      <PortableText value={content} components={portableTextComponents} />
    </div>
  )
}
