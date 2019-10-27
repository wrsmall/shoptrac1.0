import React from 'react';
import "../style/style.css";


function TechImage(props){
    return(
        <img src={props.image} alt="You have not set an image yet!" height="450" width="450"/>

    )
}
export default TechImage