import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SyncStorage from 'sync-storage';
const Drawer = createDrawerNavigator();

import Navbar from "./Navbar";
export default function Edit({ navigation }) {
  const [show, setShow] = React.useState(true);
  const [userData, setUserData] = React.useState({
    name: "",
    to: "Mihan",
    from: "",
    officeIn: "",
    officeOut: "",
    empId: "",
    busstop: "",
    RoutType: "",
    startDate: "",
    endDate: "",
    route: "",
  });
  const handleClick = () => {
      SyncStorage.set('user', userData)
      console.log('syncget', SyncStorage.get('user'))
  };

  useEffect(() => {
   console.log('syncget', SyncStorage.get('user'))
  }, [])

  return (
    <>
      <Navbar navigation={navigation} />
      <View style={styles.container}>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          value={userData.name}
          onChangeText={(e) => setUserData({ ...userData, name: e })}
        />
        <Text>to</Text>
        <TextInput
          style={styles.input}
          value={userData.to}
          onChangeText={(e) => setUserData({ ...userData, to: e })}
        />
        <Text>From</Text>
        <TextInput
          style={styles.input}
          value={userData.from}
          onChangeText={(e) => setUserData({ ...userData, from: e })}
        />
        <Text>Office In</Text>
        <TextInput
          style={styles.input}
          value={userData.officeIn}
          onChangeText={(e) => setUserData({ ...userData, officeIn: e })}
        />

        <Text>Office Out</Text>
        <TextInput
          style={styles.input}
          value={userData.officeOut}
          onChangeText={(e) => setUserData({ ...userData, officeOut: e })}
        />

        <Text>Emp Id</Text>
        <TextInput
          style={styles.input}
          value={userData.empId}
          onChangeText={(e) => setUserData({ ...userData, empId: e })}
        />

        <Text>Bus stop</Text>
        <TextInput
          style={styles.input}
          value={userData.busstop}
          onChangeText={(e) => setUserData({ ...userData, busstop: e })}
        />

        <Text>Route Type</Text>
        <TextInput
          style={styles.input}
          value={userData.RoutType}
          onChangeText={(e) => setUserData({ ...userData, RoutType: e })}
        />

        <Text>Start Date</Text>
        <TextInput
          style={styles.input}
          value={userData.startDate}
          onChangeText={(e) => setUserData({ ...userData, startDate: e })}
        />

        <Text>End Date</Text>
        <TextInput
          style={styles.input}
          value={userData.endDate}
          onChangeText={(e) => setUserData({ ...userData, endDate: e })}
        />

        <Text>Route</Text>
        <TextInput
          style={styles.input}
          value={userData.route}
          onChangeText={(e) => setUserData({ ...userData, route: e })}
        />
        <TouchableOpacity style={styles.input} onPress={() => handleClick()}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
});
