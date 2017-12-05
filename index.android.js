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
var {
  BaiduVoise,
  SpeechRecognizer
}=require('react-native-voise');

export default class yuyin extends Component {
  onReceive(results) {
    console.warn(results)
	}
  render() {
    return (
      <View style={styles.container}>
				<BaiduVoise 
		          ref={'BaiduVoise'}
		          style={styles.button}
		          api_key={'swD7CfFYgFLKTCMQaAOAfHDo'} 
		          secret_key={'ab6993ddea88e05106a056153224216f'} 
		          onReceive={this.onReceive.bind(this)}>      
		            <Text style={styles.welcome}>点击，说话</Text>
		        </BaiduVoise>
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

AppRegistry.registerComponent('yuyin', () => yuyin);
