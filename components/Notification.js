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
const Drawer = createDrawerNavigator();

import Navbar from './Navbar';
export default function Notification({navigation}) {
  const [show, setShow] = React.useState(true);
  return (
    <>
       <Navbar navigation={navigation}/>
      <Text>Notification</Text>
    </>
  );
}
const styles = StyleSheet.create({
  
});
