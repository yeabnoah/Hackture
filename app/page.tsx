import Center from "@/components/app/feed/center"
import Left from "@/components/app/feed/left"
import Right from "@/components/app/feed/right"
import RightSidebar from "@/components/app/feed/rightTest"
import TopBar from "@/components/app/feed/topbar"
import { Card } from "@/components/ui/card"

export default function SocialPlatform() {


  return (
    <div className="min-h-screen h-screen text-white bg-black md:px-4 px-2 md:py-10" >
      <div className="md:flex bg-black">
        <div className=" flex-1 mx-auto md:ml-[26vw]">
          <Center />
        </div>
        <div className="  flex-1 h-fit">
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}
