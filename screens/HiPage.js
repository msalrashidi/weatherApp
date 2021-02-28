import React from 'react'
import { View, Text,StyleSheet,Image,Button,TouchableOpacity, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export default function HiPage({navigation}) {
    return (
        <View style={styles.container}>
          <View style={styles.image2}>
          <Image style={styles.image} source={require('../assets/FirstImagePNG.png')} />
          </View>
          
          <View style={styles.row}>
          <Text style={styles.TextFind} >Find </Text>
          <Text style={styles.Text}>the sun </Text>
          </View>

          <Text style={styles.Text}>in your City!</Text>
          <Text style={styles.SecondText}>It's a pleasure to keep track of the </Text>
          <Text style={styles.SecondText}>weather with the new app</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate ("Home")} >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#9ECCCC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row:{
      flexDirection: "row"
    },
    TextFind:{
      color:'#ffdb55',
      alignItems: 'center',
      fontSize:50
    },
    Text:{
      color:'#fff',
      alignItems: 'center',
      fontSize:50
    },
    SecondText:{
      color:'#fff',
      alignItems: 'center',
      fontSize:16,
    },
    image:{
      width: 350,
      height: 125,
      marginBottom:70
    },
    button:{
      backgroundColor:'#fff',
      paddingHorizontal:80,
      paddingVertical:15,
      borderRadius:10,
      marginTop:80,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 0,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    buttonText:{
      color:'#FCCC18',
    }
  });
  
