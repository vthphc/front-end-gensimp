import React from 'react'
import NavBar from '../navBar'

export default function CharacterInputTable() {
    const [inputCharacter, setInputCharacter] = React.useState({
        name: '',
        element: '',
        description: '',
        title: '',
        rarity: '',
        weapon: '',
        card: '',
        icon: '',
        splash: '',
        video: '',
    });

    const [rarities, setRarities] = React.useState([]);
    const [elements, setElements] = React.useState([]);
    const [weapons, setWeapons] = React.useState([]);

    React.useEffect(() => {
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
    }, []);

    const handleSubmit = () => {
        const values = Object.values(inputCharacter);
        if (values.some(value => value === '')) {
            alert('All fields must be filled out.');
            return;
        }

        fetch('http://localhost:5000/character', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputCharacter),
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
                    value={inputCharacter.name}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, name: e.target.value })}
                />
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={inputCharacter.element}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, element: e.target.value })}
                >
                    <option value="" disabled>Select Element</option>
                    {elements.map((element) => (
                        <option key={element.id} value={element._id}>{element.name}</option>
                    ))}
                </select>
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Description'
                    value={inputCharacter.description}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, description: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Title'
                    value={inputCharacter.title}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, title: e.target.value })}
                />
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={inputCharacter.rarity}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, rarity: e.target.value })}
                >
                    <option value="" disabled>Select Rarity</option>
                    {rarities.map((rarity) => (
                        <option key={rarity.id} value={rarity._id}>{rarity.type}</option>
                    ))}
                </select>
                <select
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    value={inputCharacter.weapon}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, weapon: e.target.value })}
                >
                    <option value="" disabled>Select Weapon</option>
                    {weapons.map((weapon) => (
                        <option key={weapon.id} value={weapon._id}>{weapon.name}</option>
                    ))}
                </select>
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Card'
                    value={inputCharacter.card}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, card: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Icon'
                    value={inputCharacter.icon}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, icon: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Splash'
                    value={inputCharacter.splash}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, splash: e.target.value })}
                />
                <input
                    className='w-full max-w-md p-3 my-2 text-lg border-2 border-blue-500 rounded-md focus:border-blue-700 focus:ring focus:ring-blue-300 placeholder-gray-500'
                    type='text'
                    placeholder='Video'
                    value={inputCharacter.video}
                    onChange={(e) => setInputCharacter({ ...inputCharacter, video: e.target.value })}
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
