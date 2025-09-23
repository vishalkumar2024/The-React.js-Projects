import React from 'react'
import Model from './Model'

function CardInfo(props) {
    return (
        <Model onClose={() => props.onClose()}>
            <h1 className='text-white'>This is carrd info</h1>
        </Model>

    )
}

export default CardInfo
