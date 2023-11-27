import React from 'react'
import { useFormContext } from '../../context/FormContext'

const DrinkSnacks = () => {
    const { setFormState } = useFormContext()
    return (
        <>
            <h5>Drinks or Snacks:</h5>
            <div onChange={(e) => setFormState(prev => ({
                ...prev,
                drinks_snacks: e.target.value
            }))}>
                <div><input type='radio' id='coffee' name='drinks_snacks' value='coffee' /> <label htmlFor='coffee'>Coffee</label></div>
                <div><input type='radio' id='water' name='drinks_snacks' value='water' /> <label htmlFor='water'>Water</label></div>
                <div><input type='radio' id='tea' name='drinks_snacks' value='tea' /> <label htmlFor='tea'>Tea</label></div>
                <div><input type='radio' id='no' name='drinks_snacks' value='no' /> <label htmlFor='no'>No, thanks</label></div>
            </div>
        </>
    )
}

export default DrinkSnacks