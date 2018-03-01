import React, { Component } from 'react'
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
const Item = List.Item;
export default class my extends Component {
    render() {
        return (

            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <List renderHeader={() => 'TEST TEST'}>
                    <Link to={'/myinfo'}>
                        <Item
                            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                            arrow="horizontal"
                            onClick={() => { }}
                        >My info</Item>
                    </Link>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => { }}
                        arrow="horizontal"
                    >
                        My Cost Ratio
            </Item>
                </List>
            </div>
        )
    }
}
