import React from "react";
import "../style/style.css"
function Card(props) {
    return (
        <div>
            <div className="card mb-3 text-center center w-30 postion">
                    <div className="card-header bg-secondary">{props.techname}</div>
                    <div className="card-body">
                        

                    </div>
                </div>
        </div>
    );
}
export default Card;