/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Navigator
} from 'react-native';

//导入外部的组件类
import TabNavigator from 'react-native-tab-navigator';

var Mine = require('../Mine/XMGMine');
var Home = require('../Home/XMGHome');
var More = require('../More/XMGMore');
var Shop = require('../Shop/XMGShop');

var Main = React.createClass({
    //初始化函数(变量是可以改变的, 充当状态机的角色)
    getInitialState(){
        return {
            selectedTab: 'home'
        }
    },

    render() {
        return (
            <TabNavigator style={{flex: 1}}>
                {/*首页*/}
                {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', Home)}

                {/*商家*/}
                {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', Shop)}

                {/*我的*/}
                {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', Mine)}

                {/*更多*/}
                {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', More)}
            </TabNavigator>
        );
    },

    renderTabBarItem(title, iconName, selectedIconName, selectedTab ,component ){
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={()=> <Image source={{uri: iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri: selectedIconName}}
                                                 style={styles.iconStyle}/> }
                onPress={() => {
                    this.setState({
                        selectedTab: selectedTab
                    })
                }}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
            >
                <Navigator
                    initialRoute={{name: title, component: component}}
                    configureScene={()=> {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator)=> {
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>
                    }}
                />
            </TabNavigator.Item>)
    }
});

const styles = StyleSheet.create({
    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
    },
    selectedTitleStyle:{
        color: 'orange'
    }

});


module.exports = Main;

