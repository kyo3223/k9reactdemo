import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Link } from "react-router-dom";

export default class reservation extends Component {
    render() {
        return (
            <Link to={'/'}>

                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    //     <Icon key="1" type="ellipsis" />,
                    // ]}
                >预约</NavBar>
            </Link>
        )
    }
}
