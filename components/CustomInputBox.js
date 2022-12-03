import React from 'react'
import { TextInput,View,StyleSheet,SafeAreaView } from 'react-native'


const CustomInputBox = () => {
  return (
   
        <SafeAreaView>
            <TextInput 
            style={styles.input}
            placeholder='Search...'
            />
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'white',
        width:300,
        height:47,
        padding:10,
        borderRadius:10,
        borderColor:'gray',
        elevation:0,
        shadowOpacity:10,
        shadowRadius:10,
        shadowColor:'black',
    }})

export default CustomInputBox