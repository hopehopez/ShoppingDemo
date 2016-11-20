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
    Platform,
    TouchableOpacity,
    Image,
    WebView
} from 'react-native';

var ShopCenterDetail = React.createClass({

    getInitialState(){
        return {
            detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    },

    render() {
        //alert(this.props.url);
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />

            </View>
        );
    },
    renderNavBar(){
        return (
            <View style={styles.navOutViewStyle}>
                <TouchableOpacity onPress={()=> {
                    this.popToHome();
                }} style={styles.leftViewStyle}>
                    <Image source={{uri: 'icon_camera_back_normal'}} style={styles.navLeftImgStyle}/>
                </TouchableOpacity>
                <Text style={styles.textStyle}>
                    购物中心详情页
                </Text>
                <TouchableOpacity onPress={()=> {
                    alert('点击了')
                }} style={styles.rightViewStyle}>
                    <Image source={{uri: 'icon_mine_setting'}} style={styles.navRightImgStyle}/>
                </TouchableOpacity>
            </View>
        )
    },
    popToHome(){
        this.props.navigator.pop();
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
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
    navLeftImgStyle: {
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
    },
    leftViewStyle: {
        position: 'absolute',
        left: 10,
        paddingTop: 10
    }

});


module.exports = ShopCenterDetail;

