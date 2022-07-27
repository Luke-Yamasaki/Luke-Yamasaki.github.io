//React
import { createContext, useContext, useState, useEffect } from 'react';
import cookie from "cookie-cutter";

export const visitedContext = createContext();
export const useVisited = () => useContext(visitedContext);

export default function VisitedProvider(props) {
    const [visited, setVisited] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const boolean = cookie.get('visited');
        boolean === 'true' ? setVisited(true) : setVisited(false);
        return setIsLoaded(true);
    },[])

    return isLoaded && (
        <visitedContext.Provider value={{ visited, setVisited }}>
            {props.children}
        </visitedContext.Provider>
    )
};
