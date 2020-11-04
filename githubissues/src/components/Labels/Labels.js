import React from 'react'
//
export default function Labels(props) {
    return (
        //return the 
        <div>
            <button style={ {borderRadius: "5px"} , {backgroundColor: `#${props.labelColor}`} }>{props.labelData}</button>

        </div>
    )
}

