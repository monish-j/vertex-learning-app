import 'server-only'

export const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
  console.warn(
    'Missing SANITY_API_READ_TOKEN in environment. Private dataset queries may fail.'
  )
}

export function assertToken(): string {
  if (!token) {
    throw new Error('Missing environment variable: SANITY_API_READ_TOKEN')
  }
  return token
}
