import React from 'react'
import NavBar from '../navBar'
import { Link } from 'react-router-dom'
import WeaponCard from './weaponCard';

export default function Weapons() {
    const [arms, setArms] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/arm')
            .then((response) => response.json())
            .then((data) => setArms(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <NavBar />
            <div className='flex flex-col min-h-screen'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl text-zinc-50 ml-8 font-genshin font-bold mb-4 mt-4'>Weapons</h1>
                    <div>
                        <Link to='/manage-weapons'>
                            <button
                                className='bg-zinc-50 text-zinc-800 font-genshin font-semibold mr-8 mt-4 px-4 py-2 rounded-md hover:bg-zinc-400 hover:text-zinc-50 cursor-pointer transform ease-in-out duration-200'>
                                Manage Weapons
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-y-4 px-4 mt-4'>
                    {arms.map((arm, index) => (
                        index < 18 ? (
                            <WeaponCard key={arm.id} arm={arm} />
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    )
}
