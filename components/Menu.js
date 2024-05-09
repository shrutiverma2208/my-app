import { StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import React from 'react';
import {FontAwesome} from "@expo/vector-icons"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Menu = (props) => {
    const menu = props.menu;
    const bestSeller =true;
    console.log(menu.image)
  return (
    <View style={{marginBottom:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <View >
        <View style={{marginLeft:20}}>
        <Text>{menu.name}</Text>
      <Text>{menu.price}</Text>
    </View>

<View 
style={{ 
  width:70, 
  marginLeft:20, 
  marginTop:10,
  flexDirection:"row",
  alignItems:"center"
  }}>
<Text
  style={{
    
    backgroundColor: "#FFFFF0",
    padding: 3,
    borderRadius: 4,
  }}
>
  {[0, 0, 0, 0, 0].map((en, i) => (
    <FontAwesome
      key={`${menu.id}-${i}`}
      style={{ margin: 2, marginHorizontal: 3 }}
      name={i < Math.floor(menu.star) ? "star" : "star-o"}
      size={13}
      color="#FFD700"
    />
  ))}
  </Text>
  <View style={{backgroundColor:"#ffcccb",marginLeft:10,width:90,padding:2}}>

  <Text style={{marginLeft:5, textAlign:"center",fontSize:14,color:"white"}}>
    {(bestSeller && menu.bestSeller || menu.mustTry)}
  </Text>

  </View>
  </View>
  <View style={{marginLeft:20, flexDirection:"row", alignItems:"center",marginTop:4}}>
  <AntDesign 
  style={{
    borderColor:"gray",
    borderWidth:1,
    borderRadius:16,
    padding:5}} 
    name="hearto" 
    size={20} 
    color="#ff726f" />
  <MaterialCommunityIcons 
  style={{
    borderColor:"gray",
    borderWidth:1,
    borderRadius:16,
    padding:5,
    marginLeft:6}} 
    name="share-outline" 
    size={20} 
    color="#ff726f" 
    />
  </View>
 
 </View>
 <View style={{marginRight:15}}>
<Image 
style={{width:110,height:110,borderRadius:8,marginBottom:15,marginRight:15}}
 source={{uri:menu.image}}/>
</View>

  
 </View>
  )
}

export default Menu

const styles = StyleSheet.create({})