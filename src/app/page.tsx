"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Home() {
    const searchParams = useSearchParams();
    const code = searchParams.get("code");
    const router = useRouter()

    useEffect(() => {
      if (code) {
          setTimeout(() => {
              toast.success("You can now log in.", {
                  description: "Verification successful!",
                  action: {
                      label: "OK",
                      onClick: () => console.log("OK clicked"),
                  },
              });
          }, 500);
          router.push("/login")
      }
  }, [code]);

    return (
        <div className="text-2xl font-semibold">
            HomePage
        </div>
    );
}
