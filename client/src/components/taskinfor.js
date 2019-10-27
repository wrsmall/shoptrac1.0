import React from "react";

function TaskInfo(props) {
    if(props.status==="Complete"){
    return(
    <div>
        
        <p className="text-center h4 text">Vehicle: {props.vehicle}<br/> Service Required: {props.service}<br/>
        Time alotted:{props.hours}<br/>Status: {props.status}</p>
        {props.children}
    </div>
    );}
    else{
        return(
            <div>
        
            <p className="text-center h4 text">Vehicle: {props.vehicle}<br/> Service Required: {props.service}<br/>
            Time alotted:{props.hours}<br/></p>
            {props.children}
        </div>
        )
    }
};

export default TaskInfo;