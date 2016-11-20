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
    Switch
} from 'react-native';

var CommonCell = React.createClass({
    getDefaultProps(){
        return {
            title: '',//标题
            isSwitch: false,//是否展示开关
            rightTitle:''
        }
    },

    getInitialState(){
        return {
            isOn: false
        }
    },

    render() {
        return (
            <TouchableOpacity onPress={()=> {
                alert('dianjile')
            }}>
                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft: 10}}>{this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        );
    },

    //cell右边显示的内容
    renderRightView(){
        if (this.props.isSwitch) {
            return (
                <Switch
                    style={{marginRight: 10}}
                    value={this.state.isOn == true}
                    onValueChange={()=> {
                        this.setState({
                            isOn: !this.state.isOn
                        })
                    }}
                />
            )
        } else {
            return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width: 8, height: 13, marginRight: 10}}/>
                </View>
            )
        }

    },
    rightTitle(){
        if (this.props.rightTitle.length>0){
            return(
                <Text style={{color:'gray', marginRight:2}}>{this.props.rightTitle}</Text>
            )
        }
    }

});

const styles = StyleSheet.create({
    container: {
        height: 44,
        backgroundColor: 'white',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,

    },

});


module.exports = CommonCell;

