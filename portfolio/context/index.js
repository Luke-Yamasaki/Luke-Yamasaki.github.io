//React
import { createContext, useContext, useState, useEffect } from 'react';

export const visitedContext = createContext();
export const useVisited = () => useContext(visitedContext);

export default function VisitedProvider(props) {
    const [visited, setVisited] = useState('');

    useEffect(() => {
        sessionStorage.getItem('visited') === 'true' ? setVisited(true) : setVisited(false);
    },[])

    return (
        <visitedContext.Provider value={{ visited, setVisited }}>
            {props.children}
        </visitedContext.Provider>
    )
};
