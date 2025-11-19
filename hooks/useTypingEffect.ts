
import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (words: string[], typingSpeed: number = 150, deletingSpeed: number = 100) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [speed, setSpeed] = useState(typingSpeed);
    const loopNumRef = useRef(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            const updatedText = isDeleting
                ? currentWord.substring(0, text.length - 1)
                : currentWord.substring(0, text.length + 1);

            setText(updatedText);
            setSpeed(isDeleting ? deletingSpeed : typingSpeed);

            if (!isDeleting && updatedText === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                loopNumRef.current += 1;
            }
        };

        const timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, speed]);

    return text;
};
