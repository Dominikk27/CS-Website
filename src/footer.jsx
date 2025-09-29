import React from 'react'
import { FaSteam } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-auto py-1 flex items-center justify-between px-1">
        <div className="flex w-full justify-start
                        md:justify-center"><a href="https://steamcommunity.com/profiles/76561198107631671" target='_blank'>❤️Made with love!</a></div>
        <div className='flex gap-2'>
            <a href="https://steamcommunity.com/groups/xanityservice" target='_blank' className=""><FaSteam className='w-7 h-7'/></a>
            <a href="https://discord.gg/Eqy377WfEM" target='_blank' className=""><FaDiscord className='w-8 h-8'/></a>
        </div>
    </div>
  )
}

export default Footer