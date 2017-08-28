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
  View
} from 'react-native';
import { Button } from 'antd-mobile'
import Test from "./src/components/common/Test";
// import NewDrawer from "./src/components/common/Drawer";
// import NewDrawer from "./src/components/common/Drawer";

export default class NewReactNative extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>
            Hello World!
          </Text>
          <Button>Hello</Button>
          <Test/>
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
