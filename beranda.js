import React, {useState,useEffect} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Modal from 'react-native-modal';
import People from './people';

const Beranda = () => {
  const[modal,setModal]= useState(false);
  return (
    <View style={{
      width:'100%', 
      height:'100%', 
      backgroundColor:"white"}}>
    <View style={{flexDirection:'Row'}}>
    <TouchableOpacity onPress={() => setModal(false)}>
      <Image
        source={require('./assets/profile.png')}
          style={{
            width:50,
            height:50,
            marginLeft:10,
            marginTop:20,
            }}>
      </Image>
    </TouchableOpacity>
      <Text style={{
        fontSize: 18,
        fontWeight:500,
        marginTop:30,
        marginLeft: 10,
        }}>
          anis.anf
      </Text>
      <Image source={require('./assets/titik3.png')}
        style={{
          width:25,
          height:25,
          marginTop:30,
          marginLeft: 120,
        }}>
      </Image>
    </View>
    <View>
       <Image 
        source = {require('./assets/Foto_anisa.jpeg')}
        style={{
          width:301,
          height:301,
          marginTop:8,
        }}>
      </Image>
    </View>
    <View style={{flexDirection:'Row'}}>
       <Image source={require('./icons/like2.png')}
        style={{
          width:25,
          height:25,
          marginTop:10,
          marginLeft: 10,
        }}>
       </Image>
       <Image source={require('./icons/comment.png')}
        style={{
          width:25,
          height:25,
          marginTop:10,
          marginLeft: 10,
        }}>
       </Image>
       <Image source={require('./icons/send.png')}
        style={{
          width:25,
          height:25,
          marginTop:10,
          marginLeft: 10,
        }}>
       </Image>
       <Image source={require('./icons/save.png')}
        style={{
          width:32,
          height:32,
          marginTop:7,
          marginLeft: 150,
        }}>
       </Image>
    </View>
    <View>
    <TouchableOpacity onPress={() => setModal(true)}>
      <Text style={{
        paddingLeft:10,
        fontWeight:500,
        marginTop:4,}}>
          245 Likes
      </Text>
    </TouchableOpacity>
    <Modal isVisible={modal}>
        <People/>
    </Modal>
    <View style={{flexDirection:'Row'}}>
      <Text style={{
        paddingLeft:10,
        fontSize: 15,
        marginTop:2,
        fontWeight:'bold'}}>
          anis.anf
      </Text>
      <Text style={{
        paddingLeft:5,
        marginTop:4,}}>
          It's Mount Sumbing❤️
      </Text>
    </View>
    <View>
      <Text style={{
        paddingLeft:10,
        marginTop:4,
        color: 'grey'}}>
          1 hours ago
      </Text>
    </View>
    </View>
    </View>
  );
}

export default Beranda;