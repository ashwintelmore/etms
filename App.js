import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  
} from 'react-native';
import { createDrawerNavigator , DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

import Home from './components/Home';
import Etms from './components/Etms';
import Notification from './components/Notification';
import Setting from './components/Setting';
import Navbar from './components/Navbar';
import IconF from 'react-native-vector-icons/Foundation';
import Iconi from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SyncStorage from 'sync-storage';
import Edit from './components/Edit';
import BusRequest from './components/BusRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';




const CustomeDrawer = props=>{
  
  const [userData, setUserData] = useState()
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        // We have data!!
        console.log(value);
        setUserData(JSON.parse(value));
      }
    } catch (error) {
      console.log("error", error);
      // Error retrieving data
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    
      <Text style={styles.drawerHeader}>Hi, {userData?.name.toUpperCase() || 'Ashwin Telmore'}</Text>
      <DrawerItemList {...props} />
    </>
  )
}





export default function App({navigation}) {
  
  const [settingbar,setSettingbar] = React.useState('')
  
  return (
    <>
      <View style={styles.container}>
      <StatusBar
    backgroundColor="#440095"
    barStyle="light-content"
  />
        <NavigationContainer>
       
          <Drawer.Navigator
              drawerContent={props=>  <CustomeDrawer {...props} />}
              screenOptions={{
                drawerStyle: {
                },
              headerTintColor: { color: 'red' },
              headerStyle: {
                height: 80,
                backgroundColor: 'green',
              },

              headerTitleStyle: {
                color: 'red',
              },
              drawerActiveBackgroundColor: 'white',
              drawerActiveTintColor: 'black',
            }}
            initialRouteName="BackToHomePage"
            tabBarOption={{ headerShown: false }}>
             
            <Drawer.Screen
              name="Home"
              component={Etms}
              options={{ headerShown: false,
                drawerIcon:()=>{ return <Icon name="home" size={25} color="#727272" style={{width:30,textAlign:'center'}}/>}
               }}
            />
            <Stack.Screen
              name="ApplyBusPass"
              component={Etms}
              options={{ headerShown: false, title: 'Apply Bus Pass',
              
drawerIcon:()=>{ return <Iconi name="bus" size={24} color="#727272"  style={{width:30,textAlign:'center'}} />}


               }}
            />
            <Stack.Screen
              name="Buspass Request Status"
              component={BusRequest}
              options={{ headerShown: false,
              drawerIcon:()=>{ return <IconF name="clipboard-pencil" size={25} color="#727272"  style={{width:30,textAlign:'center'}}/>}

               }}
              
            />
            <Stack.Screen
              name="BackToHomePage"
              component={Home}
              options={{ headerShown: false, title: 'Back To Home Page',
              
              drawerIcon:()=>{ return <Icon name="history" size={25} color="#727272"  style={{width:30,textAlign:'center'}}/>}

               }}
            />
            <Stack.Screen
              name="Settings"
              component={Setting}
              options={{ headerShown: false ,
              drawerIcon:()=>{ return <Iconi name="settings-sharp" size={21} color="#727272"  style={{width:30,textAlign:'center'}}/>}

              }}
            />
            <Stack.Screen
              name="Logout"
              component={Etms}
              options={{ headerShown: false ,
              drawerIcon:()=>{ return <Icon name="arrow-right" size={25} color="#727272"  style={{width:30,textAlign:'center'}}/>}

               }}
            />

            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{ headerShown: false, title: ' ' }}
            />
            <Stack.Screen
              name="Edit"
              component={Edit}
              options={{ headerShown: false, title: ' ' }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#683cc7',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  drawerHeader:{
    backgroundColor:'#350075',
    fontSize:15,
    padding:15,
    paddingTop:40,
    color:'white'
  }
});
