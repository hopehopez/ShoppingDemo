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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

//全局的变量
var cols = 5;
var cellWH = Platform.OS == 'ios' ? 70 :50;
var vMargin = (width - cellWH * cols) / (cols + 1);

var TopListView = React.createClass({
    getDefaultProps(){
        return {
            dataArr: []
        }
    },

    getInitialState(){
        var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        return {
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }

    },


    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
        );
    },

    renderRow(rowData) {
        return (
            <View style={styles.cellStyle}>
                <TouchableOpacity onPress={()=> {
                    alert(rowData.title)

                }}>
                    <View style={styles.cellStyle1}>
                        <Image source={{uri: rowData.image}} style={{width: 52, height: 52}}/>
                        <Text style={{color:'gray', fontSize:13}}>{rowData.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

});

const styles = StyleSheet.create({
    contentViewStyle: {
        flexDirection: 'row',
        //多个cell在同一行显示
        flexWrap: 'wrap',
        width: width
    },
    cellStyle: {
        //backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: cellWH,
        height: cellWH,
        marginTop: 10,
        marginLeft: vMargin
    },
    cellStyle1: {
        //backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: vMargin
    }

});


module.exports = TopListView;

