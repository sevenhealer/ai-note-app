"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function LogoutButton(){
    const [loading, setLoading] = useState(false)
    async function handleLogout(){
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        const errorMessage = null
        if(!errorMessage){
            toast("Logged Out", {
                description: "You have been successfully logged out",
                action: {
                    label: "success",
                    onClick: () => console.log("Success")
                },
            })
        }
        else{
            toast("Error", {
                description: errorMessage,
                action: {
                    label: "Error",
                    onClick: () => console.log("Error")
                },
            })
        }
    }
    return(
        <>
        <Button 
        className="w-20"
        variant="outline"
        disabled={loading}
        onClick={handleLogout}
        >
            { loading ? <Loader2 className="animate-spin"/> : "Logout"}
        </Button>
        </>
    )
}