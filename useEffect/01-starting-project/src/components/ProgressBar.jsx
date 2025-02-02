import { useEffect, useState } from "react";


export default function ProgressBar( {timer}) {
    const [remaniningTime, setRemainingTime] = useState(timer);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('INTERVAL');
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return <progress value={remaniningTime} max={timer}/>
}