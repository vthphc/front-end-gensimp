import React from 'react'
import { Link } from 'react-router-dom'

export default function WeaponLine({ arm, index }) {
    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:5000/arm/${arm._id}`, {
                method: 'DELETE',
            })
        } catch (error) {
            console.error('Error:', error)
        }
        window.location.reload()
    }

    return (
        <div className='bg-zinc-50 rounded-lg'>
            <div className='p-2'>
                <div className='font-genshin text-zinc-800'>
                    No. {index + 1}
                </div>
                <div className='font-genshin text-zinc-800'>
                    {arm.name}
                </div>
            </div>
            <img src={arm.card} alt={arm.name} className='my-4 ml-8' style={{ width: '95px', height: '313px' }} />
            <div className='flex px-2 pb-2 flex-row font-genshin justify-between'>
                <Link to={`/weapons/${arm._id}/edit`}>
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
