import React from 'react'
import { useSelector } from 'react-redux'
import { Divider, Col, Row, Avatar } from 'antd';
import UserAvatar from '../../../images/user.png';
import IdAvatar from '../../../images/id.png';
import CompanyAvatar from '../../../images/company.png';

const pStyle = { fontSize: 16, color: 'rgba(0,0,0,0.85)', lineHeight: '24px', display: 'block', marginBottom: 16 };
const DescriptionItem = ({ title, content }) => (
    <div style={{ fontSize: 14, lineHeight: '22px', marginBottom: 7, color: 'rgba(0,0,0,0.65)' }} >
        <p style={{ marginRight: 8, display: 'inline-block', color: 'rgba(0,0,0,0.85)' }}>
            {title}:
        </p>
        {content}
    </div>
);

const DisplayPerson = props => {

    const person = useSelector(state => state.person.item);

    //check if person is empty
    if (Object.entries(person).length === 0) {
        props.history.push('/person')
    }

    return (
        <div>

            <p style={pStyle}><b>  <Avatar src={UserAvatar} />  Personal</b></p>
            <Row>
                <Col xs={24} xl={12}>
                    <DescriptionItem title="First Name" content={person.firstName} />
                </Col>
                <Col xs={24} xl={12} >
                    <DescriptionItem title="Last Name" content={person.lastName} />
                </Col>
            </Row>
            <Row>
                <Col xs={24} xl={12}>
                    <DescriptionItem title="Phone " content={person.phoneNumber} />
                </Col>
                <Col xs={24} xl={12}>
                    <DescriptionItem title="Email" content={person.email} />
                </Col>
            </Row>

            <Divider />
            <p style={pStyle}><b><Avatar src={IdAvatar} /> Personal Identification</b></p>
            <Row>
                <Col xs={24} xl={12}>
                    <DescriptionItem title="National ID" content={person.nationalId} />
                </Col>
                <Col sxs={24} xl={12}>
                    <DescriptionItem title="KRA Pin" content={person.kraPin} />
                </Col>
            </Row>

            <Divider />
            <p style={pStyle}><b> <Avatar src={CompanyAvatar} /> Company</b></p>
            <Row>
                <Col xs={24} xl={12}>
                    <DescriptionItem title="Company Name" content={person.companyName} />
                </Col>
                <Col xs={24} xl={12}>
                    <DescriptionItem title="Company Location" content={person.companyLocation} />
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <DescriptionItem
                        title="Company Revenue"
                        content={person.companyRevenue}
                    />
                </Col>
            </Row>
            <Divider />


        </div>
    )
}

export default DisplayPerson
