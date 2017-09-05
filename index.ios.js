/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Test from "./src/components/common/Test";
import IndexHeader from "./src/components/Index/IndexHeader";

export default class NewReactNative extends Component {
  render() {
    return (
        <View >
          <IndexHeader/>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Image source={{uri: "https://fuss10.elemecdn.com/3/73/19e992e612e983f517e2690cb3e16png.png"}}
                 style={{  width: 50, height: 50}}/>

          </View>
            <View style={{flex: 2, backgroundColor: 'skyblue'}} >

            </View>
            {/*<Text style={{ transform: [{translateY: -100}]}}>*/}
                {/*Y: -100*/}
            {/*</Text>*/}
            {/*<Text style={{ transform: [{translateY: 100}]}}>*/}
                {/*Y: 100*/}
            {/*</Text>*/}
            {/*<Text style={{ transform: [{translateX: -100}]}}>*/}
                {/*X: -100*/}
            {/*</Text>*/}
            {/*<Text style={{ transform: [{translateX: 90}]}}>*/}
                {/*X: 90*/}
            {/*</Text>*/}
            {/*<Text style={{ transform: [{translateX: 100}]}}>*/}
                {/*X: 100*/}
            {/*</Text>*/}
        </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NewReactNative', () => NewReactNative);
