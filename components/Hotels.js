import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Hotels = (props) => {
    const restaurant = props.restaurant;
    const navigation = useNavigation();
  return (
    <Pressable onPress={()=>navigation.navigate("HotelRoom",{
        id:restaurant.id,
        name:restaurant.name,
        aggregate_rating:restaurant.aggregate_rating,
        adress:restaurant.adress,
        cuisines:restaurant.cuisines,
        smalladress:restaurant.smalladress,
    })}
    style={{ margin: 10,
      borderRadius: 20,
      backgroundColor: "white",
      alignItems:"center"}}>
    <View style={{margin:10}}>
      <Image 
      style=
      {{width:'100%',
      aspectRatio:6/4,
      margin:10,
      borderTopLeftRadius:6,
      borderTopRightRadius:6,
    }}
       source={{uri:restaurant.featured_image}}/>
       <View 
       style={{backgroundColor:'white', flexDirection:'row', justifyContent:'space-between'}}>
            <View>
                <Text style={{fontSize:16,marginTop:10,paddingHorizontal:10,fontWeight:'600'}}>
                    {restaurant.name}
                    </Text>
                <Text style={{marginTop:5,paddingHorizontal:10,marginVertical:5,fontSize:14,color:'gray'}}>{restaurant.cuisines}</Text>
            </View>
            <View 
                style={{
                flexDirection:"row",
                alignItems:'center',
                backgroundColor:'#3CB371',
                padding:5,
                borderRadius:7,
                marginBottom:14,
                marginRight:10,
                marginTop:14,
                }}>
                <Text style={{fontWeight:"bold",color:'white',fontSize:16}}>{restaurant.aggregate_rating}</Text>
                <AntDesign name="star" size={15} color="white" />
            </View>
        
       </View>

       <View style={{
        position:"absolute",
       left:10,
       top:160,
       backgroundColor:"#007FFF",
       padding:6,
       borderTopRightRadius:5,
       borderBottomRightRadius:5,
      
       }}>
        <Text style={{fontSize:12,paddingLeft:3}}>{restaurant.offer}</Text>
         <Text style={{fontSize:12,fontWeight:"bold",color:'white'}}>Upto Rs40</Text>
       </View>

       <View style={{
        position:"absolute",
       right:20,
       top:170,
       backgroundColor:"white",
       padding:4,
       borderRadius:5,
       flexDirection:"row",
       alignItems:"center",
       paddingHorizontal:10,
       }}>
       <Ionicons name="time-outline" size={17} color="green" />
        <Text style={{fontSize:12,paddingLeft:3}}>{restaurant.time}</Text>
       </View>
      
       <View style={{backgroundColor:'white',padding:5,marginBottom:8}}>
       <Text style={{borderColor:"#D3D3D3",borderWidth:1,height:1}}/>
         <View 
         style={{
            flexDirection:"row",
            alignItems:"center",
            marginTop:10,
            }}>
            <View
             style={{width:30,
            height:30,
            borderRadius:15,
            backgroundColor:'blue',
            justifyContent:"center",
             alignItems:'center'}}>
            <AntDesign 
            style={{ backgroundColor: "#4B9CD3",
            borderRadius: 30,
            
            padding: 3,}} 
            name="doubleright" 
            size={24} 
            color="white" />

            </View>
         <Text style={{marginLeft:5,color:"#404040",fontWeight:600}}>{restaurant.no_of_Delivery} + orders placed here</Text>
         <View style={{marginLeft:20}}>
            <Text style={{fontSize:12,fontWeight:"bold"}}>MAX SAFETY</Text>
            <Text style={{fontSize:12,fontWeight:"bold",color:"gray"}}>DELIVERY</Text>
         </View>
         </View>
       </View>
    </View>
    </Pressable>
  )
}

export default Hotels

const styles = StyleSheet.create({})