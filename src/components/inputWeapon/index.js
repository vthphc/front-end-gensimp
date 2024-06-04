import React from 'react'
import NavBar from '../navBar'

export default function WeaponInputTable() {
    const [inputWeapon, setInputWeapon] = React.useState({
        name: '',
        type: '',
        rarity: '',
        affix: '',
        description: '',
        icon: '',
        card: '',
    });

    const [rarities, setRarities] = React.useState([]);
    const [types, setTypes] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/rarity')
            .then((response) => response.json())
            .then((data) => {
                setRarities(data);
            });

        fetch('http://localhost:5000/weapon')
            .then((response) => response.json())
            .then((data) => {
                setTypes(data);
            });
    }, []);

    const handleSubmit = () => {
        const values = Object.values(inputWeapon);
        if (values.some(value => value === '')) {
            alert('All fields must be filled out.');
            return;
        }

        fetch('http://localhost:5000/arm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputWeapon),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        window.location.href = '/manage-weapons'
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar />
            <div className="grid mt-4 justify-items-center grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Name'
                    value={inputWeapon.name}
                    onChange={(e) => setInputWeapon({ ...inputWeapon, name: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Affix'
                    value={inputWeapon.affix}
                    onChange={(e) => setInputWeapon({ ...inputWeapon, affix: e.target.value })}
                />
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={inputWeapon.type}
                    onChange={(e) => setInputWeapon({ ...inputWeapon, type: e.target.value })}
                >
                    <option value="" disabled>Select Weapon Type</option>
                    {types.map((type) => (
                        <option key={type.id} value={type._id}>{type.name}</option>
                    ))}
                </select>
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={inputWeapon.rarity}
                    onChange={(e) => setInputWeapon({ ...inputWeapon, rarity: e.target.value })}
                >
                    <option value="" disabled>Select Rarity</option>
                    {rarities.map((rarity) => (
                        <option key={rarity.id} value={rarity._id}>{rarity.type} stars</option>
                    ))}
                </select>
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Icon'
                    value={inputWeapon.icon}
                    onChange={(e) => setInputWeapon({ ...inputWeapon, icon: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Card'
                    value={inputWeapon.card}
                    onChange={(e) => setInputWeapon({ ...inputWeapon, card: e.target.value })}
                />
                <textarea
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    placeholder='Description'
                    value={inputWeapon.description}
                    onChange={(e) => setInputWeapon({ ...inputWeapon, description: e.target.value })}
                />
            </div>
            <button
                className='w-full mt-4 self-center max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 bg-blue-500 text-white'
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    )
}
