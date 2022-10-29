import React, {useState,useEffect} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Modal from 'react-native-modal';
import Beranda from './beranda';
import People from './people';


const App = () => {
  const[modal,setModal]= useState(false);
  return (
    <View style={{
      width:'100%', 
      height:'100%', 
      backgroundColor:"white"}}>
    <View style={{
      alignItems:'center',
      marginTop: 10,
      height:20,
    }}>
    <Text style={{
      fontWeight:700,
    }}>
    anis.anf
    </Text>
    </View>

    <View style={{
      flexDirection:'row',
      
    }}>
    <Image
    source={require('./assets/profile.png')}
    style={{
      width:100,
      height:100,
      marginLeft:5,
      marginTop:20
    }}>

    </Image>

    <View>
        <View style={{
      flexDirection:'row',
      paddingTop:40,
      justifyContent:'space-evenly',
      paddingLeft:5
      
    }}>
    <Text style={{
      paddingRight:30,
      fontWeight:700
      }}>
    3
    </Text>
    <Text style={{
      fontWeight:700,
      paddingLeft: 20
    }}>
    1013
    </Text>
    <Text style={{
      paddingLeft:40,
      fontWeight:700
      }}>
    689
    </Text>
    </View>

    <View style={{
      flexDirection:'row',
      paddingTop:5,
      justifyContent:'space-evenly',
      paddingLeft:20,

      
    }}>
    <Text style={{
      paddingRight:20,
      fontWeight:400,
      fontSize:12
      }}>
    Postingan
    </Text>
    <Text style={{
      fontWeight:400,
      fontSize:12,
      paddingLeft:0,
      paddingRight:5,
    }}>
    Pengikut
    </Text>
    <Text style={{
      paddingLeft:20,
      fontWeight:400,
      fontSize:12
      }}>
    Mengikuti
    </Text>
    </View>

    </View>
    </View>

    <View>
    <Text style={{
      paddingLeft:10,
      fontWeight:500,
      marginTop:8,
    }}>
    Anisa Nur F✨
    </Text>
    <Text style={{
      paddingLeft:10,
      fontWeight:400
    }}>
    Hai Maniiezz!!
    </Text>
    </View>

    <View style = {{flexDirection:'row', justifyContent:'space-evenly' }}>
    <TouchableOpacity
      style={{
            justifyContent:'center',
            alignItems:'center',
            padding : 15,
            marginTop:10,
            backgroundColor: "#CFD2CF",
            width: '50%',
            height: 30,
            borderRadius: 10,}}>
      <Text style= {{color: 'black', fontWeight:'bold'}}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
            justifyContent:'center',
            alignItems:'center',
            padding : 15,
            marginTop:10,
            backgroundColor: "#CFD2CF",
            width: '40%',
            height: 30,
            borderRadius: 10,}}>
      <Text style= {{color: 'black', fontWeight:'bold'}}>Kontak</Text>
    </TouchableOpacity>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginRight:10,
      
    }}>
    <Image 
    source = {require('./assets/gallery.png')}
    style={{
      width:25,
      height:25,
      marginTop:40,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('./assets/igtv.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:40,
      opacity:0.5,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    <Image 
    source = {require('./assets/timeline.png')}
    style={{
      width:23,
      height:23,
      marginLeft:20,
      marginTop:40,
      opacity:0.5,
      paddingLeft:10,
      paddingRight:10,
      
    }}>

    </Image>
    <Image 
    source = {require('./assets/follower.png')}
    style={{
      width:25,
      height:25,
      marginLeft:20,
      marginTop:40,
      opacity:0.5,
      paddingLeft:10,
      paddingRight:10
    }}>

    </Image>
    </View>

    <View style={{
      borderBottomWidth:0.2,
      marginTop:10,
      opacity:0.2
    }}>

    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
    }}>
    
    <TouchableOpacity onPress={() => setModal(true)}>
      <Image 
        source = {require('./assets/Foto_anisa.jpeg')}
        style={{
          width:108,
          height:108,
          marginTop:2,
          paddingLeft:10,
          paddingRight:10
        }}>
      </Image>
    </TouchableOpacity>
    <Modal isVisible={modal}>
        <Beranda/>
    </Modal>

    <Image 
    source = {require('./assets/Foto_anisa3.jpeg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    <Image 
    source = {require('./assets/Foto_anisa2.jpeg')}
    style={{
      width:108,
      height:108,
      marginLeft:2,
      marginTop:2,
      paddingLeft:10,
      paddingRight:10
    }}>
    </Image>
    </View>
    </View>
  );
}



export default App;