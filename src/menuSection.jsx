import React from 'react'
import menuShowcase from './assets/menu.png'

const MenuSection = ({section}) => {
  return (
    <section id={section} className='overflow-hidden relative w-full min-h-screen flex flex-col items-center text-white'>
        <div className="absolute w-full h-full bg-menu-section filter blur-sm"></div>
        <div className="relative z-5 w-full h-full">
            <h1 className='font-section text-section px-0 py-10'>Showcase</h1>
        </div>
        <div className="relative flex flex-col-reverse gap-[2rem] w-full h-full flex-wrap content-stretch
                        md:flex-row
                        xl:justify-items-center-safe">
            <div className="w-full px-3 h-full flex items-center pb-5
                            md:w-[50%] md:px-10 xl:justify-center">
                <p className='font-description text-description
                              xl:w-[70%]'>
                    Welcome to the Xanity – a cheat powered by advanced AI systems.
                    Explore cutting-edge features like precision Anti-Aim controls, fully customizable ESP visuals, and a wide range of Misc tools designed for maximum flexibility.
                    Every option is engineered to deliver intelligent automation, smooth performance, and the ultimate competitive edge.
                </p>
            </div>
            <div className="relative top-0 rigt-100
                            md:absolute md:w-[50%] md:h-200 md:top-0 md:right-[-10rem] lg:right-[-15rem]">
                <img src={menuShowcase} alt="menu-showcase" className='rounded-[0.8rem] lg:rounded-[2rem]'/>
            </div>

        </div>
    </section>
  )
}

export default MenuSection