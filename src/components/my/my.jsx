import React, { Component } from 'react'

export default class my extends Component {
    render() {
        return (

            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>

                <div style={{ paddingTop: 60 }}>Clicked “1” tab， show “2” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        // this.setState({
                        // hidden: !this.state.hidden,
                        // });
                    }}
                >
                    Click to show/hide tab-bar
            </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        // this.setState({
                        // fullScreen: !this.state.fullScreen,
                        // });
                    }}
                >
                    Click to switch fullscreen
            </a>
            </div>
        )
    }
}
