import React from 'react'
import NavBar from '../../navBar'

export default function WeaponEditTable() {
    const [updatedWeapon, setUpdatedWeapon] = React.useState({})
    const armId = window.location.pathname.split('/')[2]

    const [rarities, setRarities] = React.useState([]);
    const [types, setTypes] = React.useState([]);

    React.useEffect(() => {
        try {
            fetch(`http://localhost:5000/arm/${armId}`)
                .then((response) => response.json())
                .then((data) => setUpdatedWeapon(data))
        } catch (error) {
            console.error('Error:', error)
        }

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
    }, [armId]);

    const handleSubmit = () => {
        const values = Object.values(updatedWeapon);
        if (values.some(value => value === '')) {
            alert('All fields must be filled out.');
            return;
        }

        fetch(`http://localhost:5000/arm/${armId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWeapon),
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
                    value={updatedWeapon.name}
                    onChange={(e) => setUpdatedWeapon({ ...updatedWeapon, name: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Affix'
                    value={updatedWeapon.affix}
                    onChange={(e) => setUpdatedWeapon({ ...updatedWeapon, affix: e.target.value })}
                />
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={updatedWeapon.type}
                    onChange={(e) => setUpdatedWeapon({ ...updatedWeapon, type: e.target.value })}
                >
                    <option value="" disabled>Select Weapon Type</option>
                    {types.map((type) => (
                        <option key={type.id} value={type._id}>{type.name}</option>
                    ))}
                </select>
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={updatedWeapon.rarity}
                    onChange={(e) => setUpdatedWeapon({ ...updatedWeapon, rarity: e.target.value })}
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
                    value={updatedWeapon.icon}
                    onChange={(e) => setUpdatedWeapon({ ...updatedWeapon, icon: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Card'
                    value={updatedWeapon.card}
                    onChange={(e) => setUpdatedWeapon({ ...updatedWeapon, card: e.target.value })}
                />
                <textarea
                    className='w-full h-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    placeholder='Description'
                    value={updatedWeapon.description}
                    onChange={(e) => setUpdatedWeapon({ ...updatedWeapon, description: e.target.value })}
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
