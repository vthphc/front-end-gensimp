import React from 'react';
import ElementCard from '../ui/elementCard';

export default function Circle({ elements }) {
    const angle = 360 / elements.length;
    return (
        <div className="relative w-96 h-96 rounded-full flex items-center justify-center">
            {elements.map((Component, index) => (
                <div
                    key={index}
                    className="absolute"
                    style={{
                        transform: `rotate(${angle * index}deg) translate(10rem)`,
                        transformOrigin: '0 0',
                    }}
                >
                    <div
                        style={{
                            transform: `rotate(-${angle * index}deg)`,
                        }}
                    >
                        <ElementCard element={Component} />
                    </div>
                </div>
            ))}
        </div>
    );
}
