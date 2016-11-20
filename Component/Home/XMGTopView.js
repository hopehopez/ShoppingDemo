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
    TouchableOpacity,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//引入外部的组件
var TopListView = require('./XMGTopListView');

//引入外部的json数据
var TopMenu = require('../../LocalData/TopMenu.json');

var TopView = React.createClass({
    getInitialState() {
        return {
            activePage:0
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*内容部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this._onScrollAnimationEnd}
                >
                    {this.renderScrollViewItem()}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        );
    },

    //当一帧滚动结束的时候调用
    _onScrollAnimationEnd(scrollView) {
        var currentPage = Math.floor(scrollView.nativeEvent.contentOffset.x / width);
        console.log(currentPage);
        this.setState({
            activePage:currentPage
            });
    },

    //scrollView内部的组件
    renderScrollViewItem() {
        //组件数组
        var itemArr = [];
        //颜色数组
        var dataArr = TopMenu.data;
        //遍历组件数组
        for (var i=0; i<dataArr.length; i++){
            itemArr.push(
                <TopListView
                    key={i}
                    dataArr ={dataArr[i]}
                />
            );
        }
        return itemArr;
    },

    renderIndicator() {
        //指示器数组
        var indicatorArr = [], style = {};
        //遍历创建数组
        for(var i=0; i<2; i++){

            style  = (i===this.state.activePage) ? {color:'orange'} : {color:'gray'};
            indicatorArr.push(
                <Text key={i} style={[{color:'red', fontSize:25}, style]}>
                    &bull;
                </Text>
            )
        }
        return indicatorArr;
    }

});

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white'
    },

    indicatorViewStyle: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        width:width,
        //height:20,

    },


});


module.exports = TopView;

