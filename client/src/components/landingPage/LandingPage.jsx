import React, { useState } from 'react'
import './styles.css';
import VisitorForm from '../../pages/visitorForm/VisitorForm';
import {useFormContext} from '../../context/FormContext';
import { ToastContainer, toast } from "react-toastify";

const LandingPage = () => {
    const [start, setStart] = useState(false);
    const [step, setStep] = useState(0);

    const { formState } = useFormContext()


    function handleStep() {
        
        if(step === 0 && formState.visitors_name !== '' && formState.visitors_mobile !== '' && formState.visitors_address !==''){
                setStep(prev => prev + 1);
            }
        else if(step === 1 && formState.came_to_meet !== '' && formState.reason_for_visit !== ''){
            setStep(prev => prev + 1);
        }
        else if(step === 2 && formState.drinks_snacks !== ''){
            setStep(prev => prev + 1);
            toast.success("Details Submitted successfully!", {
                position: toast.POSITION.TOP_RIGHT,
              })
        }
        else{
            toast.error("Fields are mandatory!", {
                position: toast.POSITION.TOP_RIGHT,
              })
        }
    }

    if(step === 3){
        // console.log(formState)
        setTimeout(()=>{
            window.location.reload(false)
        }, 25000)
    }

    function handleStart() {
        //clicked start
        setStart(!start)
    }

    return (
        <div className='landing'>
        <ToastContainer />
            <div className='landing-block'>
                <div className='island-img'>
                    <img src='./island.png' alt='island' />
                </div>
                {!start ?
                    <div className='block-text'>
                        <h1>Visitors Manager</h1>
                        <h3>Welcome to Tech Dunia!</h3>
                        <button className='proceed' onClick={() => handleStart()}>Click here to proceed</button>
                    </div>
                    :
                    <div className='block-text'>
                        <h1>Visitors Manager</h1>
                        <p className='page-number'>Page:{step+1}</p>
                        <VisitorForm step={step} />
                        {step < 2 && <button className='next-btn' onClick={() => { handleStep() }}>Next</button> }
                        {step === 2 && <button className='next-btn' onClick={() => { handleStep() }}>Submit</button>}
                    </div>
                }
            </div>
        </div>
    )
}

export default LandingPage