import React, { Component } from 'react'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import img1 from '../../asset/images/y_b.png';
import img2 from '../../asset/images/y_c.png';
import imglogo from '../../logo.svg';
export default class index extends Component {

    constructor() {
        super();

        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            slideIndex: 0,
        };
    }
    render() {
        return (
            <div>
                <Carousel
                    autoplay
                    infinite
                    selectedIndex={1}
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => console.log('slide to', index)}
                >


                    <a
                        key={1}
                        href="#"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                            src={img1}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>
                    <a
                        key={2}
                        href="#"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                        <img
                            src={img2}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    </a>

                </Carousel>
            </div>
        )
    }
}

