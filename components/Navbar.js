import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import { useRoute } from "@react-navigation/native";

export default function Navbar({navigation}) {
  const [show, setShow] = React.useState(true);
  const route = useRoute();
  return (
    <>
      <View style={styles.navbg}>
        <View style={styles.flex}>
         
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        <Ionicons style={styles.navbaricon} name="bars" size={22} color="white" />
          </TouchableOpacity>
          {
            route.name==='Buspass Request Status'?<Text style={styles.txt}>Buspass Request Status</Text>:<Text style={styles.txt}>Digital Bus Pass</Text>
          }
          

        </View>
        {
          route.name==='Home'?
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Image 
          style={styles.img} 
          source={require("../assets/bell6.png")}/>
          </TouchableOpacity>:null
        }
         
        </View>
    </>
  );
}
const styles = StyleSheet.create({
  
  navbg: {
    backgroundColor: '#683cc7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  txt: {
    textAlign:'left',
    color: 'white',
    fontSize:17,
  },
  flex:{
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
    
     
  },
  
});