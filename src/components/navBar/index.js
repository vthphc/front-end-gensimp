import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='flex flex-row text-zinc-100 mt-3 justify-center items-center space-x-4'>
            <Link to='/' >
                <img
                    src='https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/2560px-Genshin_Impact_logo.svg.png'
                    className='cursor-pointer transform hover:scale-110 ease-in-out duration-200 filter invert'
                    width={111}
                    height={40}
                    alt='logo'
                />
            </Link>
            <Link to='/characters' >
                <div className='text-lg font-genshin px-4 py-2 hover:bg-zinc-600 rounded-lg cursor-pointer transform ease-in-out duration-200'>
                    Characters
                </div>
            </Link>
            <Link to='/elements' >
                <div className='text-lg font-genshin px-4 py-2 hover:bg-zinc-600 rounded-lg cursor-pointer transform ease-in-out duration-200'>
                    Elements
                </div>
            </Link>
            <Link to='/weapons' >
                <div className='text-lg font-genshin px-4 py-2 hover:bg-zinc-600 rounded-lg cursor-pointer transform ease-in-out duration-200'>
                    Weapons
                </div>
            </Link>
        </div>
    )

}
