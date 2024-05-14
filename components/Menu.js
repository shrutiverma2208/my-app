import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React,{useState} from 'react';
import {FontAwesome} from "@expo/vector-icons"
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Menu = ({menu,cart,setCart}) => {
    const bestSeller =true;
    const [additems,setAddItems] = useState(0);
    const updateItem = (count) => {
      console.log('making count', count)
      setAddItems(count)
    }
    const updateCartHandler = (count) => {
      const cartCopy = JSON.parse(JSON.stringify(cart));
      const updatedCart = cartCopy.map((item)=>{
        if(menu.id===item.id){
          item.count=count
        }
        return item;
      })
      setCart(updatedCart)
    }
  return (
    <View 
    style={{
      marginBottom:20,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:20}}>
        <View >
        <View style={{marginLeft:20}}>
        <Text>{menu.name}</Text>
      <Text>₹ {menu.price}</Text>
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

  <Text style={{marginLeft:5, textAlign:"center",fontSize:14,color:"red"}}>
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
   <Pressable
          style={{
            position: "absolute",
            right:25,
            top: 90,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FF3366",
            borderRadius: 5,
          }}
        >
        <Pressable onPress={()=>{
          if(additems===1){
            setCart(cart.filter((p)=>p.id !== menu.id));
          }else{
            updateCartHandler(Math.max(0, additems-1));
          }

           updateItem(Math.max(0, additems-1));

          }}>
          <Text 
          style={{fontSize:25,color:"white",paddingHorizontal:10}}>
           -
          </Text>
        </Pressable>

        <Pressable>
          <Text 
          style={{fontSize:20,color:"white",paddingHorizontal:10}}>
           {additems}
          </Text>
        </Pressable>

        <Pressable onPress={()=>{
          if(additems===0){
          setCart([...cart,menu]);
          }else{
            updateCartHandler(additems+1)
          }
          updateItem(additems+1)
        }
          }>
          <Text 
           style={{fontSize:20 ,color:"white",paddingHorizontal:10}}>
           +
          </Text>
        </Pressable>
        </Pressable>
</View>

  
 </View>
  )
}

export default Menu

const styles = StyleSheet.create({})