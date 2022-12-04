import React from 'react'
import { View,StyleSheet,Text,Image,TouchableOpacity } from 'react-native'


const Card = ({isPressed1 ,setIsPressed1
    ,isPressed2 ,setIsPressed2
    ,isPressed3 ,setIsPressed3
    ,isPressed4 ,setIsPressed4
    ,isPressed5 ,setIsPressed5
    ,isPressed6 ,setIsPressed6

}) => {
  return (
    <TouchableOpacity onPress={() => setIsPressed1(!isPressed1)}>
    {isPressed1 ? 
    <View style={styles.card} >
      <View style={styles.inner}>
        <Image source={require('../assets/hamburger.png')} />
        <Text style={styles.text}>Foods</Text>
      </View>
    </View>
    :
    <View style={styles.card2} >
      <View style={styles.inner}>
        <Image source={require('../assets/hamburger.png')} />
        <Text style={styles.text}>Foods</Text>
      </View>
    </View>
    }
     </TouchableOpacity>,
     <TouchableOpacity onPress={() => setIsPressed2(!isPressed2)}>
     {isPressed2 ? 
     <View style={styles.card} >
       <View style={styles.inner}>
         <Image source={require('../assets/hamburger.png')} />
         <Text style={styles.text}>Foods</Text>
       </View>
     </View>
     :
     <View style={styles.card2} >
       <View style={styles.inner}>
         <Image source={require('../assets/hamburger.png')} />
         <Text style={styles.text}>Foods</Text>
       </View>
     </View>
     }
      </TouchableOpacity>
     
  )
}

const styles = StyleSheet.create({
    card:{
      backgroundColor:'#166C44',
      height:65,
      width:65,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:25,
      borderRadius:10,
    },
    inner:{
      paddingTop:5,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      fontFamily:'Poppins_500Medium',
	  color:'#fefefe',
	  fontSize:13,
    },
    card2:{
      backgroundColor:'#C1C1C1',
      height:65,
      width:65,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:25,
      borderRadius:10,
    }
})

export default Card