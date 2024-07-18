"use client"
import LobbyNavbar from "@/components/lobby-navbar";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Home() {
    return (
        <div>
            <div className="cursor-grab">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Image src="https://images.wallpapersden.com/image/download/anget-frieren-beyond-journey-s-end_bmdpaGyUmZqaraWkpJRmbmdlrWZmaGg.jpg" width="1920" height="1080" className="object-cover w-full h-screen z-0" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://i.imgur.com/s9PKl1M.gif" width="1920" height="1080" className="object-cover w-full h-screen z-0" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://c.wallhere.com/photos/d6/7e/Sousou_No_Frieren_anime-2286830.jpg!d" width="1920" height="1080" className="object-cover w-full h-screen z-0" alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="https://c.wallhere.com/photos/d6/7e/Sousou_No_Frieren_anime-2286830.jpg!d" width="1920" height="1080" className="object-cover w-full h-screen z-0" alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <LobbyNavbar />
        </div>
    );
}
