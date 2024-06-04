import React from 'react'

export default function ElementCard({ element }) {
    return (
        <div className='flex flex-col hover:scale-125 transform duration-300 ease-in-out cursor-pointer justify-center items-center'>
            <div>
                <img
                    className='w-20 h-20'
                    src={element.icon}
                    alt={element.name} />
            </div>
            <div className='font-genshin mt-2 text-lg text-zinc-50'>
                <h1>{element.name}</h1>
            </div>
        </div>
    )
}
