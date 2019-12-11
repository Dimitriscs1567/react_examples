import React from 'react'

const userInput = (props)=>{
    return (
        <input value={props.value} onChange={props.change}></input>
    );
}

export default userInput;