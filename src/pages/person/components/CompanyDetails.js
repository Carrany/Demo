import React, { useState } from 'react'
import { Button, Form, Input, Row, Col } from 'antd';
import './steps.css'

const CompanyDetials = props => {
    console.log(props)
    const { getFieldDecorator } = props.form
    const [isLoading, setLoading] = useState(false)

    const next = () => {
        props.form.validateFieldsAndScroll((err, values) => {
            if (err) return
            setLoading(true)
            props.submittedValues(values, 2);
            props.handleSubmit(values)
        });
    }

    const prev = () => {
        props.form.validateFieldsAndScroll((err, values) => {
            props.submittedValues(values, 2);
            props.handlePrev()
        });
    }

    return (

        <Form layout='vertical' >
            <Row gutter={8}>
                <div className="steps-content" key={1}>

                    <Col xl={8}>
                        <Form.Item label="Company Name">
                            {getFieldDecorator('companyName', {
                                rules: [{ required: true, message: 'Please input your Company Name' }],
                                initialValue: props.companyName
                            })(<Input width='100%' placeholder="Please input your Company Name" />)}
                        </Form.Item>
                    </Col>
                    <Col xl={8}>
                        <Form.Item label="Company Location">
                            {getFieldDecorator('companyLocation', {
                                rules: [{ required: true, message: 'Please input your Company Location' }],
                                initialValue: props.companyLocation
                            })(<Input placeholder="Please input your Company Location" />)}
                        </Form.Item>
                    </Col>
                    <Col xl={8}>
                        <Form.Item label="Company Revenue">
                            {getFieldDecorator('companyRevenue', {
                                rules: [{ required: true, message: 'Please input your Company Revenue' }],
                                initialValue: props.companyRevenue
                            })(<Input type="number" placeholder="Please input your Company Revenue" />)}
                        </Form.Item>
                    </Col>
                </div>
            </Row>
            <div className="steps-action">
                <Row>
                    <Button style={{ marginRight: 8 }} onClick={() => prev()}>
                        Previous
            </Button>
                    <Button loading={isLoading} type="primary" onClick={() => next()}>
                        Finish
            </Button>

                </Row>
            </div>


        </Form>


    )
}


const WrappedCompanyDetials = Form.create({ name: 'personal_information' })(CompanyDetials);
export default WrappedCompanyDetials