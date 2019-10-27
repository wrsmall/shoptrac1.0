import React from "react";

function ManagerInfo(props) {
    return (
        <div>
            <p className="text-center h4 text">Vehicle: {props.vehicle} <br/> Service Required: {props.service}<br />
                Time alotted:{props.hours}<br />Status: {props.status}<br />
                Assigned: {props.created}</p> <hr/>
           
        </div>
    );
};

export default ManagerInfo;