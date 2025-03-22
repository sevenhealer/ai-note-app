"use client"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useTransition } from "react"
import { Loader2 } from "lucide-react"

type Props = {
    type : "login" | "signup"
}

export function AuthForm({ type } : Props) {

    const authType = type === "login"
    const [ isPending , startTransition ] = useTransition()
    function handleSubmit(){
        console.log("Form submitted")
    }

    return (<>
        <CardContent>
            <form action={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" type="email" required/>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Enter your password" type="password" required />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-between mt-4 gap-6">
            <Button className="w-full">{ isPending ? <Loader2 className="animate-spin" /> : authType ? "Login" : "Signup" }</Button>
            <p className="mt-2 text-sm">{ authType ? "Don't have an account yet?" : "Already have an account?"}
                <Link href={ authType ? "/signup" : "/login"} className="underline text-blue-500 ml-1">{ authType ? "Signup" : "Login"}</Link>
            </p>
        </CardFooter>
    </>)
}