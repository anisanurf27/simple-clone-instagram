import React, {useState,useEffect} from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Modal from 'react-native-modal';

const people = () => {
  return (
    <View style={{
      width:'100%', 
      height:'100%', 
      backgroundColor:"white"}}>
    <View style={{justifyContent:'center', alignItems:'center'}}>
    <TouchableOpacity
      style={{
            justifyContent:'center',
            padding : 15,
            marginTop:10,
            backgroundColor: "#CFD2CF",
            width: '90%',
            height: 30,
            borderRadius: 10,}}>
      <Text style= {{color: '#5F6F94', fontWeight:'bold'}}>Search</Text>
    </TouchableOpacity>
    </View>

    <View  style={{flexDirection:'Row'}}>
      <Image source={require('./assets/org2.png')}
        style={{
          width:45,
          height:45,
          marginTop:20,
          marginLeft: 1,
        }}>
      </Image>
      <View style={{flexDirection:'Column'}}>
       <Text style={{
        fontSize: 18,
        fontWeight:500,
        marginTop:20,
        marginLeft: 10,
        }}>
          ashmaakk
      </Text>
      <Text style={{
        fontSize: 12,
        fontWeight:200,
        marginTop:2,
        marginLeft: 10,
        }}>
          Ashmaa'Ulia Safitri
      </Text>
      </View>
      <TouchableOpacity
      style={{
            justifyContent:'center',
            alignItems:'center',
            //padding : 15,
            marginTop:30,
            marginLeft: 40,
            backgroundColor: "blue",
            width: '20%',
            height: 30,
            borderRadius: 10,}}>
      <Text style= {{color: 'white', fontWeight:'bold'}}>Add</Text>
      </TouchableOpacity>
      <Image source={require('./assets/titik3.png')}
        style={{
          width:30,
          height:30,
          marginTop:30,
          marginLeft: 10,
        }}>
      </Image>
    </View>

    <View  style={{flexDirection:'Row'}}>
      <Image source={require('./assets/org3.jpg')}
        style={{
          width:45,
          height:45,
          marginTop:20,
          marginLeft: 1,
        }}>
      </Image>
      <View style={{flexDirection:'Column'}}>
       <Text style={{
        fontSize: 18,
        fontWeight:500,
        marginTop:20,
        marginLeft: 10,
        }}>
          fia.cho
      </Text>
      <Text style={{
        fontSize: 12,
        fontWeight:200,
        marginTop:2,
        marginLeft: 10,
        }}>
          Lutfia Cholidina
      </Text>
      </View>
      <TouchableOpacity
      style={{
            justifyContent:'center',
            alignItems:'center',
            //padding : 15,
            marginTop:30,
            marginLeft: 55,
            backgroundColor: "blue",
            width: '20%',
            height: 30,
            borderRadius: 10,}}>
      <Text style= {{color: 'white', fontWeight:'bold'}}>Add</Text>
      </TouchableOpacity>
      <Image source={require('./assets/titik3.png')}
        style={{
          width:30,
          height:30,
          marginTop:30,
          marginLeft: 10,
        }}>
      </Image>
    </View>
    
    <View  style={{flexDirection:'Row'}}>
      <Image source={require('./assets/org6.png')}
        style={{
          width:45,
          height:45,
          marginTop:20,
          marginLeft: 1,
        }}>
      </Image>
      <View style={{flexDirection:'Column'}}>
       <Text style={{
        fontSize: 18,
        fontWeight:500,
        marginTop:20,
        marginLeft: 10,
        }}>
          hana.magh
      </Text>
      <Text style={{
        fontSize: 12,
        fontWeight:200,
        marginTop:2,
        marginLeft: 10,
        }}>
          Hanna Maghfiroh
      </Text>
      </View>
      <TouchableOpacity
      style={{
            justifyContent:'center',
            alignItems:'center',
            //padding : 15,
            marginTop:30,
            marginLeft: 43,
            backgroundColor: "blue",
            width: '20%',
            height: 30,
            borderRadius: 10,}}>
      <Text style= {{color: 'white', fontWeight:'bold'}}>Add</Text>
      </TouchableOpacity>
      <Image source={require('./assets/titik3.png')}
        style={{
          width:30,
          height:30,
          marginTop:30,
          marginLeft: 10,
        }}>
      </Image>
    </View>

    <View  style={{flexDirection:'Row'}}>
      <Image source={require('./assets/org7.jpg')}
        style={{
          width:45,
          height:45,
          marginTop:20,
          marginLeft: 1,
        }}>
      </Image>
      <View style={{flexDirection:'Column'}}>
       <Text style={{
        fontSize: 18,
        fontWeight:500,
        marginTop:20,
        marginLeft: 10,
        }}>
          yasminteaa
      </Text>
      <Text style={{
        fontSize: 12,
        fontWeight:200,
        marginTop:2,
        marginLeft: 10,
        }}>
          Yasmin Anindita
      </Text>
      </View>
      <TouchableOpacity
      style={{
            justifyContent:'center',
            alignItems:'center',
            //padding : 15,
            marginTop:30,
            marginLeft: 42,
            backgroundColor: "blue",
            width: '20%',
            height: 30,
            borderRadius: 10,}}>
      <Text style= {{color: 'white', fontWeight:'bold'}}>Add</Text>
      </TouchableOpacity>
      <Image source={require('./assets/titik3.png')}
        style={{
          width:30,
          height:30,
          marginTop:30,
          marginLeft: 10,
        }}>
      </Image>
    </View>

    <View  style={{flexDirection:'Row'}}>
      <Image source={require('./assets/org5.jpg')}
        style={{
          width:45,
          height:45,
          marginTop:20,
          marginLeft: 1,
        }}>
      </Image>
      <View style={{flexDirection:'Column'}}>
       <Text style={{
        fontSize: 18,
        fontWeight:500,
        marginTop:20,
        marginLeft: 10,
        }}>
          lucky.maul
      </Text>
      <Text style={{
        fontSize: 12,
        fontWeight:200,
        marginTop:2,
        marginLeft: 10,
        }}>
          Lucky Maulinda
      </Text>
      </View>
      <TouchableOpacity
      style={{
            justifyContent:'center',
            alignItems:'center',
            //padding : 15,
            marginTop:30,
            marginLeft: 49,
            backgroundColor: "blue",
            width: '20%',
            height: 30,
            borderRadius: 10,}}>
      <Text style= {{color: 'white', fontWeight:'bold'}}>Add</Text>
      </TouchableOpacity>
      <Image source={require('./assets/titik3.png')}
        style={{
          width:30,
          height:30,
          marginTop:30,
          marginLeft: 10,
        }}>
      </Image>
    </View>

    </View>
  )
}
export default people;