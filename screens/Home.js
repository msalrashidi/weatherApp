import React, {useState} from 'react'
import { View, Text,StyleSheet,Image, SafeAreaView,TextInput,ActivityIndicator } from 'react-native';
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons';


const Home =() =>{

    const [city, setcity] = useState("")
    const [weather, setweather] = useState({})
    const [loding, setloding] = useState(false)
    
    

    const getWeather = async () =>{

        if(!city.trim()) return
        setloding(true)

        try {
            const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6744a87bd42c344ad9578faf9fed30a6`)
            setweather(res.data)
            setloding(false)
        } catch (error) {
                alert("Check the city name")
                setloding(false)

               
        }
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                    value={city}
                    placeholder="Write the City"
                    onChangeText={(text) => setcity(text)}
                    />
                    {loding? <ActivityIndicator size="small" color="#000" /> 
                    :
                    <AntDesign 
                    onPress={getWeather}
                    name="check" size={24} color="#000" />
                } 
                </View>

                {Object.keys(weather).length > 0 ? 
                <>
                <View style={styles.WContainer}>
                <View style={styles.locationContainer}>
                    <Text style={styles.location}>
                        {weather?.name} , {weather?.sys?.country}
                        </Text>
                        <View style={styles.textDescription}>
                    <Text style={styles.weather}>{weather.weather[0].description }</Text>
                    </View>
                </View>

                <View style={styles.weatherContainer}>

                    <View style={styles.secondContar}>
                    <Text style={styles.temp}>
                       {Math.round( weather.main.temp)}°C
                    </Text>
                    <Text style={styles.weatherMain}>
                        {weather.weather[0].main }
                    </Text>
                </View>

                <View style={styles.therdContainer}>
                    <Text style={styles.weatherMinMax}>
                    {weather.main.temp_min}°C /{weather.main.temp_max}°C
                    </Text>
                </View>
                    
                    </View>
                </View>
                    
                <View style={styles.secondRow}>

                   <View style={styles.boxs}>
                       <Text style={styles.textBoxs}>Humidity</Text>
                       <Text style={styles.answerTextBox}>
                         {weather.main.humidity}</Text>
                   </View>

                   <View style={styles.boxs}>
                       <Text style={styles.textBoxs}>Pressure</Text>
                       <Text style={styles.answerTextBox}>
                        {weather.main.pressure}</Text>
                   </View>

                   <View style={styles.boxs}>
                       <Text style={styles.textBoxs}>Speed Wind</Text>
                       <Text style={styles.answerTextBox}>
                    {weather.wind.speed}
                    </Text>
                   </View>

                </View>

                <View style={styles.LastContainer}>
                    <Text style={styles.lastTaxt}>
                        Design and Devlopment by Mohammed AlRashidi
                    </Text>
                </View>
                </>
                : null}

        </SafeAreaView>
        </View>
    )
}


export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9ECCCC',
        flex:1,
    },
    textInputContainer:{
        backgroundColor:"rgba(255,255,255,0.7)",
        alignItems:'center',
        alignSelf:'center',
        borderRadius:10,
        paddingHorizontal:10,
        width:"70%",
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:"8%"

    },
    textInput:{
        height:40,
        width:"90%",
        fontWeight:'600'

    },
    WContainer:{
        backgroundColor:"#84b5b5",
        paddingHorizontal:30,
        paddingVertical:30,
        borderRadius:30,
        overflow:"hidden",
        marginTop:80,
        marginBottom:30,
        marginHorizontal:"8%"
    },
    locationContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    location:{
        color: '#ffdb55',
        fontSize:25,
    },
    textDescription:{
        paddingLeft:50,
        justifyContent:'space-between',
        flexDirection:'row',
        
    },
    weatherContainer:{
        flexDirection:'row',
        textAlign:"center",
        alignItems:'center',
    },
    secondContar:{
        marginTop:60
    },
    temp:{
        color: '#ffdb55',
        fontSize:25,
    },
    weatherMain:{
        color: '#fff',
    },
    weatherMinMax:{
        paddingLeft:168,
        marginTop:80,
        color: '#fff'

    },
    weather:{
        color:'#fff',
        fontSize:25,
    },
    secondRow:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop:60,
        marginHorizontal:35,
      },
      boxs:{
          backgroundColor:'#fff',
          paddingHorizontal:10,
          borderRadius:16,
          overflow:"hidden",  
            shadowColor:'#000',
        shadowOffset:{width: -3, height:3},
        shadowOpacity:10, 
      },
      textBoxs:{
          color:'#9ECCCC',
          fontWeight:'500',
        marginTop:30,
          marginBottom:30,
      },
      answerTextBox:{
          color:'#FFD022',
          marginBottom:40,
          fontWeight:'600',
          fontSize:25,
        alignSelf:'center',
      },
      LastContainer:{
          marginTop:100,
          alignItems: 'center',
      },
      lastTaxt:{
          color: '#fff',
          fontSize:16,
          fontWeight:'200',
          marginTop:100
      }

});
