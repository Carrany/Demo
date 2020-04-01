import React from 'react'
import { Button, Form, Input, Row, Col } from 'antd';
import './steps.css'

const PersonalIdentification = props => {
    console.log(props)
    const { getFieldDecorator } = props.form

    const next = () => {
        props.form.validateFieldsAndScroll((err, values) => {
            if (err) return
            props.submittedValues(values, 1);
            props.handleNext()
        });
    }

    const prev = () => {
        props.form.validateFieldsAndScroll((err, values) => {
            props.submittedValues(values, 1);
            props.handlePrev()
        });
    }

    return (

        <Form layout='vertical' >
            <Row gutter={8}>
                <div className="steps-content" key={1}>

                    <Col xl={8}>
                        <Form.Item label="National Id">
                            {getFieldDecorator('nationalId', {
                                rules: [{ required: true, message: 'Please input your National Id' }],
                                initialValue: props.nationalId
                            })(<Input width='100%' placeholder="Please input your National Id" />)}
                        </Form.Item>
                    </Col>
                    <Col xl={8}>
                        <Form.Item label="KRA Pin">
                            {getFieldDecorator('kraPin', {
                                rules: [{ required: true, message: 'Please input your kra pin' }],
                                initialValue: props.kraPin
                            })(<Input placeholder="Please input your KRA Pin" />)}
                        </Form.Item>
                    </Col>
                </div>
            </Row>
            <div className="steps-action">
                <Row>
                    <Button style={{ marginRight: 8 }} onClick={() => prev()}>
                        Previous
            </Button>
                    <Button type="primary" onClick={() => next()}>
                        Next
            </Button>

                </Row>
            </div>


        </Form>


    )
}


const WrappedPersonalIdentification = Form.create({ name: 'personal_information' })(PersonalIdentification);
export default WrappedPersonalIdentification