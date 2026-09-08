import 'server-only'

import type { QueryParams } from 'next-sanity'
import { client } from './client'

export interface SanityFetchOptions {
  query: string
  params?: QueryParams
  tags?: string[]
  revalidate?: number | false
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = tags.length > 0 ? false : 3600,
}: SanityFetchOptions): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      tags,
      revalidate,
    },
  })
}
