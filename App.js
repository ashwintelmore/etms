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
import ApplyBusPass from './components/ApplyBusPass';
import Navbar from './components/Navbar';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import SyncStorage from 'sync-storage';
import Edit from './components/Edit';
import BusRequest from './components/BusRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';




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
    
      <Text style={styles.drawerHeader}>Hi, {userData?.name || 'Ashwin Telmore'}</Text>
      <DrawerItemList {...props} />
    </>
  )
}





export default function App({navigation}) {
  return (
    <>
      <View style={styles.container}>
      <StatusBar
    backgroundColor="#683cc7"
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
                drawerIcon:()=>{ return <Ionicons name="home" size={20} color="#888888" />}
               }}
            />
            <Stack.Screen
              name="ApplyBusPass"
              component={Etms}
              options={{ headerShown: false, title: 'Apply Bus Pass',
              
drawerIcon:()=>{ return <Ionicons name="bus" size={20} color="#888888" />}


               }}
            />
            <Stack.Screen
              name="Buspass Request Status"
              component={BusRequest}
              options={{ headerShown: false,
              drawerIcon:()=>{ return <Ionicons name="pencil-square-o" size={20} color="#888888" />}

               }}
              
            />
            <Stack.Screen
              name="BackToHomePage"
              component={Home}
              options={{ headerShown: false, title: 'Back To Home Page',
              
              drawerIcon:()=>{ return <Ionicons name="clock-o" size={20} color="#888888" />}

               }}
            />
            <Stack.Screen
              name="Settings"
              component={Etms}
              options={{ headerShown: false ,
              drawerIcon:()=>{ return <Ionicons name="cog" size={20} color="#888888" />}

              }}
            />
            <Stack.Screen
              name="Logout"
              component={Etms}
              options={{ headerShown: false ,
              drawerIcon:()=>{ return <Ionicons name="arrow-right" size={20} color="#888888" />}

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
    backgroundColor:'#683cc7',
    fontSize:15,
    padding:15,
    paddingTop:30,
    color:'white'
  }
});
