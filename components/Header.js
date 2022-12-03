import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text,View,StyleSheet,TouchableOpacity,Feather,Button} from 'react-native'
import { useFonts,Poppins_500Medium} from '@expo-google-fonts/poppins';
import Menu from 'react-native-vector-icons/Entypo';
import Notification from 'react-native-vector-icons/Ionicons';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import notification from '../assets/notification.svg'
function Header () {

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });
if (!fontsLoaded) return null;

  return (
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
  )
}

const styles = StyleSheet.create({
   header:{
    paddingTop:30,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#FBF1F3',
    paddingHorizontal:5,
   },
    view:{
      margin:10,

    },
    text:{
      fontFamily:'Poppins_500Medium',
      fontSize:22,
    }
  })

export default Header 