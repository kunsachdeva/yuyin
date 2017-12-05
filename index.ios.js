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
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
				<Text>{"this.state.result"}</Text>
				<BaiduVoise 
		          ref={'BaiduVoise'}
		          style={styles.button}
		          api_key={'q0UcNM0glvjekMtBQNWzM92y'} 
		          secret_key={'8hRsMQCQGNdwqnyF8GkWBgr6WObZFT5l'} 
		          onReceive={this.onReceive.bind(this)}>      
		            <Text>点击，说话</Text>
		        </BaiduVoise>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
		flex:1
	},
 	button:{
        height:50,
    }
});

AppRegistry.registerComponent('yuyin', () => yuyin);
