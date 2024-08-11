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
    StatusBar,
    Switch,
  } from 'react-native';
  import React from 'react';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
  const Drawer = createDrawerNavigator();
  import { useNavigation } from "@react-navigation/native";
  import Navbar from './Navbar';
  import { useRoute } from "@react-navigation/native";
  export default function Setting() {
    const [isEnabled, setIsEnabled] = React.useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [show, setShow] = React.useState(true);
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <>
      
      
         <View style={styles.navbg}>
          <View style={styles.flex}>
          <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Ionicons style={styles.navbaricon} name="arrow-left" size={25} color="white" />
          
            </TouchableOpacity>
            <Text style={styles.txt}>TCS Enterprise App Settings</Text>
  
          </View>
          
            {/* <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image 
            style={styles.img} 
            source={require("../assets/bell6.png")}/>
            </TouchableOpacity> */}
          </View>
          <View style={styles.back}>
          <Image style={styles.imglogo}  source={require("../assets/logoulti.png")}></Image>
          <Text style={styles.txt2}>Where ALL the action is!</Text>
          <Text style={styles.txt3}>Ultimatix Secondary Authentication allows secure and quick login to enterprise apps. Enable Secondary Authentication to proceed.</Text>
        <View style={styles.flex2}>
            <Text style={styles.txt4}>Secondary Authentication</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#daf4ae' }}
              thumbColor={isEnabled ? "#7CBB11" : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>
        <View style={styles.flex2}>
            <Text style={styles.txt4}>mFrame Version</Text>
            <Text style={styles.txt4}>2.0.4</Text>
            
        </View>
        <View style={styles.bottom}>
            <Text style={styles.txt5}>Disclaimer</Text>
            <Text style={styles.txt6}>TCS is just facilitating local authentication (PIN/Pattern/Biometric) as a secondary authentication to access TCS enterprise apps for user convenience. Secondary Authentication is by default enabled in the app. The usage of the authentication (PIN/Pattern/Biometric) and teh risks associated with it are a sole responsibility of the user only.</Text>
            
        </View>
          </View>
          
      </>
    );
  }
  const styles = StyleSheet.create({
    bottom:{
        position:'absolute',
        bottom:0,
        paddingHorizontal:17,
        paddingBottom:15,
    },
    txt5:{
        
        color:'gray',
        marginBottom:7,
    },
    txt6:{
        fontSize:12,
        color:'gray',
    },
    txt2:{
      textAlign:'center',
      marginTop:'0%',
      fontStyle:'italic',
      color:'gray',
      fontSize:16,
      transform:[{translateY:-20}]
    },
    txt3:{
        marginTop:20,
        marginHorizontal:15,
        color:'gray',
    },
    navbg: {
      backgroundColor: '#00c8ff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
    },
    txt: {
      textAlign:'left',
      color: 'white',
      fontSize:20,
      fontWeight:'500'
    },
    imglogo:{
        aspectRatio:2.5,
marginTop:30,
        width:60,
        height:70,
    },
    back:{
        alignItems:'center',
        flex:1,
        backgroundColor:'white',
    },
    flex:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection:'row',
      gap:30,
    },
    txt4:{
color:'gray',
    },
    flex2:{
        marginTop:15,
        paddingHorizontal:17,
        width:'100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        
      },
    img:{
      aspectRatio:1,
      width:20,
      height:26,
      
    },
    
    navbaricon: {
     marginLeft:15,
     width:20,
    
      
       
    },
  });
  