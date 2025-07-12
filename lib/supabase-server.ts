import { createServerClient as createSupabaseServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { CookieOptions } from '@supabase/ssr'

export async function createServerClient() {
  const cookieStore = await cookies()

  return createSupabaseServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: Partial<CookieOptions>) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch {
            // Ignore cookie setting errors in read-only contexts
          }
        },
        remove(name: string, options: Partial<CookieOptions>) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch {
            // Ignore cookie setting errors in read-only contexts
          }
        },
      },
    }
  )
}

export async function getUser() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  return user
}