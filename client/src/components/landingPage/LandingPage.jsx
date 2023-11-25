import React, { useState } from 'react'
import './styles.css';
import VisitorForm from '../../pages/visitorForm/VisitorForm';

const LandingPage = () => {
    const [start, setStart] = useState(false);
    const [step, setStep] = useState(0);

    function handleStep() {
        if(step===3){
            console.log('step',step)
        }
        setStep(prev => prev + 1);
    }

    if(step === 3){
        setTimeout(()=>{
            window.location.reload(false)
        }, 15000)
    }

    function handleStart() {
        //clicked start
        setStart(!start)
    }

    return (
        <div className='landing'>
            <div className='landing-block'>
                <div className='island-img'>
                    <img src='./island.png' alt='island' />
                </div>
                {!start ?
                    <div className='block-text'>
                        <h1>Visitor App</h1>
                        <h2>Welcome to Visitor App!</h2>
                        <button className='proceed' onClick={() => handleStart()}>Click here to proceed</button>
                    </div>
                    :
                    <div className='block-text'>
                        <h1>Visitor App</h1>
                        <p className='page-number'>Page:{step+1}</p>
                        <VisitorForm step={step} handleStep={handleStep}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default LandingPage