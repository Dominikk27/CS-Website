import React from 'react'
import { IoShieldHalfSharp } from "react-icons/io5";
import { FaCrosshairs } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";

const CardsSection = () => {
  return (
    <section className='w-full h-auto flex flex-col justify-start items-center text-white pb-20'>
  <h1 className='font-section text-section px-0 py-10'>Hello there</h1>

  <div className="max-w-full flex flex-wrap gap-10 justify-center items-stretch py-10 w-[1280px] px-[2rem]">
    {/* CARD 1 */}
    <div className="flex flex-col justify-start items-center rounded-xl bg-cards-bg w-full sm:w-[45%] lg:w-[30%] pb-10">
      <div className="icon py-5">
        <IoShieldHalfSharp className='w-20 h-20'/>
      </div>
      <div className="font-card text-card-title w-full px-5 pb-5">VAC SAFE</div>
      <div className="font-card text-card-description w-full px-5 pb-5 text-center">
        Stay safe against VAC – sneak past detection while you dominate the game.
      </div>
    </div>

    {/* CARD 2 */}
    <div className="flex flex-col justify-start items-center rounded-xl bg-cards-bg w-full sm:w-[45%] lg:w-[30%] pb-10">
      <div className="icon py-5">
        <FaCrosshairs className='w-20 h-20'/>
      </div>
      <div className="font-card text-card-title w-full px-5 pb-5">PRECISION</div>
      <div className="font-card text-card-description w-full px-5 pb-5 text-center">
        Never miss – line up every shot perfectly and crush your enemies effortlessly.
      </div>
    </div>

    {/* CARD 3 */}
    <div className="flex flex-col justify-start items-center rounded-xl bg-cards-bg w-full sm:w-[45%] lg:w-[30%] pb-10">
      <div className="icon py-5">
        <FaDollarSign className='w-20 h-20'/>
      </div>
      <div className="font-card text-card-title w-full px-5 pb-5">COST EFFECTIVE</div>
      <div className="font-card text-card-description w-full px-5 pb-5 text-center">
        Cheats that give you an advantage without emptying your wallet – smart and powerful.
      </div>
    </div>
  </div>
</section>

  )
}

export default CardsSection