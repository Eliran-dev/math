import Image from "next/image"
import React from "react"
import { HiArrowNarrowRight, HiChevronDoubleRight } from "react-icons/hi"
import Query from "./query"

export default function HomeSection() {
    return (
        <div className="lg:px-20 px-6">
            <div className="bg-bgColor rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-40 pt-8 pb-8 shadow-lg shadow-black/50">
                <div className="flex flex-wrap pb-10">

    
                    <div className="w-full text-center px-6">
                        <h1 className="font-rubikFont lg:text-4xl font-bold text-shadowBox text-lg">ברוכים הבאים לכיתות הלימוד של S&M ❤️</h1>
                        <h3 className="font-firaCode text-sm lg:text-2xl italic text-gray-400 lg:mb-10 mb-5">כיתות לימוד מתמטיקה מצומצמות להשגת מצוינות</h3>
                    </div>
                </div>
            </div>
        </div>
    )    
};
