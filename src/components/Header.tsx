import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import { LogoutButton } from "./LogoutButton";

export default function Header() {
    const user = null
    return (
        <header className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8 shadow-blue-500 shadow-sm">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/cat.png" alt="cat" width={60} height={60} />
                <h1 className="flex flex-col text-2xl font-semibold leading-6">
                    Cat<span>Notes</span>
                </h1>
            </Link>
            <div className="flex gap-4">
                {
                    user ?
                        <LogoutButton /> :
                        <>
                            <Button asChild>
                                <Link href="/signup">
                                    Signup  
                                </Link>
                            </Button>
                            <Button asChild>
                                <Link href="/login">
                                    Login
                                </Link>
                            </Button>
                        </>
                }
                <ModeToggle />
            </div>
        </header>
    )
}
