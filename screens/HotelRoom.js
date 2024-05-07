import { StyleSheet, Text, SafeAreaView, Pressable, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HotelRoom = () => {
    const route= useRoute();
    console.log(route.params)
    const navigation= useNavigation();
  return (
    
    <SafeAreaView>
      <Pressable 
      style={{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:35
        }}>
        <Pressable 
        onPress={()=>navigation.goBack()} 
        style={{
          backgroundColor:'#002062',
          width:40,
          height:40,
          borderRadius:20,
          justifyContent:'center',
          alignItems:"center",
          marginLeft:10}}>
        <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
        <Pressable style={{flexDirection:'row',alignItems:'center',marginRight:10}}>
        <Feather name="camera" size={28} color="black" />
        <Feather style={{marginHorizontal:10}} name="bookmark" size={24} color="black" />
        <MaterialCommunityIcons name="share-outline" size={28} color="black" />
        </Pressable>
      </Pressable>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <View style={{marginLeft:10,marginTop:10}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>
            {route.params.name}
            </Text>
          <Text style={{fontSize:16,color:"gray",fontWeight:"500"}}>
            {route.params.cuisines}
            </Text> 
          <Text style={{fontSize:16,color:"#608286",fontWeight:"500"}}>
            {route.params.smalladress}
            </Text>

          </View>
          <View>
             <View 
             style={{
              flexDirection:"row",
              alignItems:"center",
              backgroundColor:"green",
              padding:7,
              width:100,
              marginTop:8,
              justifyContent:"center",
              alignItems:"center",
              borderBottomLeftRadius:7,
              borderTopLeftRadius:7,
              }}>
                   <Text style={{ fontWeight:'bold',color:"white"}}>{route.params.aggregate_rating}</Text>
                   <MaterialIcons name="star-rate" size={19} color="white" />
             </View>
             <View style={{
              backgroundColor:"#F962F9",
              padding:7,
              width:100,
              justifyContent:"center",
              alignItems:"center",
              borderBottomLeftRadius:7,
              borderTopLeftRadius:7,
              marginTop:6,
              }}>
                   <Text style={{color:"white",fontWeight:"bold",}}>30</Text>
                   <Text style={{color:"white",fontWeight:"bold",}}>Photos</Text>
             </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HotelRoom

const styles = StyleSheet.create({})