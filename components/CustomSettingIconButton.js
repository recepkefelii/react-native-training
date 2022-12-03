import React from 'react'
import {View,StyleSheet} from 'react-native'
import Filters from 'react-native-vector-icons/Feather';
import {MaterialIcon} from '../assets/selective.png';

const CustomSettingIconButton = () => {
  return (
   <View style={styles.setting_button}>
      <Filters name='filter' size={25} color={"lightgreen"}/>
   </View>
  )
}
const styles = StyleSheet.create({
    setting_button:{
        backgroundColor:'#FEFEFE',
        height:47,
        width:47,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    }}
    )

export default CustomSettingIconButton