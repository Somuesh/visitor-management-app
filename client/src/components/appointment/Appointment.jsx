import React, { useEffect, useState } from 'react'
import { useFormContext } from '../../context/FormContext'
// import staff from '../../staff'
import axios from 'axios'

const Appointment = () => {
    const { setFormState } = useFormContext()

    const [staff, setStaffData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get('http://localhost:5000/staff');
                setStaffData(data.staff)
            } catch (e) {
                console.log('Error fetching data',e.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='input-fields'>
               { staff.length > 0 && <select className='field' id='came_to_meet' onChange={(e) => setFormState(prev => ({
                    ...prev,
                    came_to_meet: e.target.value,
                }))}>
                    <option> Appointment with: </option>
                    {staff.map((member) => (<option key={member.id} value={member.name} > {member.name}</option>))}
                </select>
               }
            </div>
            <div className='input-fields'>
                <input className='field' type='text' placeholder='Reason of Visit' onChange={(e) => setFormState(prev => ({
                    ...prev,
                    reason_for_visit: e.target.value,
                }))} />
            </div>
        </>
    )
}

export default Appointment