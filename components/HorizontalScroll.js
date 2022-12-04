import React from 'react'
import {View, StyleSheet, ScrollView,Text} from 'react-native'
import  Card from './Card'
 const HorizontalScroll = ({setIsPressed1,isPressed1
    ,setIsPressed2,isPressed2
    ,setIsPressed3,isPressed3
    ,setIsPressed4,isPressed4
    ,setIsPressed5,isPressed5
    ,setIsPressed6,isPressed6
}) => {
  return (
    <View style={styles.bottom}>
        <ScrollView horizontal={true}>
        <Card setIsPressed1={setIsPressed1} isPressed1={isPressed1}/>
        <Card setIsPressed2={setIsPressed2} isPressed2={isPressed2}/>
        <Card setIsPressed3={setIsPressed3} isPressed3={isPressed3}/>
        <Card setIsPressed4={setIsPressed4} isPressed4={isPressed4}/>
        <Card setIsPressed5={setIsPressed5} isPressed5={isPressed5}/>
        <Card setIsPressed6={setIsPressed6} isPressed6={isPressed6}/>
        </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    bottom:{
        backgroundColor:'#FEFEFE',
        height:100,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    }
})

export default HorizontalScroll
