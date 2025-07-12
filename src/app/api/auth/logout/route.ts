import { createServerClient } from '../../../../../lib/supabase-server'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const supabase = await createServerClient()
    
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to logout' },
      { status: 500 }
    )
  }
}