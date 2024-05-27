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
            <div className='flex w-32 h-full justify-center items-center rounded-lg flex-col hover:cursor-pointer hover:scale-105 transform ease-in-out duration-150'>
                <img
                    className='rounded-t-lg px-2 pt-1'
                    style={{ backgroundColor: bgColor }}
                    src={character.icon}
                    width={119} height={125}
                    alt={character.name} />
                <h2 className='rounded-b-lg text-center min-w-[119px] bg-white text-zinc-700 font-genshin text-sm pb-1 pt-2 font-semibold'>{character.name}</h2>
            </div>
        </Link>
    )
}
