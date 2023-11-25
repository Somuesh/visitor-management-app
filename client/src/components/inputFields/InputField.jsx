import React from 'react'
import './styles.css'

export const InputField = ({ type, placeholder }) => {
    return (
        <>
            <div className='input-fields'>
                <input className='field' type={type} placeholder={placeholder} />
            </div>
        </>
    )
}
