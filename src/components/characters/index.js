import React from 'react'
import NavBar from '../navBar'
import CharacterCard from '../ui/characterCard'
import { Link } from 'react-router-dom'

export default function Characters() {
    const [characters, setCharacters] = React.useState([])

    React.useEffect(() => {
        try {
            fetch('http://localhost:5000/character')
                .then((response) => response.json())
                .then((data) => setCharacters(data))
        } catch (error) {
            console.error('Error:', error)
        }
    }, [])

    return (
        <div>
            <NavBar />
            <div className='flex flex-col min-h-screen'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl text-zinc-50 ml-8 font-genshin font-bold mb-4 mt-4'>Characters</h1>
                    <Link to='/add-character'>
                        <button
                            className='bg-zinc-50 text-zinc-800 font-genshin font-semibold mr-8 mt-4 px-4 py-2 rounded-md hover:bg-zinc-400 hover:text-zinc-50 cursor-pointer transform ease-in-out duration-200'>
                            Add Character
                        </button>
                    </Link>
                </div>
                <div className='flex px-7'>
                    {characters.map((character) => (
                        <CharacterCard key={character.id} character={character} />
                    ))}
                </div>
            </div>
        </div>
    )
}
