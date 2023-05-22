import { SignIn } from '@clerk/nextjs'

export default function Login() {
  return (
    <div className="flex-1">
      <SignIn
        afterSignInUrl="http://localhost:3000/home"
        afterSignUpUrl="http://localhost:3000/home"
      />
    </div>
  )
}
