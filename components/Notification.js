import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Alert,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
const Drawer = createDrawerNavigator();
import { useNavigation } from "@react-navigation/native";
import Navbar from './Navbar';
export default function Notification() {
  const [show, setShow] = React.useState(true);
  const navigation = useNavigation();
  return (
    <>
       <View style={styles.navbg}>
        <View style={styles.flex}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
        <Ionicons style={styles.navbaricon} name="angle-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.txt}>Notifications</Text>

        </View>
        
          {/* <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image 
          style={styles.img} 
          source={require("../assets/bell6.png")}/>
          </TouchableOpacity> */}
        </View>
      <Text style={styles.txt2}>No notifications for you!</Text>
    </>
  );
}
const styles = StyleSheet.create({
  txt2:{
    textAlign:'center',
    marginTop:'10%',
    fontWeight:'800'
  },
  navbg: {
    backgroundColor: '#440095',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 13,
  },
  txt: {
    textAlign:'left',
    color: 'white',
    fontSize:18,
  },
  flex:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    gap:30,
  },
  img:{
    aspectRatio:1,
    width:20,
    height:26,
    
  },
  
  navbaricon: {
   marginLeft:5,
   width:20,
   marginLeft:5,
    
     
  },
});
