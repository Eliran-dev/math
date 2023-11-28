import Image from "next/image"
import React from "react"
import { HiArrowNarrowRight, HiChevronDoubleRight } from "react-icons/hi"
import Link from "next/link"

export default function ErrorPages() {
    return (
        <div className="lg:px-20 px-6 align-middle text-center">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-10">
                    <div className="px-6 pb-5">
                        <a className="text-blue-300 lg:text-xl text-md font-firaCode flex flex-wrap space-x-3 ">
                        <h1 className="align-middle text-center">דף זה אינו קיים</h1>
                        </a>

                        
                    </div>

                </div>

            </div>
        </div>
    )    
};
