
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        const handleMouseOver = (e: MouseEvent) => {
            if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    const cursorSize = isHovering ? 40 : 24;
    const trailSize = 8;
    
    return (
        <>
            <div 
                className={`hidden md:block fixed pointer-events-none rounded-full border-2 border-cyan-400 z-50 transition-all duration-200`}
                style={{ 
                    left: position.x, 
                    top: position.y,
                    width: `${cursorSize}px`,
                    height: `${cursorSize}px`,
                    transform: `translate(-50%, -50%)`,
                }}
            />
            <div 
                className="hidden md:block fixed pointer-events-none rounded-full bg-cyan-400 z-50"
                style={{ 
                    left: position.x, 
                    top: position.y, 
                    width: `${trailSize}px`,
                    height: `${trailSize}px`,
                    transform: `translate(-50%, -50%)`,
                }}
            />
        </>
    );
};

export default CustomCursor;
