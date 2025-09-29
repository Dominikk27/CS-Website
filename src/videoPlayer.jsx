import React, { useEffect, useState } from 'react';
import hvh from './assets/hvh2.mp4';

const VideoPlayer = ({section}) => {
    const [isOnline, setIsOnline] = useState(0);

    useEffect(() =>{
        const randomActiveClients = () =>{
            const activeClients = Math.floor(Math.random() * (1800 - 800)) + 800;
            setIsOnline(activeClients);
        };

        randomActiveClients();
    },[isOnline]);

    return (
        <section id={section} className='h-screen w-full'>
            <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 filter blur-sm"
            >
                <source src={hvh} type="video/mp4" />
            </video>

            <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-2 justify-center items-center">
                <div className="row">
                    <h1 className='font-brand text-brand-small
                                   md:text-brand-medium 
                                   lg:text-brand-large'>XANITY</h1>    
                </div>
                <div className="flex gap-2">
                    <div className="rounded-lg bg-blue-500 text-white px-6 py-3 hover:bg-blue-300 transition">
                        Get Cheat
                    </div>
                    <div className="px-6 py-3 rounded-[12px] bg-gray-800">
                        View More
                    </div>
                </div>
                <div className="flex w-full justify-center items-center gap-1">
                    <div className="bg-green-500 w-3 h-3 rounded-full"></div><h2 className='font-card text-green-500'>{isOnline} people online</h2>
                </div>            
            </div>
        </section>
    );
};

export default VideoPlayer;
