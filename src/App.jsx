import { useState, useEffect, useRef } from 'react'
import './App.css'
import VideoPlayer from './videoPlayer'
import CardsSection from './cardsSection'
import MenuSection from './menuSection'

import music from './assets/music.mp3'
import Features from './featuresSection'
import Bundles from './bundles'
import Footer from './footer'
import Navigation from './navigation'


function App() {
  const audioRef = useRef(null);
  
  const titles = [
    ">_",
    ">X_",
    ">Xa_",
    ">Xan_",
    ">Xani_",
    ">Xanit_",
    ">Xanity_",
    ">Xanity ",
    ">Xanity_",
    ">Xanit_",
    ">Xani_",
    ">Xan_",
    ">Xa_",
    ">X_",
    ">_",
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = titles[index];
  }, [index]);

  useEffect(() =>{
    const musicOnScroll = () =>{
      audioRef.current.play().catch((err) =>{
        console.log("music blocked: ", err);
      });

      window.removeEventListener("click", musicOnScroll);
    };

    window.addEventListener("click", musicOnScroll);

    return () => window.removeEventListener("click", musicOnScroll);
  },[]);


  return (
    <div className='w-full' id='content'>
      <audio ref={audioRef} src={music} loop />
      <Navigation />
      <VideoPlayer section='Home'/>
      <CardsSection />
      <MenuSection section='Preview'/>
      <Features section='Features'/>
      <Bundles section='Bundles'/>
      <Footer />
    </div>
  )
}

export default App
