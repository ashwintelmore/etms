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
import React, { useEffect } from 'react';
import SyncStorage from 'sync-storage';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from './Navbar';
SyncStorage.set('test' , {name:'test this'})
export default function Etms({navigation}) {
  const [show, setShow] = React.useState(true);
  const [editshow, setEditShow] = React.useState(true);
  const user = SyncStorage.get('user')
  console.log('user', user)

  useEffect(() => {
    console.log('syncget home', SyncStorage.get('test').name)
   }, [])
  return (
    <>
      
      <SafeAreaView style={styles.container}>
        <Modal transparent={true} visible={show} animationType="fade">
          <View style={styles.center}>
            <View style={styles.modalcontainer}>
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
                    uri: 'https://www.dlf.pt/dfpng/middlepng/474-4748331_phone-in-hand-png-transparent-png.png',
                  }}
                />
              </View>
              <View style={styles.modalbtncon}>
                <TouchableOpacity
                  style={styles.modalbtn}
                  onPress={() => setShow(!show)}>
                  <Text style={styles.modalbtntxt}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Navbar navigation={navigation}/>
        <ScrollView showsHorizontalScrollIndicator={false}>
       <LinearGradient
       style={styles.mainbg}
       start={[0, 1]}
            end={[1, 0]}
        colors={['#1da1f2', '#683cc7']}
        >
        
        
            <Text style={styles.txt}>Shiv Elite</Text>
            <Image 
                style={{
                  marginVertical:10
                }}
                source={require('./../assets/bidirection.png')}
            />
            <Text style={styles.txt}>Mihan</Text>

            <View style={styles.off}>
              <Text style={styles.txt}>Office In - 09:00</Text>
              <Text style={styles.txt3}>Office Out - 19:15</Text>
            </View>
      </LinearGradient>

          <View style={styles.mainbg2}>
            <View style={styles.space}>
              <View style={styles.data}>
                <Text style={styles.txt5}>Name</Text>
                <Text style={styles.txt5}>Employee ID</Text>
              </View>

              <View style={styles.data}>
                <Text style={styles.txt1}>{user?.name || 'ASHWIN TELMORE' }</Text>
                <Text style={styles.txt1}>{user?.empId || '2590353'}</Text>
              </View>
            </View>

            <View style={styles.space}>
              <View style={styles.data}>
                <Text style={styles.txt5}>Bus Stop Name</Text>
                <Text style={styles.txt5}>Route Type</Text>
              </View>

              <View style={styles.data}>
                <Text style={styles.txt1}>Shiv Elite</Text>
                <Text style={styles.txt1}>Both</Text>
              </View>
            </View>

            <View style={styles.space}>
              <View style={styles.data}>
                <Text style={styles.txt5}>Start Date</Text>
                <Text style={styles.txt5}>End Date</Text>
              </View>

              <View style={styles.data}>
                <Text style={styles.txt1}>2nd Apr, 2024</Text>
                  <Text style={styles.txt1}>30th Apr, 2024</Text>
              </View>
            </View>

            <View style={styles.txt6}>
              <Text style={styles.txt7}>
                Route : Shive Elite To Mihan And Return Via-ShivBrighton
                Route 9
              </Text>
            </View>
          </View>
          
        </ScrollView>
        <View style={styles.mainbg3}>
            <Image
              style={styles.bottomimg}
              source={{
                uri: 'https://static.brandirectory.com/logos/TCSA002_tcs_newlogo_final_rgb_jpg.jpg',
              }}
            />
          </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  modalback: {
    backgroundColor: 'black',
  },
  modalbtncon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  modalbtn: {
    backgroundColor: '#0096FF',
    paddingVertical: 5,
    paddingHorizontal: 50,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,
  },
  modalimg: {
    aspectRatio: 1,
    marginVertical: 10,
    backgroundColor: 'white',
    height: '60%',
  },
  modalbtntxt: {
    textAlign: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    color: 'white',
    width: 70,
    height: 36,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
  modalcontainer: {
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    height: 500,
    width: '93%',
    backgroundColor: 'white',
  },
  modalcontainer2: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 10,
  },
  modalcontainer3: {
    marginVertical: 20,
  },
  modaltxt: {
    color: 'white',
    backgroundColor: 'green',
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 11,
  },
  modaltxt2: {
    marginHorizontal: 20,
    fontWeight: '600',
    fontSize: 18,
  },
  modaltxt3: {
    marginHorizontal: 20,

    color: '#0096FF',
    fontStyle: 'italic',
  },
  space: {
    marginTop: 15,
  },
  txt6: {
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 10,
  },
  txt7: {
    marginTop: 15,
    marginHorizontal: 8,
    color: 'gray',
    justifyContent: 'center',
    fontSize: 14,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 20,
  },
  txt5: {
    color: 'grey',
  },
  off: {
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  mainbg: {
    borderRadius: 10,
    margin: 20,
    backgroundColor: '#0447c2',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    // backgroundGradient: "vertical",
    backgroundGradientTop: '#333333',
    backgroundGradientBottom: '#666666',
  },
  mainbg2: {
    borderRadius: 10,
    marginHorizontal: 25,
    borderColor: 'black',

    height: 330,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,

    backgroundColor: 'white',
  },

  txt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  txt3: {
    color: 'white',
    paddingLeft: 40,
    fontSize: 15,
    fontWeight: '700',
  },
  txt1: {
    fontWeight: '100',
  },

  mainbg3: {
    position: 'absolute',
    bottom: 0,
    left: '25%',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  bottomimg: {
    aspectRatio: 5,
    height: '40%',
    resizeMode: 'contain',
  },
});
