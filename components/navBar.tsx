import React from "react";
import { Avatar, Link } from '@nextui-org/react'
import Image from "next/image";
import whatsappIcon from '../public/assets/whatsappIcon.svg'

export default function Navbar() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-25 pt-5 pb-5 shadow-lg shadow-black/40">
                <div className="flex flex-wrap">
                    <div className="px-6 lg:w-3/4 w-1/2 self-center">
                        <Link className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                            <span className="ml-2">S&M כיתות לימוד</span>
                        </Link>
                    </div>
                    <div className="lg:px-12 px-3 lg:w-1/4 w-1/2 space-x-2 lg:space-x-8 self-center">
                        <Link href={"https://api.whatsapp.com/send/?phone=%2B972544912996&text=%D7%94%D7%99%D7%99,%20%D7%A8%D7%90%D7%99%D7%AA%D7%99%20%D7%90%D7%AA%20%D7%94%D7%9E%D7%95%D7%93%D7%A2%D7%94%20%D7%9C%D7%92%D7%91%D7%99%20%D7%A9%D7%99%D7%A2%D7%95%D7%A8%D7%99%D7%9D%20%D7%91%D7%9E%D7%AA%D7%9E%D7%98%D7%99%D7%A7%D7%94%20%D7%95%D7%A8%D7%A6%D7%99%D7%AA%D7%99%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93"} className="text-white font-bold font-firaCode lg:text-2xl text-sm">
                      הצטרפו עכשיו&nbsp;
   <Image src={whatsappIcon} alt="sd" height={20} width={20} />

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
