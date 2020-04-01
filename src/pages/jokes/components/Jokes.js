import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Card, Row, Col, PageHeader, Avatar, Button } from 'antd'
import { fetchJokes } from '../../../_actions/jokesAction'
import logo from '../../../images/jokes.png';

const { Meta } = Card


export default () => {

    const limit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


    const dispatch = useDispatch();
    const jokes = useSelector(state => state.jokes.items);
    const isLoading = useSelector(state => state.jokes.loading)

    useEffect(() => {
        dispatch(fetchJokes())
    }, [dispatch])


    return (
        <div >
            <PageHeader
                title="Jokes"
                extra={
                    <Button type="primary" onClick={() => dispatch(fetchJokes())}>Randomize</Button>
                }

            />
            <Row type="flex" justify="space-between" align="bottom" >
                {limit && limit.map(index =>
                    <Col style={{ padding: 16 }} key={index} xs={24} xl={8} >
                        <Card
                            key={index}
                            loading={isLoading}>
                            <Meta
                                avatar={
                                    <Avatar src={logo} />
                                }
                                description={`${jokes[index] ? jokes[index].setup : ""} ${jokes[index] ? jokes[index].punchline : ""}`}
                            />

                        </Card>

                    </Col>
                )}
            </Row>


        </div>
    )
}
