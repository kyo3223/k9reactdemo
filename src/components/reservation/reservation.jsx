import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Link } from "react-router-dom";
import { setTab } from '../../actions'
import {connect } from 'react-redux';

class reservation extends Component {
    render() {
        return (
            <div>
            <Link to={'/'} onClick={() => {this.props.setTab('greenTab'); }}>

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

            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                    // window.location.href='/'
                    // this.props.history.push('/');
                    this.props.setTab('greenTab');
                    this.props.history.goBack();
                }}
                // rightContent={[
                //     <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                //     <Icon key="1" type="ellipsis" />,
                // ]}
            >预约this.props.history.goBack</NavBar>
            </div>
        )
    }
}

export default connect((state) => (state), {setTab})(reservation)