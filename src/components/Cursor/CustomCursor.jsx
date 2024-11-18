import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Add event listener to track mouse movement
        document.addEventListener("mousemove", moveCursor);

        // Clean up the event listener when component unmounts
        return () => document.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div
            className="custom-cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        ></div>
    );
}
