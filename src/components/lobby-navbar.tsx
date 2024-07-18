import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconBxsBook, IconBxsPaintRoll, IconHome, IconImage, IconPricetags, IconRectangleList } from '@/icons'

export default function LobbyNavbar() {
    const pages = [
        {
            label: "price",
            url: "/price",
            icon: <IconPricetags size="4rem" />
        },
        {
            label: "portfolio",
            url: "/portfolio",
            icon: <IconImage size="4rem" />
        },
        {
            label: "request",
            url: "/request",
            icon: <IconBxsPaintRoll size="4rem" />
        },
        {
            label: "queue",
            url: "/queue",
            icon: <IconRectangleList size="4rem" />
        },
        {
            label: "guide",
            url: "/guide",
            icon: <IconBxsBook size="4rem" />
        },
    ]
    return (
        <>
            <div className="w-full bg-black bg-opacity-80 z-50 fixed top-0 h-32 flex justify-center items-center">
                <Link href="#" className="text-7xl font-extrabold drop-shadow-lg active:animate-text-color-loop">maru designs</Link>
            </div>
            <div className="w-full bg-black bg-opacity-80 z-50 fixed bottom-0 h-32 flex justify-center items-center">
                <div className="flex justify-center space-x-1">
                    {pages.map((page, index)=> (
                        <Link key={index} href={page.url} className="text-center p-3 flex flex-col justify-between items-center gap-2 w-28 rounded-lg active:ring-2 ring-black active:animate-bg-color-loop active:text-black transition">
                            <div className="drop-shadow-lg">
                                {page.icon}
                            </div>
                            <span className="w-full rounded-t-full drop-shadow-lg font-extrabold">{page.label}</span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="w-full bg-black z-40 fixed bottom-2 h-9 text-center"></div>
        </>
    )
}
