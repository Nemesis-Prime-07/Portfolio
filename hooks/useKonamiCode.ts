
import { useState, useEffect } from 'react';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export const useKonamiCode = (callback: () => void) => {
    const [keys, setKeys] = useState<string[]>([]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setKeys(prevKeys => {
                const newKeys = [...prevKeys, event.key].slice(-KONAMI_CODE.length);

                if (JSON.stringify(newKeys) === JSON.stringify(KONAMI_CODE)) {
                    callback();
                    return [];
                }
                return newKeys;
            });
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [callback]);
};
