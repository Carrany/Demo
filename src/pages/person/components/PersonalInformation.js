import React from 'react'
import { Button, Form, Input, Row, Col } from 'antd';
import './steps.css'

const PersonalInformation = props => {
    console.log(props)
    const { getFieldDecorator } = props.form

    const next = () => {
        props.form.validateFieldsAndScroll((err, values) => {
            if (err) return
            props.submittedValues(values, 0);
            props.handleNext()
        });

    }
    return (

        <Form layout='vertical' >
            <Row gutter={8}>
                <div className="steps-content" key={1}>

                    <Col xl={8}>
                        <Form.Item label="First Name">
                            {getFieldDecorator('firstName', {
                                rules: [{ required: true, message: 'Please input your first name' }],
                                initialValue: props.firstName
                            })(<Input placeholder="Please input your first name" />)}
                        </Form.Item>
                    </Col>
                    <Col xl={8}>
                        <Form.Item label="Last Name">
                            {getFieldDecorator('lastName', {
                                rules: [{ required: true, message: 'Please input your last name' }],
                                initialValue: props.lastName
                            })(<Input placeholder="Please input your last name" />)}
                        </Form.Item>
                    </Col>
                    <Col xl={8}>
                        <Form.Item label="Phone Number">
                            {getFieldDecorator('phoneNumber', {
                                rules: [{ required: true, message: 'Please input your phone numner' }],
                                initialValue: props.phoneNumber
                            })(<Input placeholder="Please input your phone number" />)}
                        </Form.Item>
                    </Col>
                    <Col xl={8}>
                        <Form.Item label="Email">
                            {getFieldDecorator('email', {
                                rules: [{ type: 'email', message: 'The input is not valid E-mail!' },
                                { required: true, message: 'Please input your E-mail!', }],
                                initialValue: props.email
                            })(<Input placeholder="Please input your E-mail" />)}
                        </Form.Item>
                    </Col>
                </div>
            </Row>
            <div className="steps-action">
                <Row>
                    <Button type="primary" onClick={() => next()}>
                        Next
            </Button>
                </Row>
            </div>


        </Form>


    )
}


const WrappedPersonalInformation = Form.create({ name: 'personal_information' })(PersonalInformation);
export default WrappedPersonalInformation