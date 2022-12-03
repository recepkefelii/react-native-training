import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.home}>
        <Text>
            Home
        </Text>
        <StatusBar style="auto" hidden/>
    </View>
  )
}
const styles = StyleSheet.create({
    home:{
        flex:1,
        color:'green',
        alignItems:'center'
    }
})
export default Home