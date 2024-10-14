import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { auth } from "@/lib/auth"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { redirect } from "next/navigation"

export default async function DarkProfileCard() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className=" flex flex-row justify-center items-center h-screen">
            <Card className="w-full max-w-md mx-auto bg-black text-white overflow-hidden rounded-md border-[#A7EE43]/40" >
                <div className="relative h-40 bg-[url('/hack.png?height=160&width=384')] bg-cover bg-center" >
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="absolute top-4 left-4 text-2xl" >* </div>
                    < div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" >
                        <Avatar className="h-24 w-24 ring-2 ring-[#ADFF2F]" >
                            <AvatarImage src="/default_user.jpg?height=96&width=96" alt="Profile picture" />
                            <AvatarFallback>JD </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                < CardContent className="pt-16 pb-8 px-6 text-center " >
                    <h2 className="text-2xl font-bold mb-1 text-[#ADFF2F]" > John Doe </h2>
                    < p className="text-gray-400 mb-4" > john.doe@example.com</p>
                    < p className="text-sm text-gray-400 mb-6" >
                        AI - powered hacker | Hackathon enthusiast | Code wizard
                    </p>
                    < div className="flex justify-center space-x-4 mb-6" >
                        {
                            ["twitter", "linkedin", "github", "mail"].map((icon) => (
                                <Button key={icon} variant="outline" size="icon" className="rounded-full border-gray-700 hover:border-[#ADFF2F] hover:bg-[#ADFF2F] hover:bg-opacity-10 transition-colors" >
                                    {icon === "twitter" && <Twitter className="h-4 w-4" />}
                                    {icon === "linkedin" && <Linkedin className="h-4 w-4" />}
                                    {icon === "github" && <Github className="h-4 w-4" />}
                                    {icon === "mail" && <Mail className="h-4 w-4" />}
                                </Button>
                            ))
                        }
                    </div>
                    < Button className="w-full bg-[#ADFF2F] hover:bg-[#9ACD32] text-black font-semibold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105" >
                        Connect
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}