import { AuthForm } from "@/components/AuthForm"
import { Card,CardDescription,CardHeader,CardTitle } from "@/components/ui/card"

export default function Login() {
    return (
        <div className="flex flex-1 flex-col items-center">
            <Card className="mt-20 w-full max-w-md">
                <CardHeader>
                    <CardTitle className="flex text-3xl justify-center">Login</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <AuthForm type="login" />
            </Card>
        </div>
    )
}
