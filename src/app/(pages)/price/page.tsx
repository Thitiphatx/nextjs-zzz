"use client"
import BackButton from "@/components/back-button";
import { VerticalTab } from "@/components/vertical-tab";
import { useEffect, useState } from "react";
import Image from "next/image";
import Badge from "@/components/badge";
import { IconCheck } from "@/icons";
import { PriceNavigation } from "@/components/price/price-navigation";
import { useRouter } from "next/navigation";
import ImageSkeleton from "@/components/skeleton/image-skeleton";

export default function Page() {
    const router = useRouter();
    const [currentTab, setCurrentTab] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    useEffect(()=> {
        setIsLoaded(false);
    }, [currentTab])
    const tiers = [
        {
            tier: "s",
            title: "อนิเมชั่นเต็มรูปแบบ",
            features: ["ละเอียด", "เอฟเฟค"],
            image: {
                static: "https://i.imgur.com/yICDh4g.png",
                full: "https://i.imgur.com/KprkHvm.gif"
            },
            color: "price-preview-green",
            price: 600
        },
        {
            tier: "a",
            title: "อนิเมชั่นครึ่งตัว",
            features: ["ละเอียด", "เอฟเฟค"],
            image: {
                static: "https://i.imgur.com/6DfB9md.png",
                full: "https://i.imgur.com/8WgCVXO.gif"
            },
            color: "price-preview-blue",
            price: 500
        },
        {
            tier: "b",
            title: "อนิเมชั่นครึ่งตัว",
            features: ["เอฟเฟค"],
            image: {
                static: "https://i.imgur.com/jW43WXR.png",
                full: "https://i.imgur.com/NuEzmjw.gif"
            },
            color: "price-preview-zinc",
            price: 400
        },
        {
            tier: "c",
            title: "อนิเมชั่นบางส่วน",
            features: ["ผมปลิว", "ตากระพริบ", "หายใจ", "เอฟเฟค"],
            image: {
                static: "https://i.imgur.com/qVhCulR.png",
                full: "https://i.imgur.com/P9y3yEI.gif"
            },
            color: "price-preview-red",
            price: 300
        },
    ]
    return (
        <div className="min-h-svh">
            <div className="w-full bg-black bg-opacity-80 z-50 fixed top-0 h-32 flex justify-between items-center px-20">
                <BackButton />
            </div>
            <div className="pt-32 px-20">
                <div className="grid grid-cols-5 py-5">
                    <div className="min-w-full">
                        <VerticalTab setCurrentTab={setCurrentTab} currentTab={currentTab}>
                            <div>price</div>
                            <div>choice</div>
                        </VerticalTab>
                    </div>
                    <div className="col-span-4 w-full p-4 max-h-[calc(100vh-12rem)]">
                        {currentTab === 0 && (
                            <>
                            <div className="relative w-full h-full ring-[5px] ring-zinc-700 rounded-3xl bg-black">
                                <div className="absolute right-0 h-full flex flex-col items-end justify-between p-20 z-20">
                                    <div>
                                        <h1 className="text-4xl font-bold text-stroke-3">{tiers[currentPrice].title}</h1>
                                        <div className="flex flex-wrap">
                                            {tiers[currentPrice].features.map((f, index)=> (
                                                <Badge key={index} hasIcon={true} icon={<IconCheck size={"1rem"} />}>
                                                    {f}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <h3 className="text-stroke-3 text-5xl font-bold">{tiers[currentPrice].price} THB</h3>
                                        <button className="bg-black ring-2 ring-zinc-700 rounded-full px-4 py-1 font-bold active:animate-bg-color-loop active:text-black active:ring-0" onClick={()=> router.push("/request")}>เริ่มสั่งทำ</button>
                                    </div>

                                    <PriceNavigation currentTab={currentPrice} setCurrentTab={setCurrentPrice}>
                                        {tiers.map((t, index)=> (
                                            <div key={index} className="h-full w-full relative">
                                                <div className={`flex flex-col items-center justify-end w-full h-full absolute bg-gradient-to-t ${tiers[currentPrice].color} to-transparent rounded-full`}>
                                                    <h2 className="font-bold text-5xl drop-shadow-lg uppercase">{t.tier}</h2>
                                                    <div>
                                                        <small className="uppercase tracking-widest text-sm absolute translate-y-[2px]">tier</small>
                                                        <small className="text-stroke uppercase tracking-widest text-sm">tier</small>
                                                    </div>
                                                </div>
                                                <Image alt="" className="object-cover object-top w-full h-full rounded-full" width={300} height={200} src={t.image.static}/>
                                            </div>
                                        ))}
                                    </PriceNavigation>
                                </div>
                                <div className="absolute w-full h-full z-0">
                                    <ImageSkeleton isLoaded={isLoaded} />
                                </div>
                                <Image style={{display: isLoaded ? 'block' : 'none'}} unoptimized width={1000} height={500} className="object-cover w-full h-full rounded-3xl" alt="tier s preview" onLoad={()=> setIsLoaded(true)} src={tiers[currentPrice].image.full}/>
                            </div>
                            </>

                        )}
                        {currentTab === 1 && (
                            <>
                            <div className="w-60 h-60 z-50">
                                <video width="320" height="240" controls>
                                    <source src="https://i.imgur.com/KprkHvm.mp4" type="video/mp4"/>
                                </video>
                                <ImageSkeleton isLoaded={isLoaded}/>
                                <Image style={{display: isLoaded ? 'block' : 'none'}} onLoad={()=> setIsLoaded(true)} alt="" fill={true} src={"https://i.imgur.com/KprkHvm.gif"}/>
                            </div>
                            
                            </>
                            
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
