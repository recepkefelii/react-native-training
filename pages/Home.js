import { View, Text,StyleSheet,Button } from 'react-native'
import Header from '../components/Header';

const Home = () => {
  return (
    <View>
        <Header/>
        <View style={styles.header}>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'blue',
    },})
export default Home