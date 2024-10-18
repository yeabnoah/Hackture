import Center from "@/components/app/feed/center"
import Left from "@/components/app/feed/left"
import Right from "@/components/app/feed/right"
import TopBar from "@/components/app/feed/topbar"

export default function SocialPlatform() {


  return (
    <div className="min-h-screen bg-black/80 text-white px-5 md:px-10 pb-10 pt-5">
      <TopBar />
      <div className="flex flex-col md:flex-row space-x-6">
        <Center />
        <Right />
      </div>
    </div>
  )
}
