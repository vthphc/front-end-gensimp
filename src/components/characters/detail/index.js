import React from 'react'
import { useParams } from 'react-router-dom'

export default function CharacterDetails() {
    const [character, setCharacter] = React.useState({});
    const [characterRarity, setCharacterRarity] = React.useState({});
    const [characterElement, setCharacterElement] = React.useState({});
    const [characterWeapon, setCharacterWeapon] = React.useState({});

    const { id } = useParams();

    React.useEffect(() => {
        try {
            fetch(`http://localhost:5000/character/${id}`)
                .then((response) => response.json())
                .then((data) => setCharacter(data))
        } catch (error) {
            console.error('Error:', error)
        }

        try {
            fetch(`http://localhost:5000/rarity/${character.rarity}`)
                .then(response => response.json())
                .then(data => {
                    setCharacterRarity(data)
                })
        } catch (error) {
            console.error(error)
        }

        try {
            fetch(`http://localhost:5000/element/${character.element}`)
                .then(response => response.json())
                .then(data => {
                    setCharacterElement(data)
                })
        } catch (error) {
            console.error(error)
        }

        try {
            fetch(`http://localhost:5000/weapon/${character.weapon}`)
                .then(response => response.json())
                .then(data => {
                    setCharacterWeapon(data)
                })
        } catch (error) {
            console.error(error)
        }
    }, [id, character.element, character.rarity, character.weapon]);

    let characterRarityStars = 0;
    if (characterRarity) {
        characterRarityStars = characterRarity.type;
    };

    return (
        <div className='flex min-h-screen bg-zinc-800 flex-col'>
            <div className='flex'>
                <div className='flex max-w-[560px] flex-col ml-8 justify-around'>
                    <div>
                        <h1 className='text-6xl font-genshin text-white'>{character.name}</h1>
                        <h1 className='text-2xl font-genshin text-white'>{character.title}</h1>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-genshin text-white'>Rarity</h1>
                            <div className='flex'>
                                {Array.from({ length: characterRarityStars }).map((_, index) => (
                                    <img key={index} className='w-8 mr-1.5 h-8' src='https://png.pngtree.com/png-vector/20230426/ourmid/pngtree-golden-star-icon-clipart-vector-png-image_6731283.png' alt='star-icon' />
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <div className='flex'>
                                <h1 className='text-2xl font-genshin text-white'>{characterElement.name}</h1>
                                <img className='ml-2 w-8 h-8' src={characterElement.icon} alt='element-icon' />
                            </div>
                            <div className='flex'>
                                <h1 className='text-2xl font-genshin text-white'>{characterWeapon.name}</h1>
                                <img className='ml-2 w-8 h-8' src={characterWeapon.icon} alt='weapon-icon' />
                            </div>
                        </div>
                    </div>

                    <iframe
                        className='rounded-lg'
                        width="560"
                        height="315"
                        src={character.video}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                    <p className='font-genshin mb-4 text-white'>{character.description}</p>
                </div>
                <img
                    className='w-full h-screen overflow-hidden object-cover'
                    style={{ transform: 'scale(1)' }}
                    src={character.splash} alt='character-bg' />
            </div>
        </div>
    )
}
