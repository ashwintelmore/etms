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


export default function Navbar({navigation}) {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <View style={styles.navbg}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()}>
          <Image
          
            style={styles.navimg}
            source={{
              uri: 'https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png',
            }}
          />
          </TouchableOpacity>
          <Text style={styles.txt}>Digital Bus Pass</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Ionicons style={styles.navimg} name="bell-o" size={20} color="white" />
          </TouchableOpacity>
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
  },
  
  navimg: {
    aspectRatio: 1,
    height: 25,
    
     
  },
  
});