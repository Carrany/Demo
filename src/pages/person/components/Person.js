import React, { useState } from 'react'
import { Steps, message, Icon, Form } from 'antd';
import { useDispatch } from 'react-redux'
import { person } from '../../../_actions/personAction'
import PersonalInformation from './PersonalInformation'
import PersonalIdentification from './PersonalIdentification'
import CompanyDetials from './CompanyDetails';

const { Step } = Steps;


const Person = props => {
    const [current, setCurrent] = useState(0)
    const [stepOneFields, setStepOneFields] = useState({})
    const [stepTwoFields, setStepTwoFields] = useState({})
    const [stepThreeFields, setStepThreeFields] = useState({})
    const dispatch = useDispatch();


    const steps = [
        {
            title: 'Personal Information',
            key: 1,
            type: 'user'
        },
        {
            title: 'Personal Identification',
            key: 2,
            type: 'qrcode'
        },
        {
            title: 'Company Details',
            key: 3,
            type: 'bank'
        },
    ];

    const handleSteps = (values, step) => {
        switch (step) {
            case 0:
                setStepOneFields(values)
                break;
            case 1:
                setStepTwoFields(values)
                break;
            case 2:
                setStepThreeFields(values)
                break;

            default:
                break;
        }
    }

    const next = () => {
        setCurrent(current + 1)

    }

    const prev = () => {
        setCurrent(current - 1)
    }

    const handleSubmit = (values) => {
        let data = {
            ...stepOneFields,
            ...stepTwoFields,
            ...values
        }
        dispatch(person(data))
        setTimeout(() => handleRerouting(), 2000);
    }

    const handleRerouting = () => {
        props.history.push('/display-person')
        message.success("Person saved successfully", 5)
    }

    return (
        <div>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.key} title={item.title} icon={<Icon type={item.type} />} />
                ))}
            </Steps>
            {current === 0 && (

                <PersonalInformation {...stepOneFields} handleNext={() => next()} submittedValues={(values, step) => handleSteps(values, step)} />
            )}
            {current === 1 && (

                <PersonalIdentification {...stepTwoFields} handleNext={() => next()} handlePrev={() => prev()} submittedValues={(values, step) => handleSteps(values, step)} />
            )}
            {current === 2 && (

                <CompanyDetials {...stepThreeFields} handlePrev={() => prev()} handleSubmit={(values) => handleSubmit(values)} submittedValues={(values, step) => handleSteps(values, step)} />
            )}

        </div>
    )
}

const WrappedPersonForm = Form.create({ name: 'person_details' })(Person);
export default WrappedPersonForm
