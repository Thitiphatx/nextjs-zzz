"use client"
import BackButton from "@/components/back-button";
import { HorizontalTab } from "@/components/horizontal-tab";
import { IconBxsFileGif } from "@/icons";
import Image from "next/image";
import { useState } from "react";
import Masonry from "react-masonry-css";

export default function Page() {
    const [currentTab, setCurrentTab] = useState(0);
    const imgs = ["https://i.imgur.com/MFPgwgJ.gif", "https://i.imgur.com/l1CiFG7.gif", "https://i.imgur.com/s9PKl1M.gif", "https://i.imgur.com/m6Gn7vp.gif", "https://i.imgur.com/HSBEplR.gif", "https://i.imgur.com/NuEzmjw.gif"]
    const breakPoints = {
        default: 4, // Adjust for desired number of columns on larger screens
        800: 2,
        600: 1,
    };
    return (
        <div className="min-h-svh">
            <div className="w-full bg-black bg-opacity-80 z-50 fixed top-0 h-32 flex justify-between items-center px-20">
                <BackButton />
                <HorizontalTab setCurrentTab={setCurrentTab} currentTab={currentTab}>
                    <div>artwork</div>
                    <div>long workshop</div>
                    <div>workshop</div>
                </HorizontalTab>
            </div>
            <div className="mt-32 px-20">
                <Masonry
                    breakpointCols={breakPoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    >
                    {data.map((image) => (
                        <div key={image.id} className="mb-10 ring-[5px] ring-black rounded-t-3xl rounded-bl-3xl">
                            <div className="absolute p-5 drop-shadow-md">
                                <IconBxsFileGif size="2rem"/>
                            </div>
                            
                            <Image unoptimized width="800" height="300" src={image.source.replace(".gif", "l.gif")} className="rounded-t-3xl" alt={image.name} />
                            <div className="w-full bg-zinc-800 rounded-bl-3xl p-5">
                                <h2 className="font-bold text-white">{`[${image.type}] ${image.name}`}</h2>
                                <span className="text-zinc-300 truncate line-clamp-2">{`${image.tag}`}</span>
                            </div>
                        </div>
                        
                    ))}
                </Masonry>
            </div>
        </div>
    )
}

const data = [
  {
    id: "558",
    name: "nonomi",
    tier: "a",
    type: "artwork",
    tag: "izayou nonomi, blue archive",
    source: "https://i.imgur.com/MuS3NOy.gif"
  },
  {
    id: "570",
    name: "chisato",
    tier: "a",
    type: "artwork",
    tag: "chisato nishikigi, lycoris recoil",
    source: "https://i.imgur.com/wE1swEW.gif"
  },
  {
    id: "free1",
    name: "yelan",
    tier: "a",
    type: "artwork",
    tag: "yelan, genshin impact",
    source: "https://i.imgur.com/IwXS7Ia.gif"
  },
  {
    id: "572",
    name: "ayame",
    tier: "a",
    type: "artwork",
    tag: "nakiri ayame, vtuber",
    source: "https://i.imgur.com/hUoB5jK.gif"
  },
  {
    id: "578",
    name: "marisa",
    tier: "s",
    type: "artwork",
    tag: "kirisame marisa, unfinished dream of all living ghost",
    source: "https://i.imgur.com/12vWGZp.gif"
  },
  {
    id: "579",
    name: "marisa",
    tier: "s",
    type: "artwork",
    tag: "kirisame marisa, unfinished dream of all living ghost",
    source: "https://i.imgur.com/3WsxBv7.gif"
  },
  {
    id: "599",
    name: "fieren",
    tier: "s",
    type: "artwork",
    tag: "fieren, frieren: beyond journey's end",
    source: "https://i.imgur.com/KprkHvm.gif"
  },
  {
    id: "583",
    name: "yotsuba",
    tier: "b",
    type: "artwork",
    tag: "nakano yotsuba, gotoubun no hanayome",
    source: "https://i.imgur.com/P16Y6NF.gif"
  },
  {
    id: "584",
    name: "aqua",
    tier: "s",
    type: "artwork",
    tag: "minato aqua, vtuber",
    source: "https://i.imgur.com/wrJ3Tv0.gif"
  },
  {
    id: "585",
    name: "aqua",
    tier: "s",
    type: "long workshop",
    tag: "minato aqua, vtuber",
    source: "https://i.imgur.com/WHCdu0x.gif"
  },
  {
    id: "587",
    name: "aqua",
    tier: "a",
    type: "artwork",
    tag: "minato aqua, vtuber",
    source: "https://i.imgur.com/ufSQ9C7.gif"
  },
  {
    id: "Maru1",
    name: "makima",
    tier: "a",
    type: "long workshop",
    tag: "makima, chainsaw man",
    source: "https://i.imgur.com/oHPiK4u.gif"
  },
  {
    id: "586",
    name: "aqua",
    tier: "s",
    type: "artwork",
    tag: "minato aqua, vtuber",
    source: "https://i.imgur.com/IAyJBAr.gif"
  },
  {
    id: "541",
    name: "mudrock",
    tier: "s",
    type: "artwork",
    tag: "mudrock, arkknight",
    source: "https://i.imgur.com/oTR6Kk6.gif"
  },
  {
    id: "544",
    name: "yor",
    tier: "a",
    type: "artwork",
    tag: "yor forger, spy x family",
    source: "https://i.imgur.com/h8PpyFx.gif"
  },
  {
    id: "554",
    name: "yukino",
    tier: "s",
    type: "artwork",
    tag: "yukinoshita yukino, oregairu",
    source: "https://i.imgur.com/WFMaCyV.gif"
  },
  {
    id: "559",
    name: "original",
    tier: "s",
    type: "artwork",
    tag: "original",
    source: "https://i.imgur.com/8cjC4pq.gif"
  },
  {
    id: "568",
    name: "eunectes",
    tier: "s",
    type: "long workshop",
    tag: "eunectes, arkknight",
    source: "https://i.imgur.com/x2iZUVH.gif"
  },
  {
    id: "592",
    name: "original",
    tier: "s",
    type: "long workshop",
    tag: "original",
    source: "https://i.imgur.com/008QhhI.gif"
  },
  {
    id: "596",
    name: "original",
    tier: "a",
    type: "long workshop",
    tag: "original",
    source: "https://i.imgur.com/Np8jbfS.gif"
  },
  {
    id: "597",
    name: "shalltear",
    tier: "s",
    type: "long workshop",
    tag: "shalltear bloodfallen, overlord",
    source: "https://i.imgur.com/eYnvy8E.gif"
  },
  {
    id: "487",
    name: "asuka",
    tier: "c",
    type: "artwork",
    tag: "asuka langley sohryu, evangelion",
    source: "https://i.imgur.com/P9y3yEI.gif"
  },
  {
    id: "595",
    name: "original",
    tier: "b",
    type: "long workshop",
    tag: "original",
    source: "https://i.imgur.com/NuEzmjw.gif"
  },
  {
    id: "600",
    name: "raphtalia",
    tier: "a",
    type: "artwork",
    tag: "raphtalia, the rising of the shield hero",
    source: "https://i.imgur.com/Pko99qI.gif"
  },
  {
    id: "601",
    name: "arona",
    tier: "b",
    type: "artwork",
    tag: "arona, blue archive",
    source: "https://i.imgur.com/HSBEplR.gif"
  },
  {
    id: "602",
    name: "fieren",
    tier: "s",
    type: "long workshop",
    tag: "fieren, frieren: beyond journey's end",
    source: "https://i.imgur.com/Jl2xvGa.gif"
  },
  {
    id: "603",
    name: "plana",
    tier: "a",
    type: "long workshop",
    tag: "plana, blue archive",
    source: "https://i.imgur.com/m6Gn7vp.gif"
  },
  {
    id: "robin",
    name: "robin",
    tier: "a",
    type: "animation",
    tag: "robin, honkai starrail",
    source: "https://i.imgur.com/MFPgwgJ.gif"
  },
  {
    id: "604",
    name: "uto",
    tier: "s",
    type: "long workshop",
    tag: "amatsuka uto, vtuber",
    source: "https://i.imgur.com/l1CiFG7.gif"
  },
  {
    id: "606",
    name: "lucia",
    tier: "s",
    type: "long workshop",
    tag: "lucia crimson weave, punishing gray raven",
    source: "https://i.imgur.com/s9PKl1M.gif"
  }
].reverse();
