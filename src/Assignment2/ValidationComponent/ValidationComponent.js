import React from 'react'

const validationComponent = (props)=>{
    let message = props.text.length > 5 ? 'Text too short' : 'Text longth enough';

    return (
        <div>{message}</div>
    );
}

export default validationComponent;