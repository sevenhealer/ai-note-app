"use client"

import { useState } from "react";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { login, signup } from "@/app/login/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type Props = {
    type: "login" | "signup";
};

export function AuthForm({ type }: Props) {
    const authType = type === "login";
    const route = useRouter()
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsPending(true);

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if (authType) {
            const error = await login(email, password);
            if (error) {
                route.push("/error")
            }
            else{
            toast("Logged in Successful", {
                description: "You have been logged in",
                action: {
                    label: "OK",
                    onClick: () => console.log("Logged in"),
                },
            });
            route.replace("/")
        }
        } else {
            const error = await signup(email, password);
            if (error) {
                route.push("/error")
            }
            toast("Signup Successful", {
                description: "Check you email for comfirmation",
                action: {
                    label: "OK",
                    onClick: () => console.log("Signed out"),
                },
            });
            route.push("/")
        }
        setIsPending(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardContent>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" placeholder="Enter your email" type="email" required />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" id="password" placeholder="Enter your password" type="password" required />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col justify-between mt-4 gap-6">
                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? <Loader2 className="animate-spin" /> : authType ? "Login" : "Signup"}
                </Button>
                <p className="mt-2 text-sm">
                    {authType ? "Don't have an account yet?" : "Already have an account?"}
                    <Link href={authType ? "/signup" : "/login"} className="underline text-blue-500 ml-1">
                        {authType ? "Signup" : "Login"}
                    </Link>
                </p>
            </CardFooter>
        </form>
    );
}
