/* This file contains the home page. */

import React,{ Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends Component{
    render(){
      return (
        <View style={styles.container}>
            <Text>This is the home screen.</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    alignItems: 'center', 
    justifyContent: 'center'
  }
});