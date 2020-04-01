import React, { Component } from 'react';
import { Route, NavLink, withRouter, Switch } from "react-router-dom";
import { Layout, Menu, Icon, Row, Col, Drawer } from 'antd';
import { routes } from '../routes'
import { Page404 } from './404'
import './item.css'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const paths = [
    {
        name: 'Jokes',
        path: '/',
        icon: 'smile'
    },
    {
        name: 'Persons',
        path: '/person',
        icon: 'usergroup-add'
    },
]

class WithNavigation extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
            openKeys: [],
            isMobile: false
        };


    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (paths.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    handleBreakpoint = (value) => {
        this.setState({
            collapsed: value,
            isMobile: value
        })
    }

    render() {

        const sideContent = [
            <Sider
                key={1}
                breakpoint="xs"
                collapsedWidth="0"
                width={230}
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
                style={{ height: 'inherit' }}
                onBreakpoint={breakpoint => this.handleBreakpoint(breakpoint)}

            >
                <div className="menu-logo">
                    <Icon type="wallet" theme="twoTone" className="menu-header-logo" />
                    <h1 className="menu-header" >Pezesha</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}

                >
                    {

                        paths.map((route, i) => (
                            route.items ?
                                <SubMenu
                                    key={i}
                                    title={
                                        <span>
                                            <Icon type={route.icon} />
                                            <span>{route.name}</span>
                                        </span>
                                    }
                                >   {route.items.map((route, i) => (
                                    <Menu.Item key={route.path} >
                                        <NavLink to={route.path} key={route.path}>
                                            <Icon type={route.icon} />
                                            <span>{route.name}</span>
                                        </NavLink>

                                    </Menu.Item>
                                ))
                                    }
                                </SubMenu>
                                :

                                <Menu.Item key={i} >
                                    <NavLink to={route.path} key={i}>
                                        <Icon type={route.icon} />
                                        <span>{route.name}</span>
                                    </NavLink>

                                </Menu.Item>



                        ))
                    }
                </Menu>
            </Sider>

        ]
        return (<Layout >

            {this.state.isMobile === false ? sideContent :
                <Drawer
                    maskClosable
                    closable={false}
                    onClose={this.toggle}
                    visible={!this.state.collapsed}
                    placement="left"
                    width={230}
                    bodyStyle={{
                        padding: 0,
                        height: '100vh',
                    }}
                >
                    {sideContent}
                </Drawer>

            }
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Row>
                        <Col span={2}>
                            <Icon

                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                        </Col>

                    </Row>




                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}
                >

                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={props => <route.component {...props} />}
                                />
                            ) : null;
                        })}
                        <Route component={Page404} />
                    </Switch>

                </Content>
            </Layout>

        </Layout>
        )
    }
}
const SideBar = withRouter(WithNavigation)

export default SideBar;
