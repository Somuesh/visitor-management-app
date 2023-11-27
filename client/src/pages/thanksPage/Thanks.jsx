import React from 'react';
import { useFormContext } from '../../context/FormContext';

const Thanks = () => {
     const { formState } = useFormContext()
     const { came_to_meet, drinks_snacks} = formState;
    return (
        <>
            <div className='thanks-text'>
                <h2>Thanks for using our App!</h2>
                <p>Our representative, {came_to_meet}, will contact you soon.</p>
                {drinks_snacks !== 'no' && <p>Meanwhile you can enjoy your {drinks_snacks} & snacks.</p> }
            </div>
        </>
    )
}

export default Thanks