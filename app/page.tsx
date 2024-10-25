import Center from "@/components/app/feed/center"
import Left from "@/components/app/feed/left"
import Right from "@/components/app/feed/right"
import TopBar from "@/components/app/feed/topbar"
import { Card } from "@/components/ui/card"

export default function SocialPlatform() {


  return (
    <div className="min-h-screen bg-black/80 text-white md:px-4 px-2 md:py-10" >
      <div className=" md:flex md:justify-between md:gap-10 ">
        <div className=" flex-shrink fixed left-14 h-fit">
          <Left />
        </div>

        <div className=" flex-1 flex-grow">
          <Center />
        </div>
        <div className=" flex-shrink fixed right-14 h-fit">
          <Right />
        </div>

      </div>
    </div>
  )
}
