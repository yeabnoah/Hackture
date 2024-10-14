import LoginPage from '@/components/app/login'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

const Page = async () => {
  const session = await auth()

  if (session) {
    redirect("/")
  }

  return (
    <div>
      <LoginPage />
    </div>
  )
}

export default Page
