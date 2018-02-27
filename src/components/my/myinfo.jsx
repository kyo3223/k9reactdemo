import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class myinfo extends Component {
    render() {
        return (
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                    // window.location.href='/'
                    // this.props.history.push('/');
                    this.props.history.goBack();
                }}
                // rightContent={[
                //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                //     <Icon key="1" type="ellipsis" />,
                // ]}
            >我的信息</NavBar>
        )
    }
}
