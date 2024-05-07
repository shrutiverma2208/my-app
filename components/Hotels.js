import { StyleSheet, Text, View ,Image, Pressable} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Hotels = (props) => {
    const restaurant = props.restaurant;
    console.log(restaurant)
    const navigation = useNavigation();
  return (
    <Pressable onPress={()=>navigation.navigate("HotelRoom",{
        id:restaurant.id,
        name:restaurant.name,
        aggregate_rating:restaurant.aggregate_rating,
        adress:restaurant.adress,
        cuisines:restaurant.cuisines,
        smalladress:restaurant.smalladress,
    })}>
    <View style={{margin:10}}>
      <Image 
      style=
      {{width:'100%',
      aspectRatio:6/4,
      margin:10,
      borderTopLeftRadius:7
      ,borderTopRightRadius:7
    }}
       source={{uri:restaurant.featured_image}}/>
       <View 
       style={{padding:8,backgroundColor:'white', flexDirection:'row', justifyContent:'space-between'}}>
            <View>
                <Text style={{fontSize:17,fontWeight:'600'}}>
                    {restaurant.name}
                    </Text>
                <Text style={{fontSize:15,color:'gray',marginVertical:5}}>{restaurant.cuisines}</Text>
            </View>
            <View 
                style={{
                flexDirection:"row",
                alignItems:'center',
                backgroundColor:'#178169',
                padding:7,
                borderRadius:6,
                }}>
                <Text style={{fontWeight:"bold",paddingRight:5,color:'white',fontSize:16}}>{restaurant.aggregate_rating}</Text>
                <AntDesign name="star" size={18} color="white" />
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
            style={{}} 
            name="doubleright" 
            size={20} 
            color="white" />

            </View>
         <Text style={{marginLeft:5}}>{restaurant.no_of_Delivery} + orders placed here</Text>
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