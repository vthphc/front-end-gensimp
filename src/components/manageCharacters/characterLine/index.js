import React from 'react'
import { Link } from 'react-router-dom'

export default function CharacterLine({ character, index }) {

    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:5000/character/${character._id}`, {
                method: 'DELETE',
            })
        } catch (error) {
            console.error('Error:', error)
        }
        window.location.reload()
    }

    return (
        <div className='bg-zinc-50 w-40 rounded-md p-2'>
            <div className='flex font-genshin flex-row justify-between'>
                <div>
                    No. {index + 1}
                </div>
                <div>
                    {character.name}
                </div>
            </div>
            <div className='flex justify-center items-center my-2'>
                <img src={character.icon} alt={character.name} className='w-20 h-20' />
            </div>
            <div className='flex flex-row font-genshin justify-between'>
                <Link to={`/characters/${character._id}/edit`}>
                    <button className=' bg-green-500 rounded-lg p-2 text-zinc-50'>
                        Edit
                    </button>
                </Link>
                <button
                    className='bg-red-500 p-2 rounded-lg text-zinc-50'
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
