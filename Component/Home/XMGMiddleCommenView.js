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
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var MiddleCommonView = React.createClass({
    getDefaultProps(){
        return {
            title: '',
            subTitle: '',
            rightImage: '',
            titleColor: '',
            tplurl:'',//下级界面的url路径
            callBackClickCell:null
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)} style={{ width: width * 0.5 ,
                height: 60,}}>
                <View style={styles.container}>
                    {/*左边*/}
                    <View>
                        <Text style={[{color: this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    {/*右边*/}
                    <Image source={{uri: this.props.rightImage}} style={{width: 64, height: 43, resizeMode:'contain'}}/>
                </View>
            </TouchableOpacity>
        );
    },

    clickCell(data) {
        // alert(data);
        if (this.props.callBackClickCell == null) {
            return;
        } else {
            this.props.callBackClickCell(data);
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        width: width * 0.5 - 1,
        height: 59,
        flexDirection: 'row',
        marginBottom: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
         marginRight:0.5,
         marginLeft:0.5,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    subTitleStyle: {
        color: 'gray'
    }


});


module.exports = MiddleCommonView;

