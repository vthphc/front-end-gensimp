import React from 'react'
import NavBar from '../../navBar'

export default function CharacterEditTable() {

    const [updatedCharacter, setUpdatedCharacter] = React.useState({})
    const characterId = window.location.pathname.split('/')[2]

    const [rarities, setRarities] = React.useState([]);
    const [elements, setElements] = React.useState([]);
    const [weapons, setWeapons] = React.useState([]);

    React.useEffect(() => {
        try {
            fetch(`http://localhost:5000/character/${characterId}`)
                .then((response) => response.json())
                .then((data) => setUpdatedCharacter(data))
        } catch (error) {
            console.error('Error:', error)
        }

        fetch('http://localhost:5000/rarity')
            .then((response) => response.json())
            .then((data) => {
                setRarities(data);
            });

        fetch('http://localhost:5000/element')
            .then((response) => response.json())
            .then((data) => {
                setElements(data);
            });

        fetch('http://localhost:5000/weapon')
            .then((response) => response.json())
            .then((data) => {
                setWeapons(data);
            });
    }, [characterId]);

    const handleSubmit = () => {
        const values = Object.values(updatedCharacter);
        if (values.some(value => value === '')) {
            alert('All fields must be filled out.');
            return;
        }

        fetch(`http://localhost:5000/character/${characterId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCharacter),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        window.location.href = '/manage-characters'
    };

    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar />
            <div className="grid mt-4 justify-items-center grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Name'
                    value={updatedCharacter.name}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, name: e.target.value })}
                />
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={updatedCharacter.element}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, element: e.target.value })}
                >
                    <option value="" disabled>Select Element</option>
                    {elements.map((element) => (
                        <option key={element._id} value={element._id}>{element.name}</option>
                    ))}
                </select>
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Description'
                    value={updatedCharacter.description}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, description: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Title'
                    value={updatedCharacter.title}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, title: e.target.value })}
                />
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={updatedCharacter.rarity}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, rarity: e.target.value })}
                >
                    <option value="" disabled>Select Rarity</option>
                    {rarities.map((rarity) => (
                        <option key={rarity._id} value={rarity._id}>{rarity.type}</option>
                    ))}
                </select>
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={updatedCharacter.weapon}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, weapon: e.target.value })}
                >
                    <option value="" disabled>Select Weapon</option>
                    {weapons.map((weapon) => (
                        <option key={weapon._id} value={weapon._id}>{weapon.name}</option>
                    ))}
                </select>
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Card'
                    value={updatedCharacter.card}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, card: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Icon'
                    value={updatedCharacter.icon}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, icon: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Splash'
                    value={updatedCharacter.splash}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, splash: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Video'
                    value={updatedCharacter.video}
                    onChange={(e) => setUpdatedCharacter({ ...updatedCharacter, video: e.target.value })}
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
