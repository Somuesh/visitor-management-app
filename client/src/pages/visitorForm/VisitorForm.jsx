import React from 'react'
import './styles.css'
import { InputField } from '../../components/inputFields/InputField'

const VisitorForm = ({step, handleStep}) => {
    
    return (
        <>  
        {step === 0 &&
            <>  
                
                <InputField type='text' placeholder='Full name' />
                <InputField type='text' placeholder='Mobile number' />
                <InputField type='text' placeholder='Your address' />
                <button className='next-btn' onClick={() => { handleStep() }}>Next</button>
            </>
        }
        {step === 1 &&
            <>
                
                <InputField type='text' placeholder='Whom to meet' />
                <InputField type='text' placeholder='Reason for the visit' />
                
                <button className='next-btn' onClick={() => { handleStep() }}>Next</button>
            </>
        }
        {step === 2 &&
            <>
                
                <h5>Drinks or Snacks:</h5>
                <div><input type='radio' id='coffee' value='coffee'/> <label htmlFor='coffee'>Coffee</label></div>
                <div><input type='radio' id='tea' value='tea'/> <label htmlFor='tea'>Tea</label></div>
                <div><input type='radio' id='water' value='water'/> <label htmlFor='water'>Water</label></div>
                <button className='next-btn' onClick={() => { handleStep() }}>Submit</button>
            </>
        }
        {step === 3 &&
            <>
            <div className='thanks-text'>
                <h2>Thanks for using our App!</h2>
                <p>Our representative will contact you soon.<br/>
                Meanwhile you can enjoy your drinks and snacks.</p>
                </div>
            </>
        }

        </>
    )
}

export default VisitorForm