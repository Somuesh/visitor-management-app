import React  from 'react'
import './styles.css'
import Thanks from '../thanksPage/Thanks'
import Visitor from '../../components/visitor/Visitor'
import Appointment from '../../components/appointment/Appointment'
import DrinkSnacks from '../../components/drinkSnacks/DrinkSnacks'

const VisitorForm = ({ step }) => {
    
    return (
        <>
            {step === 0 && 
                    <Visitor />
            }
            {step === 1 &&
                    <Appointment />
            }
            {step === 2 &&
                    <DrinkSnacks />
            }
            {step === 3 &&
                    <Thanks />
            }

        </>
    )
}

export default VisitorForm