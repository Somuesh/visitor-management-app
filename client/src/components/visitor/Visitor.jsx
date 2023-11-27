import React from 'react'
import { useFormContext } from '../../context/FormContext'

const Visitor = () => {
    const { setFormState } = useFormContext()
    return (
        <>
            <div className='input-fields'>
                <input className='field' type='text' placeholder='Full name' onChange={(e) => setFormState(prev => ({
                    ...prev,
                    visitors_name: e.target.value,
                }))} />
            </div>
            <div className='input-fields'>
                <input className='field' type='text' placeholder='Mobile number' onChange={(e) => setFormState(prev => ({
                    ...prev,
                    visitors_mobile: e.target.value,
                }))} />
            </div>
            <div className='input-fields'>
                <input className='field' type='text' placeholder='Your Address' onChange={(e) => setFormState(prev => ({
                    ...prev,
                    visitors_address: e.target.value,
                }))} />
            </div>
        </>
    )
}

export default Visitor