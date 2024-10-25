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
            <Card className="w-full bg-primaryColor/60 max-w-md mx-auto bg-black border-none text-white overflow-hidden rounded-md" >
                <div className="relative h-40  bg-cover bg-center" >
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                    <div className="absolute top-4 left-4 text-2xl" >* </div>
                    < div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" >
                        <Avatar className="h-24 w-24 ring-2 ring-primaryColor" >
                            <AvatarImage src="/creat.jpg?height=96&width=96" alt="Profile picture" />
                            <AvatarFallback>JD </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                < CardContent className="pt-16 pb-8 px-6 text-center " >
                    <h2 className="text-2xl font-bold mb-1 text-primaring-primaryColor" > John Doe </h2>
                    < p className=" mb-4 text-primaryColor" > john.doe@example.com</p>
                    < p className="text-sm text-gray-400 mb-6" >
                        AI - powered hacker | Hackathon enthusiast | Code wizard
                    </p>
                    < div className="flex justify-center space-x-4 mb-6" >
                        {
                            ["twitter", "linkedin", "github", "mail"].map((icon) => (
                                <Button key={icon} variant="outline" size="icon" className="rounded border border-primaryColor hover:scale-110 hover:border-primaring-primaryColor hover:bg-primaring-primaryColor hover:bg-opacity-10 transition-colors" >
                                    {icon === "twitter" && <Twitter className="h-4 w-4 text-primaryColor" />}
                                    {icon === "linkedin" && <Linkedin className="h-4 w-4 text-primaryColor" />}
                                    {icon === "github" && <Github className="h-4 w-4 text-primaryColor" />}
                                    {icon === "mail" && <Mail className="h-4 w-4 text-primaryColor" />}
                                </Button>
                            ))
                        }
                    </div>
                    < Button className="w-full bg-primaryColor hover:bg-primaryColor/80 text-black font-semibold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105" >
                        Connect
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}