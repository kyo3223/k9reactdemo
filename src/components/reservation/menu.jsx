import React, { Component } from 'react'
import { Grid, Flex, WhiteSpace } from 'antd-mobile';
import './menu.css';
import { Link } from "react-router-dom";
// const PlaceHolder = ({ className = '', ...restProps }) => (
//     <div className={`${className} placeholder`} {...restProps}>Block</div>
// );
const data1 = Array.from(new Array(29)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));
export default class menu extends Component {
    render() {
        return (
            <div className="flex-container">               
                <div className="sub-title">菜单</div>
                <Grid data={data1}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{ padding: '12.5px' }}>
                            <Link to={`/reservation`}>
                                <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
                                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                    <span>I am title..</span>
                                </div>
                            </Link>
                        </div>
                    )}
                />
            </div>
        )
    }
}
