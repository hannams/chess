import React from 'react';
import classes from './Desk.module.css';
import Numbers from "../Numbers/Numbers";
import Letters from "../Letters/Letters";
import Board from "../Board/Board";

function Desk(props) {

    return (
        <div className={classes.wrapper}>
            <Numbers/>
            <Board/>
            <Letters/>
        </div>
    )

}

export default Desk;