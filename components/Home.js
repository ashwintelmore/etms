import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  FlatList,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
  ActivityIndicator,
  Linking,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from "@react-navigation/native";
import IconF from 'react-native-vector-icons/Fontisto';
import IconI from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/FontAwesome6';
export default function Home({ navigation }) {
  const [show, setShow] = React.useState(false);
  const route = useRoute();
  return (
    <SafeAreaView  style={styles.container}>
      
     
    <LinearGradient
       style={styles.container}
       
        colors={['blue', '#683cc7']}
        >
      <View style={styles.con}>
        <Text style={styles.txt}>Welcome To</Text>
        <Text style={styles.txt2}>TCS eTMS</Text>
        <Text style={styles.txt3}>PLEASE SELECET YOUR SERVICE</Text>
      </View>

      <View style={styles.con2}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <View style={styles.option}>
            <IconI style={styles.img} name="bus" size={60} color="white" />

            <Text style={styles.txt4}>Bus Services</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
        <View style={styles.option}>
           <IconF style={styles.img} name="car" size={60} color="white" />

          <Text style={styles.txt4}>Cab Services</Text>
        </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Home')}>
        <View style={styles.option}>
           <IconI style={styles.img} name="location-sharp" size={60} color="white" />
          <Text style={styles.txt4}>Geocode Yourself</Text>
        </View>
        </Pressable>
      </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    
  },
  con: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    lineHeight: 30,
  },
  con2: {
    alignItems: 'flex-end',
    marginTop:20,
  },
  txt: {
    color: 'white',
    lineHeight: 40,
    fontSize: 25,
    fontWeight:'100',
  },
  txt2: {
    color: 'white',
    fontSize: 30,
    fontWeight:'500',
  },
  txt3: {
    color: 'white',
    lineHeight: 40,
    fontSize: 20,
    
  },
  txt4: {
    color: 'white',
    fontWeight:'700',
    fontSize:21,
  },
  img: {
    
    
    marginHorizontal:20,
  },
  option: {
    width: 320,
    height:100,
    flexDirection: 'row',
    
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    padding: 20,
    backgroundColor: '#000080',
    marginVertical: 10,
  },
  
});
