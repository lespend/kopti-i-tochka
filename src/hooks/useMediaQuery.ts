import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
    const isMatch = () => window.matchMedia(query).matches;

    const [matches, setMatches] = useState(isMatch());

    const matchHandler = () => {
        setMatches(isMatch());
    }
    
    useEffect(() => {
        window.addEventListener('resize', matchHandler)
        return () => window.removeEventListener('resize', matchHandler)
    }, [])

    return matches
}