import React from 'react'

export default function WeaponCard({ arm }) {
    const [armRarity, setArmRarity] = React.useState({});
    const [armType, setArmType] = React.useState({});

    React.useEffect(() => {
        try {
            fetch(`http://localhost:5000/rarity/${arm.rarity}`)
                .then(response => response.json())
                .then(data => {
                    setArmRarity(data)
                })
        } catch (error) {
            console.error(error)
        }

        try {
            fetch(`http://localhost:5000/weapon/${arm.type}`)
                .then(response => response.json())
                .then(data => {
                    setArmType(data)
                })
        } catch (error) {
            console.error(error)
        }
    }, [arm]);


    let bgColor = '';
    if (armRarity.type === 5) {
        bgColor = '#dca454';
    } else if (armRarity.type === 4) {
        bgColor = '#9174a9';
    }

    let armRarityStars = 0;
    if (armRarity) {
        armRarityStars = armRarity.type;
    };

    let backgroundStyle = '';

    if (bgColor === '#dca454') {
        backgroundStyle = 'linear-gradient(to right, #dca454, #b38142)';
    } else if (bgColor === '#9174a9') {
        const slightlyDifferentColor = '#806395';
        backgroundStyle = `linear-gradient(to right, ${bgColor}, ${slightlyDifferentColor})`;
    }

    return (
        <div className='flex border-4 mx-4 rounded-xl flex-row hover:scale-105 cursor-default transform ease-in-out duration-300'
            style={{ background: backgroundStyle }}>
            <img src={arm.icon} alt={arm.name} className='my-4 ml-8' style={{ width: '158.4px', height: '215.1px' }} />
            <div className='flex flex-col mx-4 justify-between'>
                <div className='flex flex-row justify-between'>
                    <div className='mt-4 ml-4'>
                        <div className='font-genshin text-4xl text-zinc-50'>
                            {arm.name}
                        </div>
                        <div className='font-genshin text-zinc-50'>
                            {arm.affix}
                        </div>
                    </div>
                    <div className='flex flex-col mt-1 mr-4 items-end'>
                        <div className='flex'>
                            <img className='w-14 h-14 filter brightness-0 invert' src={armType.icon} alt='weapon-icon' style={{}} />
                        </div>
                        <div className='flex'>
                            {Array.from({ length: armRarityStars }).map((_, index) => (
                                <img key={index} className='w-5 mr-1.5 h-5' src='https://png.pngtree.com/png-vector/20230426/ourmid/pngtree-golden-star-icon-clipart-vector-png-image_6731283.png' alt='star-icon' />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='font-genshin text-lg text-zinc-50 opacity-70 mb-4 mx-4'>
                    {arm.description}
                </div>
            </div>
        </div>
    )
}
