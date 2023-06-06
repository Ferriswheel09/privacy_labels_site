import React from "react";
//import {getDataPointFromId} from somewhere
import { useParams } from "react-router-dom";

export
const DataView = (props) =>{
    const {id} = useParams();
    //const appData= getDataPointFromId(props.id)
    return(
        <p>this is a placeholder the id is {id}</p>
    )
}