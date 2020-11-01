/* This file contains the news page. */

import React,{ Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewsScreen extends Component{
    render(){
      return (
        <View style={styles.container}>
            <Text>This is the news screen.</Text>
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