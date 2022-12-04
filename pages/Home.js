import { View, Text,StyleSheet,Button } from 'react-native'
import Header from '../components/Header';
import HorizontalScroll from '../components/HorizontalScroll';
import react,{useState} from 'react';
const Home = () => {
  const [isPressed1,setIsPressed1] = useState(true)
  const [isPressed2,setIsPressed2] = useState(true)
  const [isPressed3,setIsPressed3] = useState(true)
  const [isPressed4,setIsPressed4] = useState(true)
  const [isPressed5,setIsPressed5] = useState(true)
  const [isPressed6,setIsPressed6] = useState(true)
  return (
    <View>
        <View>
        <Header/>
        <HorizontalScroll setIsPressed1={setIsPressed1} isPressed1={isPressed1}
        setIsPressed2={setIsPressed2} isPressed2={isPressed2}
        setIsPressed3={setIsPressed3} isPressed3={isPressed3}
        setIsPressed4={setIsPressed4} isPressed4={isPressed4}
        setIsPressed5={setIsPressed5} isPressed5={isPressed5}
        setIsPressed6={setIsPressed6} isPressed6={isPressed6}
        />
        </View>

        <View style={{backgroundColor:"red"}}>
       {isPressed1 ? <Text>True</Text> : <Text>False</Text>}
        </View>

    </View>
  )
}
export default Home