import {useState} from "react";

export function useWrongPosition(coordinates) {
    const [wrongState, setWrong] = useState([]);
    const updateState = (coordinates) => {
        setWrong(wrongState.concat(coordinates));
        setTimeout(() => {
            setWrong(wrongState.slice(0, 1));
        }, 1000)
    };
        return [wrongState, updateState(coordinates)];
}