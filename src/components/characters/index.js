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
        <div className=''>
            <NavBar />
            <div className='flex flex-col min-h-screen'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl text-zinc-50 ml-8 font-genshin font-bold mb-4 mt-4'>Characters</h1>
                    <div>
                        <Link to='/manage-characters'>
                            <button
                                className='bg-zinc-50 text-zinc-800 font-genshin font-semibold mr-8 mt-4 px-4 py-2 rounded-md hover:bg-zinc-400 hover:text-zinc-50 cursor-pointer transform ease-in-out duration-200'>
                                Manage Characters
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 gap-y-4 px-4 mt-4'>
                    {characters.map((character, index) => (
                        index < 18 ? (
                            <CharacterCard key={character.id} character={character} />
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    )
}
