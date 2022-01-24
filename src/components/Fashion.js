import React from 'react'
import "./Fashion.css"
const Fashion = ({imageSrc}) => {
    return (
        <div className='fashion'>
            <img src={imageSrc} alt="lifefashion" className="fashion_image"/>
            <h1 className='fashion_title'>Fashion is YOU</h1>       
        </div>
    )
}

export default Fashion
