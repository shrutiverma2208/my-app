import { StyleSheet, Text, SafeAreaView, Pressable, View, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import menuData from "../data/menuData";
import Menu from '../components/Menu';
import { CartItems } from '../Context';
import ViewCart from '../components/ViewCart';

const HotelRoom = () => {
  const data= menuData;
    const route= useRoute();
    const navigation= useNavigation();
    const {cart,setCart}= useContext(CartItems);
    console.log(route.params,"params");
    console.log(cart,"Cart items added")
    console.log(cart.length,"no. of items in the cart")
  return (
    
    <>
    <ScrollView style={{marginTop:10,backgroundColor:"white"}}>
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
          <Text style={{fontSize:16,color:"gray",fontWeight:"500",marginVertical:5,}}>
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
              backgroundColor:"#F9629F",
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
      <View style={{marginLeft:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:15}}>
          <View 
          style={{flexDirection:"row",alignItems:"center"}}>
          <FontAwesome 
          style={{backgroundColor:"#D8D8D8", padding:4}}
          name="motorcycle" size={24} color="gray" />
            <View style={{marginLeft:8}}>
               <Text>Mode</Text>
               
               <Text>Delivery</Text>
            </View>
          </View>

          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Ionicons 
          style={{backgroundColor:"#D8D8D8", padding:4}}
          name="time-outline" size={24} color="gray" />            
          <View style={{marginLeft:8}}>
               <Text>TIME</Text>
               
               <Text>30mins or free</Text>
            </View>
          </View>

          <View style={{flexDirection:"row",alignItems:"center",marginRight:15}}>
          <MaterialCommunityIcons 
          style={{backgroundColor:"#D8D8D8", padding:4}}
          name="brightness-percent" size={24} color="gray" />
            <View style={{marginLeft:8}}>
               <Text>OFFERS</Text>
               
               <Text>View all</Text>
            </View>
          </View>
        </View>
        <View style={{marginLeft:10,
          backgroundColor:"#C8C8C8",
          marginTop:15,
          marginRight:10,
          alignItems:"center",
          flexDirection:"row",
          padding:7,
          borderRadius:7,
          }}>
        <Fontisto style={{paddingLeft:10}} name="motorcycle" size={24} color="black" />
            <Text style={{paddingLeft:10,fontSize:16}}>Rs30 additional distance free</Text>
        </View>
        <View style={{margin:10}}>
          <Text style={{fontSize:17}}>Full Menu</Text>
          <Text style={{borderColor:"#ff1493",borderWidth:2,height:2,width:70,marginTop:4}}/>
        </View>

        {data.map((item)=><Menu cart={cart} setCart={setCart} menu={item}/>)}
    </ScrollView>

    <ViewCart restaurantName={route.params.name}/>
    </>
  )
}

export default HotelRoom

const styles = StyleSheet.create({})