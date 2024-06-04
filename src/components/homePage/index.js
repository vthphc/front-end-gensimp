import React from 'react'
import NavBar from '../navBar'

export default function HomePage() {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <div className='flex flex-1 relative flex-col items-center justify-center min-h-screen'>
            <div className='relative w-full h-full'>
                <img
                    className='w-full max-h-screen overflow-hidden h-screen object-cover'
                    src='https://64.media.tumblr.com/fea7b9c956e8891f13a87819e3132bd6/8bafe7564dbeb21b-f6/s2048x3072/80a6bd03dcde7e2a6e49565ed20464c6b610458b.jpg'
                    alt='Background' />
                <div className={`absolute transition-opacity duration-700 ease-in-out transform inset-0 flex flex-col ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <NavBar />
                </div>
            </div>
        </div>
    )
}
