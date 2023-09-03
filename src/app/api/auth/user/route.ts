import { NextRequest, NextResponse } from 'next/server'

import jwtDecode from 'jwt-decode'
import { User } from '@/models/User.model'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value

    if (!token) {
      request.cookies.set('redirectTo', request.url)
      throw new Error(`Unauthorized!!`)
    }

    const user: User = jwtDecode(token)

    return NextResponse.json(user)
  } catch (error: any) {
    throw new Error(error.message ?? 'Internal Error with get user endpoint')
  }
}
