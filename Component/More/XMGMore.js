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
    TouchableOpacity,
    Platform,
    ScrollView,
} from 'react-native';

//引入外部组件
var CommonCell = require('./XMGCommonCell');

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}

                <ScrollView>
                    <View style={{marginTop: 20}}>
                        <CommonCell title='扫一扫'/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell title='省流量模式' isSwitch={true}/>
                    </View>
                    <View >
                        <CommonCell title='消息提醒'/>
                    </View>
                    <View >
                        <CommonCell title='邀请好友'/>
                    </View>
                    <View >
                        <CommonCell title='清空缓存' rightTitle='1.5M'/>
                    </View>
                    <View style={{marginTop: 20}}>
                        <CommonCell title='问卷调查'/>
                    </View>
                    <View >
                        <CommonCell title='支付帮助'/>
                    </View>
                    <View >
                        <CommonCell title='网络诊断'/>
                    </View>
                    <View >
                        <CommonCell title='清空缓存'/>
                    </View>
                    <View >
                        <CommonCell title='清空缓存'/>
                    </View>
                    <View >
                        <CommonCell title='扫一扫'/>
                    </View>
                    <View >
                        <CommonCell title='扫一扫'/>
                    </View>
                </ScrollView>
            </View>
        );
    },

    renderNavBar(){
        return (
            <View style={styles.navOutViewStyle}>
                <Text style={styles.textStyle}>
                    更多
                </Text>
                <TouchableOpacity onPress={()=> {
                    alert('点击了')
                }} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navRightImgStyle}/>
                </TouchableOpacity>
            </View>
        )
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navRightImgStyle: {
        width: 28,
        height: 28,


    },
    navOutViewStyle: {
        height: Platform.OS === 'ios' ? 64 : 44,
        backgroundColor: 'rgba(255,96,0,1.0)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    rightViewStyle: {
        position: 'absolute',
        right: 10,
        paddingTop: 10
    }

});


module.exports = More;

