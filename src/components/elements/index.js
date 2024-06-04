import React from 'react'
import NavBar from '../navBar'
import Circle from '../circle/circle';

export default function Elements() {
    const [elements, setElements] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/element')
            .then((res) => res.json())
            .then((data) => {
                setElements(data);
            });
    }, []);

    return (
        <div>
            <NavBar />
            <div className="flex justify-center items-center h-screen">
                <Circle elements={elements} />
            </div>
        </div>
    )
}
