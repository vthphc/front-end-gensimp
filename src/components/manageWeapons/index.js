import React from 'react'
import NavBar from '../navBar'
import { Link } from 'react-router-dom'
import WeaponLine from './weaponLine';

export default function ManageWeapons() {
    const [arms, setArms] = React.useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');

    React.useEffect(() => {
        fetch('http://localhost:5000/arm')
            .then((response) => response.json())
            .then((data) => setArms(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredArms = arms.filter(arm =>
        arm.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='flex flex-col'>
            <NavBar />
            <div className='flex flex-col min-h-screen'>
                <div className='flex flex-row justify-between'>
                    <h1 className='text-3xl text-zinc-50 ml-8 font-genshin font-bold mb-4 mt-4'>Manage Weapons</h1>
                    <Link to='/add-weapon'>
                        <button
                            className='bg-zinc-50 text-zinc-800 font-genshin font-semibold mr-8 mt-4 px-4 py-2 rounded-md hover:bg-zinc-400 hover:text-zinc-50 cursor-pointer transform ease-in-out duration-200'>
                            Add Weapon
                        </button>
                    </Link>
                </div>
                <div className='flex flex-row justify-between px-4 mt-4'>
                    <input
                        type='text'
                        placeholder='Search weapons...'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className='bg-zinc-50 text-zinc-800 font-genshin p-2 rounded-md w-full sm:w-1/2 lg:w-1/3'
                    />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 gap-x-4 gap-y-4 px-4 mt-4'>
                    {filteredArms.map((arm, index) => (
                        <WeaponLine key={arm._id} arm={arm} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
