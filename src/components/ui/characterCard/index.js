import React from 'react'
import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
    const [characterRarity, setCharacterRarity] = React.useState({});

    React.useEffect(() => {
        try {
            fetch(`http://localhost:5000/rarity/${character.rarity}`)
                .then(response => response.json())
                .then(data => {
                    setCharacterRarity(data)
                })
        } catch (error) {
            console.error(error)
        }
    }, [character])

    let bgColor = '';
    if (characterRarity.type === 5) {
        bgColor = '#dca454';
    } else if (characterRarity.type === 4) {
        bgColor = '#9174a9';
    }

    return (
        <Link to={`/characters/${character._id}`}>
            <div className='flex flex-col hover:scale-105 transform ease-in-out duration-150 w-40'>
                <img src={character.card} alt={character.name}
                    className='rounded-t-lg w-full' />
                <div className='flex flex-row rounded-b-lg bg-white w-full'>
                    <div className='font-genshin text-zinc-800 p-2 text-center w-full'>
                        {character.name}
                    </div>
                    <div className='font-genshin rounded-br-lg px-2 flex flex-row text-zinc-50 justify-center items-center text-center w-16'
                        style={{ backgroundColor: bgColor }}>
                        <h1>{characterRarity.type}</h1>
                        <img className='w-4 ml-1.5 h-4' src='https://png.pngtree.com/png-vector/20230426/ourmid/pngtree-golden-star-icon-clipart-vector-png-image_6731283.png' alt='star-icon' />
                    </div>
                </div>
            </div>
        </Link>
    )
}
