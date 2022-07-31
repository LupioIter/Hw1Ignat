import React from 'react'
import {AffairType} from "./HW2";
import Affairs from "./Affairs";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const AffairCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            {props.affair.name}
            <button onClick={AffairCallback}>X</button>
        </div>
    )
}

export default Affair
