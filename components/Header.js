import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text,View,StyleSheet} from 'react-native'
import { useFonts,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Menu from 'react-native-vector-icons/Entypo';
import Notification from 'react-native-vector-icons/Ionicons';
import CustomInputBox from '../components/CustomInputBox'
import CustomSettingIconButton from './CustomSettingIconButton';
function Header () {

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

if (!fontsLoaded) return null;


  return (
    <View style={styles.main_header}>
      <View style={styles.header}>
            <StatusBar style="auto" hidden/>
      <View style={styles.view}>
            <Menu name='menu' size={34}/>
      </View>
      <View style={styles.view}>
            <Text style={styles.text}>Online Grocery</Text>
      </View>
      <View style={styles.view}>
            <Notification name='notifications-outline' size={25}/>
      </View>
      </View>
      <View style={styles.CustomInputBox}>
            <CustomInputBox/>
            <CustomSettingIconButton/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    main_header:{
      backgroundColor:'#FBF1F3',
      paddingBottom:50
    },
   header:{
    paddingTop:30,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:15,
   },
    view:{
      margin:10,

    },
    text:{
      fontFamily:'Poppins_500Medium',
      fontSize:20,
      color:'#333333'
    },
    CustomInputBox:{
      paddingHorizontal:10,
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',        
    }
  })

export default Header 