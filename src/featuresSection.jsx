import React from 'react'

import cloudRadar from './assets/features/cloudRadar.png';
import caseFarming from './assets/features/caseFarming.jpg';
import cloudConfigs from './assets/features/cloudConfigs.jpg';
import kernel from './assets/features/kernel.png';

const Features = ({section}) => {
  return (
    <section id={section} className='w-full h-auto flex flex-col justify-start items-center text-white pb-20'>
      <h1 className='font-section text-section px-0 py-10'>Some Features</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1280px] px-[2rem]">
        {/* CARD 1 */}
        <div className="flex flex-col justify-start items-center rounded-xl bg-cards-bg pb-10">
          <div className="w-full h-45 overflow-hidden">
            <img src={cloudRadar} alt="" className="w-full h-full object-cover rounded-t-2xl"/>
          </div>
          <div className="content">
            <h1 className='font-card text-card-title'>Cloud Radar</h1>
            <p>A sharable radar you can instantly share with friends via a simple web URL.</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col justify-start items-center rounded-xl bg-cards-bg pb-10">
          <div className="w-full h-45 overflow-hidden">
            <img src={caseFarming} alt="" className="w-full h-full object-cover rounded-t-2xl"/>
          </div>
          <div className="content">
            <h1 className='font-card text-card-title'>Case Farming</h1>
            <p>Automate and optimize case farming for maximum profit with minimal effort with automatized scripts.</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="flex flex-col justify-start items-center rounded-xl bg-cards-bg pb-10">
          <div className="w-full  h-45 overflow-hidden bg-white rounded-t-2xl">
            <img src={cloudConfigs} alt="" className="w-full h-full object-contain rounded-t-2xl"/>
          </div>
          <div className="content">
            <h1 className='font-card text-card-title'>Cloud Configs</h1>
            <p>Store and share your configs securely in the cloud for instant access.</p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="flex flex-col justify-start items-center rounded-xl bg-cards-bg pb-10">
          <div className="w-full h-45 overflow-hidden bg-white rounded-t-2xl">
            <img src={kernel} alt="" className="w-full h-full object-contain rounded-t-2xl"/>
          </div>
          <div className="content">
            <h1 className='font-card text-card-title'>Kernel Based</h1>
            <p>Built to pretend it bypasses VAC, EAC and FaceitAC.</p>
          </div>
        </div>
      </div>
      
      
    </section>
  )
}

export default Features