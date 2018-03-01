import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import My from '../../components/my/my'
import Menu from '../../components/reservation/menu'
import Myindex from '../../components/index/index'


export default class main extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    }
        
    // renderContent(pageText) {
    //     return (
    //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
    //         <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
    //         <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
    //         onClick={(e) => {
    //             e.preventDefault();
    //             this.setState({
    //             hidden: !this.state.hidden,
    //             });
    //         }}
    //         >
    //         Click to show/hide tab-bar
    //         </a>
    //         <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
    //         onClick={(e) => {
    //             e.preventDefault();
    //             this.setState({
    //             fullScreen: !this.state.fullScreen,
    //             });
    //         }}
    //         >
    //         Click to switch fullscreen
    //         </a>
    //     </div>
    //     );
    // }
    // renderContent2(pageText) {
    //     return (
    //     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
    //         <Myindex/>
    //     </div>
    //     );
    // }

    // renderContent3(pageText) {
    //     return (
    //     <my/>
    //     );
    // }
    render() {
        return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="主页"
            key="index"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={2}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            <Myindex/>
          </TabBar.Item>
      
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="菜单"
            key="order"
            
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Menu/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <My/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
    }
}
