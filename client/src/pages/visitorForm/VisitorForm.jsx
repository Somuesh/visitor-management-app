import React from 'react'
import './styles.css'
// import { InputField } from '../../components/inputFields/InputField'
import { useFormContext } from '../../context/FormContext'
import staff from '../../staff'
import Thanks from '../thanksPage/Thanks'

const VisitorForm = ({ step }) => {

    const { setFormState } = useFormContext()

    return (
        <>
            {step === 0 &&
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
            }
            {step === 1 &&
                <>
                    <div className='input-fields'>
                        <select className='field' id='came_to_meet' onChange={(e) => setFormState(prev => ({
                            ...prev,
                            came_to_meet: e.target.value,
                        }))}>
                        <option> Appointment with: </option>
                            {staff.map((member) => (<option key={member.id} value={member.name} > {member.name}</option>))}
                        </select>
                    </div>
                    <div className='input-fields'>
                        <input className='field' type='text' placeholder='Reason of Visit' onChange={(e) => setFormState(prev => ({
                            ...prev,
                            reason_for_visit: e.target.value,
                        }))} />
                    </div>
                </>
            }
            {step === 2 &&
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
            }
            {step === 3 &&
                <>
                    <Thanks />
                </>
            }

        </>
    )
}

export default VisitorForm