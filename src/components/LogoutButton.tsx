"use client";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { logout } from "@/app/login/action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LogoutButton() {
    const [isPending, startTransition] = useTransition();
    const route = useRouter()

    async function handleLogout() {
        startTransition(async () => {
            const error = await logout();
            if(error){
                route.push("/error")
            }
            toast("Logout Successful", {
                description: "You have been logged out",
                action: {
                    label: "OK",
                    onClick: () => console.log("Logged out"),
                },
            });
            route.push("/")
        });
    }

    return (
        <Button
            className="w-20"
            variant="outline"
            disabled={isPending}
            onClick={handleLogout}
        >
            {isPending ? <Loader2 className="animate-spin" /> : "Logout"}
        </Button>
    );
}
