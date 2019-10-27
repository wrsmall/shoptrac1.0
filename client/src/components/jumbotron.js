import React from "react";
import "../style/style.css"
function Jumbotron({children}) {
    return(
    <div>
        <div className="jumbotron w-100 bg-secondary-med mt-5 p-1 justify-content-center myborder">
           {children}
            </div>
    </div>
    );
}
export default Jumbotron;