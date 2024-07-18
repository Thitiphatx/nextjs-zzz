"use client"

import { IconArrowBackUp } from "@/icons"
import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter();
    return (
        <div>
            <button onClick={()=> router.back()} className="text-red-500 ring-4 ring-red-500 backBtn p-1 px-3 active:ring-0 active:animate-active-btn-loop transition">
                <IconArrowBackUp size="2rem"/>
            </button>
        </div>
    )
}
