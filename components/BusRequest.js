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
  import Ionicons from 'react-native-vector-icons/FontAwesome';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  const Drawer = createDrawerNavigator();
  
  import Navbar from './Navbar';
  export default function BusRequest({ navigation }) {
    const [show, setShow] = React.useState(true);
    return (
      <>
        <Navbar navigation={navigation} />
        <View style={styles.maincon}>
          <View style={styles.con}>
            <View style={styles.reqcon}>
              <Text style={styles.txt}>Request Id: 7339908</Text>
              <Text style={styles.txtgreen} >Confirmed       <Ionicons style={styles.icon} name="pencil"  size={20} color="blue"  /></Text>
            </View>
            <View style={styles.flex1}>
              <View style={styles.dotcon}>
                <Text style={styles.green}>.</Text>
                <Text style={styles.gray}>.</Text>
                <Text style={styles.gray}>.</Text>
                <Text style={styles.gray}>.</Text>
                <Text style={styles.red}>.</Text>
              </View>
              <View style={styles.pathcon}>
                <Text style={styles.pathtxt1}>Ord. Factory Gate-2</Text>
                <Text style={styles.pathtxt2}>Mihan</Text>
              </View>
            </View>
  
            <Text style={styles.stoptxt}>Bus Stop Name: Subhash Chowk</Text>
            <View style={styles.flex}>
              <Text style={styles.graytxt}>Pick up : 09:00</Text>
              <Text style={styles.graytxt}>Drop : 19:15</Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.graytxt}>Start Date : 2024-04-1</Text>
              <Text style={styles.graytxt}>End Date : 2024-04-30</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
  const styles = StyleSheet.create({
    maincon: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    dotcon:{
  alignItems: 'center',
    },
    txt:{
      fontWeight:'700',
    },
    txtgreen:{
      color:"green",
      fontWeight:'700',
      
    },
    con: {
      borderRadius: 4,
      marginTop: 11,
      borderColor: 'black',
      width: '97%',
      height: 200,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
      marginBottom: 30,
  
      backgroundColor: 'white',
    },
    reqcon:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical:7,
      paddingHorizontal:15,
      
      
      borderColor:"lightgray",
      borderBottomWidth:1,
  
    },
    flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal:15,
      marginTop:7,
      color:"gray",
  
    },
    flex1: {
      textAlign: 'left',
      flexDirection: 'row',
      paddingTop:20,
      paddingHorizontal:15,
      paddingVertical:10,
      
      alignItems: 'left',
    },
    green: {
      borderRadius: 10,
      color: 'green',
      backgroundColor: 'green',
      width: 12,
      height: 12,
    },
    gray: {
      borderRadius: 10,
      color: 'gray',
      backgroundColor: 'gray',
      width: 3,
      height: 3,
      marginTop:5,
    },
    red:{
      color:"white",
      borderRadius:10,
      width: 14,
      height: 14,
      borderWidth:2,
      borderColor:"red",
      marginTop:5,
    },
    pathcon:{
      paddingLeft:14,
    },
    pathtxt2:{
      marginTop:15,
    },
    stoptxt:{
      marginLeft:15,
      color:"gray",
    },
    graytxt:{
      color:"gray",
    },
  });
  