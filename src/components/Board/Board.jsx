import React from "react";
import classes from './Board.module.css'
import Block from "../Block/Block";


//here all the logic should be

const DESK_MATRIX = new Array(8).fill(0,0, 8).map(x => [...Array(8).keys()]);

function Board(props) {
    let board = [];
    console.log(DESK_MATRIX);
    DESK_MATRIX.forEach(x => {
        let column = [];
        x.forEach(y => {
            column.push(<Block className={classes.cell} key={"cell_" + y}/>);
        });
        board.push(<div key={'column_' + DESK_MATRIX.indexOf(x)} className={classes.column}>{column}</div>);
    });

    return <div className={classes.board}>{board}</div>

}

export default Board;