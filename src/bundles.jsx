import React from 'react'
import csImage from './assets/features/csImage.jpg'
import { FaStar } from "react-icons/fa6";

const Bundles = ({section}) => {
  return (
    <div id={section} className='overflow-hidden relative w-full min-h-screen items-center'>
        <div className="absolute top-0 left-0 w-full h-full bg-menu-section"></div>
        <div className="relative z-5 w-full h-full flex flex-col justify-center items-center">
            <h1 className='font-section text-section px-0 py-10'>Bundles</h1>
            <div className="relative max-w-full flex flex-wrap gap-10 justify-center items-stretch py-10 w-[1280px] px-[2rem]">
                {/* CARD 1 */}
                <div className="flex flex-col justify-start items-center rounded-2xl bg-cards-bg w-full sm:w-[45%] lg:w-[30%]">
                    <div className="icon">
                    <img src={csImage} alt="" className="w-full h-full object-contain rounded-t-2xl"/>
                    </div>
                    <div className="font-card text-card-title w-full px-5 pb-5">1 Month</div>
                    <div className="font-card text-card-description w-full px-5 pb-5 text-center">
                    15€/Month
                    </div>
                    <div className="w-full h-full flex-1  flex items-end justify-center pt-10">
                        <button className="w-full h-[3.5rem] rounded-b-xl text-black bg-amber-200 hover:bg-amber-300 transition">Buy It!</button>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="relative flex flex-col justify-start items-center rounded-2xl bg-cards-bg w-full sm:w-[45%] lg:w-[30%]">
                    <span className="absolute top-5 right-0 bg-amber-400 text-black text-xs px-2 py-1 rounded-l-md flex justify-center items-center gap-1 font-medium"><FaStar /> Most Popular</span>
                    <div className="icon">
                    <img src={csImage} alt="" className="w-full h-full object-contain rounded-t-2xl"/>
                    </div>
                    <div className="font-card text-card-title w-full px-5 pb-5">1 Year</div>
                    <div className="font-card text-card-description w-full px-5 pb-5 text-center">
                    100€
                    </div>
                    <div className="w-full h-full flex-1  flex items-end justify-center pt-10">
                        <button className="w-full h-[3.5rem] rounded-b-xl text-black bg-amber-200 hover:bg-amber-300 transition">Buy It!</button>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="flex flex-col justify-start items-center rounded-2xl bg-cards-bg w-full sm:w-[45%] lg:w-[30%] ">
                    <div className="icon">
                    <img src={csImage} alt="" className="w-full h-full object-contain rounded-t-2xl"/>
                    </div>
                    <div className="font-card text-card-title w-full px-5 pb-5">Lifetime</div>
                    <div className="font-card text-card-description w-full px-5 pb-5 text-center">
                    150€
                    </div>
                    <div className="w-full h-full flex-1  flex items-end justify-center pt-10">
                        <button className="w-full h-[3.5rem] rounded-b-xl text-black bg-amber-200 hover:bg-amber-300 transition">Buy It!</button>
                    </div>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Bundles