import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet,Button } from 'react-native'
//import {useFonts} from 'expo-font';
import { useFonts,Poppins_500Medium} from '@expo-google-fonts/poppins';

const Home = () => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
      });
    if (!fontsLoaded) return null;

  return (
    <View style={styles.home}>
       <Text style={styles.text}>
        Online Grocery
       </Text>
        <StatusBar style="auto" hidden/>
    </View>
  )
}

const styles = StyleSheet.create({
    home:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    text:{
        paddingTop:20,
        fontFamily :"Poppins_500Medium",
        fontSize:25,
    },

})
export default Home