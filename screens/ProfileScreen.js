/* This file contains the user profile page. */

import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';

function ProfileScreen({navigation}) {
    
    return (
      <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>

              <View style={{ alignSelf: "center", marginTop: 20 }}>  
                <View style={styles.profileImage}>
                    <Image source={require("../assets/icon.png")} style={styles.image} resizeMode="center"></Image>
                </View>      
              </View>

              <View style={styles.infoContainer}>
                  <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Username</Text>
                  <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>email</Text>
              </View>

              <View style={styles.statsContainer}>
                  <View style={styles.statsBox}>
                      <Text style={[styles.text, { fontSize: 24 }]}>183</Text>
                      <Text style={[styles.text, styles.subText]}>Posts</Text>
                  </View>
                  <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                      <Text style={[styles.text, { fontSize: 24 }]}>300</Text>
                      <Text style={[styles.text, styles.subText]}>Followers</Text>
                  </View>
                  <View style={styles.statsBox}>
                      <Text style={[styles.text, { fontSize: 24 }]}>142</Text>
                      <Text style={[styles.text, styles.subText]}>Following</Text>
                  </View>
              </View>
              <View>
                <Text style={{textAlign: "center", marginTop: 50}}>POSTS SHOULD BE HERE</Text>
              </View>
          </ScrollView>
      </SafeAreaView>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFF"
  },
  text: {
      fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: undefined,
      width: undefined
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16
  },
  subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  },
});