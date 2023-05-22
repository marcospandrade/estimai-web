import { UserButton } from '@clerk/nextjs'

export default function Example() {
  return (
    <>
      <header>
        teste
        <UserButton afterSignOutUrl="/" />
        teste
      </header>
      <div>Your page content can go here.</div>
    </>
  )
}
