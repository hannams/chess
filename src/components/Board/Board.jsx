import React, {useState} from "react";
import  './Board.css';
import Block from "../Block/Block";
import Knight from "../Knight/Knight";
import {isKnight} from "../../services/isKnight";
import {getAvailablePositions} from "../../services/getAvailablePositions";
import {isPossible} from "../../services/isPossible";
import {useWrongPosition} from "../../hooks/useWrongPosition";

const DESK_MATRIX = new Array(8).fill(0,0, 8).map(x => [...Array(8).keys()]);

function Board() {
    const [position, setPosition] = useState({x: 1, y: 6});
    const [availablePositions, setAvailablePositions] = useState(getAvailablePositions(position));
    const [highlight, setHighlight] = useState(false);
    const [wrongHighlight, setWrongHighlight] = useWrongPosition({});

    let board = [];
    DESK_MATRIX.forEach( (x, index) => {
        let column = x.map( (y)  => {
            const coordinates = {x: index, y};
            const activeClass = highlight && isPossible(availablePositions, coordinates) ? " available" : "";
            const wrongClass = wrongHighlight.some(([xPos, yPos]) => xPos === coordinates.x && yPos === coordinates.y) ? " wrong" : "";
            console.log(wrongClass);
            return <Block key={`${index}-${y}`}  position={coordinates}  className={`cell${activeClass}${wrongClass}`}
                         onClick={handleClick.bind(this, coordinates)}/>
        });
        board.push(<div key={index} className={'column'}>{column}</div>);
    });

    function handleClick (coordinates, event) {
        if (isKnight(position, coordinates)) {
            setHighlight(true);
        } else {
            if(isPossible(availablePositions, coordinates)){
            setHighlight(false);
               setPosition({
                   x: coordinates.x,
                   y: coordinates.y
               });
               setAvailablePositions(getAvailablePositions({x: coordinates.x, y: coordinates.y}));
           } else {
                setWrongHighlight(coordinates);
           }
        }
    }

    return (
       <div>
           <div className={"board"}>{board}</div>
           <Knight position={position}/>
       </div>

    )

}

export default Board;