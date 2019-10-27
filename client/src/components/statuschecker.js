import React from 'react';

function StatusChecker(props) {
  return(
  <div>
   <p className="bg-dark text-white w-60 rounded mt-4 text-center center text h5 statusborder p-1">Your Current Status: {props.status}</p> 
   </div>
  )
}
export default StatusChecker;