import React from 'react'

export default function Colors(props) {

    let colors = props.colors;
    
    return (
        <div className="colors">
            {
            colors.map((color, index) =>(
                <button style={{background: color}} key={index}></button>
            ))
            }
        </div>
    )
}