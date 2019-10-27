import React from "react";

export function Login(props){
    return(
        <button className="bg-primary rounded w-25 m-2 text-white"onClick=
        {props.login}>Login</button>
    )
}

export function CreateUser(props){
    return(
        <button className="bg-primary rounded w-30 m-2 text-white" onClick=
        {props.newuse}>Create User</button>
    )
}


export function Newuse(props){
    return(
        <button className="bg-primary rounded w-25 m-2 text-white" onClick=
            {props.click}>New User</button>
    )
}

export function Close(props){
    return(
        <button className="bg-primary rounded w-25 m-2 text-white" onClick=
            {props.click}>Close</button>
    )
}
export function CreateTask(props){
    return(
        <button className="bg-primary rounded w-50 m-2 text-white" onClick=
        {props.newuse}>Create Task</button>
    )
}
export function Ahead(props){
    return(
        <button className=" shadow-lg bg-primary rounded w-25 ml-4 m-2  text-white" {...props}>Ahead of schedule</button>
    )
}
export function Behind(props){
    return(
        <button className="bg-primary rounded w-25 ml-4 m-2 text-white" {...props}>Behind schedule</button>
    )
}
export function Done(props){
    return(
        <button className="bg-primary rounded w-25 ml-4 m-2 text-white" {...props}>Service Complete</button>
    )
}

export function AddTask(props){
    return(
<button className="rounded w-25 ml-5 justify-content-center" {...props}>Add Task</button>

    )
}
export function Task(props){
    return(
        <button className="rounded w-25 ml-5 " {...props}>See Task</button>
    )
}
export function Logout(props){
    return(
        <button className="bg-primary rounded w-10 logout ml-5 " {...props}>Logout</button>
    )
}
export function SeeTask(props){
    return(
        <button className="bg-primary rounded w-10 logout " {...props}>See Task</button>
    )
}

