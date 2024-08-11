import {
  TextInput,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

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
    startdateinnum:"",
    enddateinnum:""
  });
  const [passData, setPassData] = React.useState({
    id: "",
    to: "Mihan",
    from: "",
    pickup: "",
    drop: "",
    status: "",
    busstop: "",
    
    startDate: "",
    endDate: "",
    
  });
  const handleClick = async (userData) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      // Alert('success')

    } catch (error) {
      // Error saving data
      console.log("error", error);
    }
  };
  const handlePass = async (passData) => {
    try {
      await AsyncStorage.setItem("passData", JSON.stringify(passData));
      // Alert('success')

    } catch (error) {
      // Error saving data
      console.log("error", error);
    }
  };
  const getPass = async () => {
    try {
      const value = await AsyncStorage.getItem("passData");
      if (value !== null) {
        // We have data!!
        console.log(value);
        setPassData(JSON.parse(value));
      }
    } catch (error) {
      console.log("error", error);
      // Error retrieving data
    }
  };
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

  const pushInRequests = async (userData) => {
    try {
      const requests = await AsyncStorage.getItem("requests");
      let updatedRequests = [userData]
      if(requests)
      {
        updatedRequests = [...JSON.parse(requests)]
      }
      await AsyncStorage.setItem("requests", JSON.stringify(updatedRequests));
      Alert('success')
    } catch (error) {
      // Error saving data
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar navigation={navigation} />
      <ScrollView>
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
             placeholder="09:00"
            onChangeText={(e) => setUserData({ ...userData, officeIn: e })}
          />

          <Text>Office Out</Text>
          <TextInput
            style={styles.input}
            value={userData.officeOut}
            placeholder="19:15"
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
            placeholder="Both--Pick up--Drop"
            onChangeText={(e) => setUserData({ ...userData, RoutType: e })}
          />

          <Text>Start Date</Text>
          <TextInput
            style={styles.input}
            value={userData.startDate}
            placeholder="1st Aug, 2024"
            onChangeText={(e) => setUserData({ ...userData, startDate: e })}
          />

          <Text>End Date</Text>
          <TextInput
            style={styles.input}
            value={userData.endDate}
            placeholder="31st Aug, 2024"
            onChangeText={(e) => setUserData({ ...userData, endDate: e })}
          />

          <Text>Route</Text>
          <TextInput
            style={styles.input}
            value={userData.route}
            onChangeText={(e) => setUserData({ ...userData, route: e })}
          />
          <Text>start Date in num </Text>
          <TextInput
            style={styles.input}
            value={userData.startdateinnum}
            placeholder="2024-08-21"
            onChangeText={(e) => setUserData({ ...userData, startdateinnum: e })}
          />
          <Text>End Date in num</Text>
          <TextInput
            style={styles.input}
            value={userData.enddateinnum}
            placeholder="2024-08-21"
            onChangeText={(e) => setUserData({ ...userData, enddateinnum: e })}
          />
          <TouchableOpacity style={styles.input} onPress={() => handleClick(userData)}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* ........................ */}
        {/* <Text>bus passData</Text> */}
        {/* <View style={styles.container}>
          <Text>id</Text>
          <TextInput
            style={styles.input}
            value={passData.id}
            onChangeText={(e) => setUserData({ ...passData, id: e })}
          />
          <Text>to</Text>
          <TextInput
            style={styles.input}
            value={passData.to}
            onChangeText={(e) => setUserData({ ...passData, to: e })}
          />
          <Text>From</Text>
          <TextInput
            style={styles.input}
            value={passData.from}
            onChangeText={(e) => setUserData({ ...passData, from: e })}
          />
          <Text>pickup</Text>
          <TextInput
            style={styles.input}
            value={passData.pickup}
            onChangeText={(e) => setUserData({ ...passData, pickup: e })}
          />

          <Text>drop</Text>
          <TextInput
            style={styles.input}
            value={passData.drop}
            onChangeText={(e) => setUserData({ ...passData, drop: e })}
          />

          

          <Text>Bus stop</Text>
          <TextInput
            style={styles.input}
            value={passData.busstop}
            onChangeText={(e) => setUserData({ ...passData, busstop: e })}
          />

          <Text>status</Text>
          <TextInput
            style={styles.input}
            value={passData.status}
            onChangeText={(e) => setUserData({ ...passData, status: e })}
          />

          <Text>Start Date</Text>
          <TextInput
            style={styles.input}
            value={passData.startDate}
            onChangeText={(e) => setUserData({ ...passData, startDate: e })}
          />

          <Text>End Date</Text>
          <TextInput
            style={styles.input}
            value={passData.endDate}
            onChangeText={(e) => setUserData({ ...passData, endDate: e })}
          />

          
          <TouchableOpacity style={styles.input} onPress={() => handlePass(passData)}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
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
