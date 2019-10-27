import React from "react";

function Info(props) {
    return(
    <div>
        <p className="text-center w-95 bg-light h4 rounded jumboborder text">
            Techname: {props.techname}
        </p>
        <p className="text-center mt-2 text h4">
            Number of Tasks Assigned: {props.task}</p>
        {props.children}
    </div>
    );
};

export default Info;