import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <Text>
                    Div
                </Text>
            </View>
        )
    }
}

// 出现 Expected a component class 这个问题的原因是class内部的标签也不能是小写的，之前使用的是div标签，该标签在RN中不能使用