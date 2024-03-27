"use client";
import Image from "next/image";
import musicImg from "../assets/images/png/break-img.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import { DisPrevBtn, DisNextBtn } from "./IconImg";

export default function Map() {
    const slider = useRef(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const slider3 = useRef(null);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const carddata = [
        {
            Image: musicImg,
            heading: "hello",
            content: "Developer",
            paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur soluta quas quisquam provident voluptas recusandae minus aliquid necessitatibus repellendus laboriosam doloribus voluptatibus, possimus error ea autem hic ratione.",
        },
        {
            Image: musicImg,
            heading: "hello",
            content: "UI/UX designer",
            paragraph:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur soluta quas quisquam provident voluptas recusandae minus aliquid necessitatibus repellendus laboriosam doloribus voluptatibus, possimus error ea autem hic ratione.",
        },
    ];

    const arr1 = [
        {
            head: "slider 1",
            Image: musicImg,
            slide: slider,
        },
        {
            head: "slider 2",
            Image: musicImg,
            slide: slider1,
        },
        {
            head: "slider 3",
            Image: musicImg,
            slide: slider2,
        },
        {
            head: "slider 4",
            Image: musicImg,
            slide: slider3,
        },
    ];
    return (
        <>
            <div className="container mx-auto px-3">
                <div className="flex-row flex flex-wrap gap-[30px] justify-center">
                    {carddata.map((a, index) => (
                        <div key={index} className="lg:w-[41%] mt-5 ">
                            <div className="loading-box">
                                <div className="music-card justify-center items-center flex flex-col">
                                    <Image src={a.Image} alt="music" className=" w-100" />
                                    <h1 className="text-[30px] text-bold capitalize ">{a.heading}</h1>
                                    <h3 className="my-0 text-[24px] text-bold capitalize">{a.content}</h3>
                                    <p className="max-w-[900px] text-center">{a.paragraph}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {arr1.map((e, index) => {
                    return (
                        <>
                            <div id={index}>
                                <div className="mt-5 container mx-auto justify-center">
                                    <Slider className="text-[30px] font-bold w-[55%]" ref={e.slide} {...settings}>
                                        <div>
                                            <h1>{e.head}</h1>
                                            <Image src={e.Image} alt="music" className="w-100 max-w-[500px]" />
                                        </div>
                                        <div>
                                            <h1>{e.head}</h1>
                                            <Image src={e.Image} alt="music" className="w-100 max-w-[500px]" />
                                        </div>
                                        <div>
                                            <h1>{e.head}</h1>
                                            <Image src={e.Image} alt="music" className="w-100 max-w-[500px]" />
                                        </div>
                                    </Slider>
                                    <div className="flex gap-[8px] mt-[30px]">
                                        <button
                                            onClick={() => e.slide?.current?.slickPrev()}
                                            className="pos_rel"
                                        >
                                            {" "}
                                            <DisPrevBtn />
                                        </button>
                                        <button
                                            onClick={() => e.slide?.current?.slickNext()}
                                            className="pos_rel"
                                        >
                                            {" "}
                                            <DisNextBtn />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
