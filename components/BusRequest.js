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
  import Ionicons from 'react-native-vector-icons/Octicons';
  import { createDrawerNavigator } from '@react-navigation/drawer';
  import { NavigationContainer } from '@react-navigation/native';
  import { useFocusEffect } from "@react-navigation/native";
  const Drawer = createDrawerNavigator();
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import Navbar from './Navbar';
  export default function BusRequest({ navigation }) {
    const [show, setShow] = React.useState(false);
    const [user, setUser] = React.useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        // We have data!!
        console.log(value);
        setUser(JSON.parse(value));
      }
    } catch (error) {
      console.log("error", error);
      // Error retrieving data
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
      return () => {
        // Do something that should run on blur
      };
    }, [])
  );
    return (
      <>
        <Navbar navigation={navigation} />
        <Modal transparent={true} visible={show} animationType="fade">
          <View style={styles.center}>
            <View style={styles.passalreadycon}>
              <View style={styles.passalreadyinnercon}>
                <Image style={styles.passalreadyimg} source={require("../assets/building.png")}/>
              </View>
              <Text style={styles.passalreadytxt} >You have 0 attempts to edit shift time.</Text>
              <Text style={styles.passalreadytxt2} >Do you want to proceed?</Text>
              <View style={styles.flex3}>
              <TouchableOpacity onPress={()=>setShow(false)} style={styles.btn}><Text style={styles.oktxt} >NO</Text></TouchableOpacity>
              <TouchableOpacity onPress={()=>setShow(false)} style={styles.btn}><Text style={styles.oktxt} >YES</Text></TouchableOpacity>
              </View>
              
            </View>
            {/* <View style={styles.modalcontainer}>

              
              <View style={styles.modalcontainer2}>
                <Text style={styles.modaltxt}>New Feature!</Text>
              </View>
              <View style={styles.modalcontainer3}>
                <Text style={styles.modaltxt2}>
                  Renew your Bus Pass in a single click
                </Text>
                <Text style={styles.modaltxt3}>
                  Effective from 1st Jan 2024, 6:45 am onwards
                </Text>
                <Image
                  style={styles.modalimg}
                  source={{
                    uri: "https://www.dlf.pt/dfpng/middlepng/474-4748331_phone-in-hand-png-transparent-png.png",
                  }}
                />
              </View>
              <View style={styles.modalbtncon}>
                <TouchableOpacity
                  style={styles.modalbtn}
                  onPress={() => setShow(!show)}
                >
                  <Text style={styles.modalbtntxt}>OK</Text>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </Modal>
        <ScrollView>
        <View style={styles.maincon}>
          <View style={styles.con}>
            <View style={styles.reqcon}>
              <Text style={styles.txt}>Request Id: {Math.floor((Math.random()*10000000)+1)}</Text>
              <Text style={styles.txtgreen} >Confirmed       <Ionicons style={styles.icon} name="pencil"  size={20} color="blue"  onPress={()=>setShow(true)}/></Text>
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
                <Text style={styles.pathtxt1}>{user?.from ||'Ord. Factory Gate-2'}</Text>
                <Text style={styles.pathtxt2}>{user?.to||'Mihan'}</Text>
              </View>
            </View>
  
            <Text style={styles.stoptxt}>Bus Stop Name: {user?.busstop||'Subhash Chowk'}</Text>
            <View style={styles.flex}>
              {user?.officeIn?
              <Text style={styles.graytxt}>Pick up : {user?.officeIn||' 09:00'}</Text>:null
              }
              {
                user?.officeOut?<Text style={styles.graytxt}>Drop : {user?.officeOut||' 19:15'}</Text>:null
              }
              
              
            </View>
            <View style={styles.flex}>
              <Text style={styles.graytxt}>Start Date : {user?.startdateinnum||'2024-04-1'}</Text>
              <Text style={styles.graytxt}>End Date : {user?.enddateinnum||'2024-04-30'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.maincon}>
          <View style={styles.con}>
            <View style={styles.reqcon}>
              <Text style={styles.txt}>Request Id: {Math.floor((Math.random()*10000000)+1)}</Text>
              <Text style={styles.txtyellow} >Edited       </Text>
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
                <Text style={styles.pathtxt1}>{user?.from ||'Ord. Factory Gate-2'}</Text>
                <Text style={styles.pathtxt2}>{user?.to||'Mihan'}</Text>
              </View>
            </View>
  
            <Text style={styles.stoptxt}>Bus Stop Name: {user?.busstop||'Subhash Chowk'}</Text>
            <View style={styles.flex}>
              {user?.officeIn?
              <Text style={styles.graytxt}>Pick up : {user?.officeIn||' 09:00'}</Text>:null
              }
              {
                user?.officeOut?<Text style={styles.graytxt}>Drop : {user?.officeOut||' 19:15'}</Text>:null
              }
              
              
            </View>
            <View style={styles.flex}>
              <Text style={styles.graytxt}>Start Date : {user?.startdateinnum||'2024-04-1'}</Text>
              <Text style={styles.graytxt}>End Date : {user?.enddateinnum||'2024-04-30'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.maincon}>
          <View style={styles.con}>
            <View style={styles.reqcon}>
              <Text style={styles.txt}>Request Id: {Math.floor((Math.random()*10000000)+1)}</Text>
              <Text style={{ color:"red",
      fontWeight:'700',}} >Cancelled      </Text>
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
                <Text style={styles.pathtxt1}>{user?.from ||'Ord. Factory Gate-2'}</Text>
                <Text style={styles.pathtxt2}>{user?.to||'Mihan'}</Text>
              </View>
            </View>
  
            <Text style={styles.stoptxt}>Bus Stop Name: {user?.busstop||'Subhash Chowk'}</Text>
            <View style={styles.flex}>
            {user?.officeIn?
              <Text style={styles.graytxt}>Pick up : {user?.officeIn||' 09:00'}</Text>:null
              }
              {
                user?.officeOut?<Text style={styles.graytxt}>Drop : {user?.officeOut||' 19:15'}</Text>:null
              }
            </View>
            <View style={styles.flex}>
            <Text style={styles.graytxt}>Start Date : {user?.startdateinnum||'2024-04-1'}</Text>
            <Text style={styles.graytxt}>End Date : {user?.enddateinnum||'2024-04-30'}</Text>
            </View>
          </View>
        </View>
       

        <View style={styles.maincon}>
          <View style={styles.con}>
            <View style={styles.reqcon}>
              <Text style={styles.txt}>Request Id: {Math.floor((Math.random()*10000000)+1)}</Text>
              <Text style={styles.txtyellow} >Expired      </Text>
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
                <Text style={styles.pathtxt1}>{user?.from ||'Ord. Factory Gate-2'}</Text>
                <Text style={styles.pathtxt2}>{user?.to||'Mihan'}</Text>
              </View>
            </View>
  
            <Text style={styles.stoptxt}>Bus Stop Name: {user?.busstop||'Subhash Chowk'}</Text>
            <View style={styles.flex}>
            {user?.officeIn?
              <Text style={styles.graytxt}>Pick up : {user?.officeIn||' 09:00'}</Text>:null
              }
              {
                user?.officeOut?<Text style={styles.graytxt}>Drop : {user?.officeOut||' 19:15'}</Text>:null
              }
            </View>
            <View style={styles.flex}>
              <Text style={styles.graytxt}>Start Date : {`${user?.startdateinnum.split("-")[0]}-${(user?.startdateinnum.split("-")[1]-1)}-${user?.startdateinnum.split("-")[2]}`||'2024-04-1'}</Text>
              <Text style={styles.graytxt}>End Date : {`${user?.enddateinnum.split("-")[0]}-${(user?.enddateinnum.split("-")[1]-1)}-${user?.enddateinnum.split("-")[2]}`||'2024-04-1'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.maincon}>
          <View style={styles.con}>
            <View style={styles.reqcon}>
              <Text style={styles.txt}>Request Id: {Math.floor((Math.random()*10000000)+1)}</Text>
              <Text style={styles.txtyellow} >Expired      </Text>
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
                <Text style={styles.pathtxt1}>{user?.from ||'Ord. Factory Gate-2'}</Text>
                <Text style={styles.pathtxt2}>{user?.to||'Mihan'}</Text>
              </View>
            </View>
  
            <Text style={styles.stoptxt}>Bus Stop Name: {user?.busstop||'Subhash Chowk'}</Text>
            <View style={styles.flex}>
            {user?.officeIn?
              <Text style={styles.graytxt}>Pick up : {user?.officeIn||' 09:00'}</Text>:null
              }
              {
                user?.officeOut?<Text style={styles.graytxt}>Drop : {user?.officeOut||' 19:15'}</Text>:null
              }
            </View>
            <View style={styles.flex}>
            <Text style={styles.graytxt}>Start Date : {`${user?.startdateinnum.split("-")[0]}-${(user?.startdateinnum.split("-")[1]-2)}-${user?.startdateinnum.split("-")[2]}`||'2024-04-1'}</Text>
            <Text style={styles.graytxt}>End Date : {`${user?.enddateinnum.split("-")[0]}-${(user?.enddateinnum.split("-")[1]-2)}-${user?.enddateinnum.split("-")[2]}`||'2024-04-1'}</Text>
            </View>
          </View>
        </View>
        <View style={styles.maincon}>
          <View style={styles.con}>
            <View style={styles.reqcon}>
              <Text style={styles.txt}>Request Id: {Math.floor((Math.random()*10000000)+1)}</Text>
              <Text style={styles.txtyellow} >Expired      </Text>
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
                <Text style={styles.pathtxt1}>{user?.from ||'Ord. Factory Gate-2'}</Text>
                <Text style={styles.pathtxt2}>{user?.to||'Mihan'}</Text>
              </View>
            </View>
  
            <Text style={styles.stoptxt}>Bus Stop Name: {user?.busstop||'Subhash Chowk'}</Text>
            <View style={styles.flex}>
            {user?.officeIn?
              <Text style={styles.graytxt}>Pick up : {user?.officeIn||' 09:00'}</Text>:null
              }
              {
                user?.officeOut?<Text style={styles.graytxt}>Drop : {user?.officeOut||' 19:15'}</Text>:null
              }
            </View>
            <View style={styles.flex}>
            <Text style={styles.graytxt}>Start Date : {`${user?.startdateinnum.split("-")[0]}-${(user?.startdateinnum.split("-")[1]-3)}-${user?.startdateinnum.split("-")[2]}`||'2024-04-1'}</Text>
            <Text style={styles.graytxt}>End Date : {`${user?.enddateinnum.split("-")[0]}-${(user?.enddateinnum.split("-")[1]-3)}-${user?.enddateinnum.split("-")[2]}`||'2024-04-1'}</Text>
            </View>
          </View>
        </View>
        </ScrollView>
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
    txtyellow:{
      color:"#FFB61E",
      fontWeight:'700',
      
    },
    flex3:{
      flexDirection:'row',
      width:'100%',
      justifyContent:'space-between',
      alignItems:'center'
    },
    btn:{
      paddingVertical:8,
      backgroundColor:'lightgray',
      width:'46%',
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:5,
      marginVertical:5,
      borderRadius:3,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 2,
    },
    passalreadyinnercon:{
      backgroundColor:'#7CBB11',
      width:'100%',
      justifyContent:'center',
      alignItems:"center",
      borderTopLeftRadius:3,
      borderTopRightRadius:3,
    },
    passalreadyimg:{
      aspectRatio:4,
      marginTop:5,
      marginBottom:5,
      width:20,
      height:30,
      
    },
    passalreadytxt:{
      marginTop:30,
      marginBottom:0,
      color:'black',
      fontSize:15,
    },
    passalreadytxt2:{
      marginTop:0,
      marginBottom:10,
      color:'black',
      fontSize:15,
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    oktxt:{
      color:'black',
      marginBottom:0,
      fontSize:15,
      textAlign:'center'

    },
    passalreadycon:{
    
      borderRadius: 3,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
      height: 'auto',
      width: "87%",
      backgroundColor: "white",
      justifyContent:'center',
      alignItems:'center'
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
      marginBottom: 10,
  
      backgroundColor: 'white',
    },
    reqcon:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical:7,
      paddingHorizontal:10,
      
      
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
  