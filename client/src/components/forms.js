import React from 'react';
import "../style/style.css";

export function Loginform(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type="text" className="form-control w-80 text-center center"  {...props} />
        </div>

    )

}

export function Userform(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input className="form-control w-50 mt-0 text-center center"  {...props} />
        </div>

    )

}
