'use client';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Navlogo from '../assets/images/png/navlogo.png';


const Header = () => {
    const [show, setShow] = useState(true);
    const [_document, set_document] = useState(null)
    useEffect(() => {
        set_document(document)
        if (show === false) {
            document.body.classList.add("max-lg:overflow-hidden")
        } else {
            document.body.classList.remove("max-lg:overflow-hidden")
        }
    }, [])
    return (
        <div className=' bg-blue-100'>
            <div className="container px-3 mx-auto relative">
                <nav className="flex items-center justify-between py-[30px]">
                    <Link href="">
                        <Image src={Navlogo} alt='Navlogo' className='max-w-[196px] ' />
                    </Link>
                    <ul
                        className={`${show ? "left-[-100%]" : "left-0"
                            } flex max-md:fixed max-md:top-0 max-md:bg-white max-md:h-full max-md:w-full max-md:z-[10] max-md:transition-all max-md:duration-300 max-md:ease-linear max-md:min-h-screen max-md:flex-col gap-[40px] items-center justify-center`}
                    >
                        <li onClick={() => setShow(!show)}>
                            <Link
                                href={"/ourhome"}
                                className="font-normal text-[18px] leading-[150%] text-[#1F1534] opacity-[50%] hover:opacity-[100%] nav_text hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1F1534] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Home
                            </Link>
                        </li>
                        <li onClick={() => setShow(!show)}>
                            <Link
                                href={"/findadoctor"}
                                className="font-normal text-[16px] leading-[150%] text-[#1F1534] opacity-[50%] hover:opacity-[100%] nav_text hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1F1534] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Find a doctor
                            </Link>
                        </li>
                        <li onClick={() => setShow(!show)}>
                            <Link
                                href={"/ourapps"}
                                className="font-normal text-[16px] leading-[150%] text-[#1F1534] opacity-[50%] hover:opacity-[100%] nav_text hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1F1534] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Apps
                            </Link>
                        </li>
                        <li onClick={() => setShow(!show)}>
                            <Link
                                href={"/testimonials"}
                                className="font-normal text-[16px] leading-[150%] text-[#1F1534] opacity-[50%] hover:opacity-[100%] nav_text hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1F1534] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li onClick={() => setShow(!show)}>
                            <Link
                                href={"/aboutus"}
                                className="font-normal text-[16px] leading-[150%] text-[#1F1534] opacity-[50%] hover:opacity-[100%] nav_text hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1F1534] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                About us
                            </Link>
                        </li>
                        <li onClick={() => setShow(!show)}>
                            <Link
                                href={"/map"}
                                className="font-normal text-[16px] leading-[150%] text-[#1F1534] opacity-[50%] hover:opacity-[100%] nav_text hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#1F1534] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Map
                            </Link>
                        </li>
                    </ul>
                    <div
                        onClick={() => setShow(!show)}
                        className="md:hidden w-[35px] h-[23px] relative z-[10] flex justify-between flex-col cursor-pointer"
                    >
                        <span
                            className={`${show
                                ? "bg-[#1F1534] h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                : "bg-[#1F1534] transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[11px]"
                                }`}
                        ></span>
                        <span
                            className={`${show
                                ? "bg-[#1F1534] h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                                }`}
                        ></span>
                        <span
                            className={`${show
                                ? "bg-[#1F1534] h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                                : "bg-[#1F1534] transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-180%]"
                                }`}
                        ></span>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Header;
