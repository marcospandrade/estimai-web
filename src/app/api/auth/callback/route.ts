import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  console.log('request', new URL(request.url))

  const { searchParams } = new URL(request.url)

  const code = searchParams.get('code')
  const state = searchParams.get('state')
  console.log(searchParams)

  // redirect to the URL
  // const redirectTo = request.cookies.get('redirectTo')?.value

  // const registerResponse = await api.post('auth/register', {
  //   code,
  //   state,
  // })
  // const { token } = registerResponse.data
  // console.log('responsseeeee', registerResponse.data)

  const redirectUrl = new URL('/', request.url)
  const cookieExpiresInSeconds = 60 * 60 * 24 * 30 // 30 days
  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=${code}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  })
}
