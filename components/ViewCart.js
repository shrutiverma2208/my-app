import { Pressable, StyleSheet, Text, View,Modal, ScrollView } from 'react-native'
import React, { useContext,useState } from 'react'
import { CartItems } from '../Context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const ViewCart = (props) => {
    const {cart,setCart} =useContext(CartItems);
    const total =cart
    .map((item)=> Number(item.price.replace("Rs","")))
    .reduce((prev,curr)=> prev+curr,0);
    console.log(total,"Total price:")
    const [modal,setModal]= useState(false);
    const restaurantName =props.restaurantName;
    const totalPrice = total+50+3
    const checkout =()=>{
        return(
            <View 
            style={{
                justifyContent:"flex-end",
                backgroundColor:"rgba(0, 0, 0, 0.7)",
                flex:1,
                }}>
                    <Pressable 
                    style={{
                        justifyContent:"center",
                        alignItems:"center",
                        marginBottom:10}} 
                        onPress={()=> setModal(false)}
                        >
                        
                       <AntDesign name="closecircle" size={30} color="black" />
                    </Pressable>
                <View 
                style={{
                    height:500,
                    backgroundColor:"white",
                    borderTopRightRadius:10,
                    borderTopLeftRadius:10,}}
                    >
                  <Text style={{textAlign:'center',marginTop:8,color:"red",fontSize:17}}>{restaurantName}</Text>
                  <View style={{flexDirection:"row",alignItems:"center",padding:10}}>
                    <MaterialCommunityIcons name="timer-outline" size={24} color="green" /> 
                    <Text style={{paddingLeft:5,fontWeight:"600"}}>Delivery in 30 min</Text>
                  </View>
                  <View style={{borderColor:"#F0F0F0",height:1,borderWidth:1}}/>
                  
                    <ScrollView>

                  {cart.map((item,key) =>(
                    <View 
                    style={{
                     padding:10,
                     flexDirection:"row",
                     alignContent:"center",
                     justifyContent:"space-between",
                     }}
                      key={key}
                    >
                        <Text style={{color:"#E52B50",fontWeight:"bold",fontSize:16}}>{item.name}</Text>
                        <Text style={{color:"#E52B50",fontWeight:"500"}}>{item.price}</Text>
                    </View>
                  ))}
                 <View style={{borderColor:"#F0F0F0",height:1,borderWidth:1}}/>
                 <View style={{padding:10}}>
                    <Text>Offers</Text>
                    <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>
                    <MaterialCommunityIcons name="brightness-percent" size={24} color="blue" />
                         <Text style={{paddingLeft:6}}>Select a promo code</Text>
                    </View>
                 </View>
                 <View style={{borderColor:"#F0F0F0",height:1,borderWidth:1}}/>
                    <View>
                        <Text style={{fontWeight:"bold",fontSize:15,padding:10}}>Climate Consious Delivery</Text>
                        <View style={{padding:10,flexDirection:"row",alignItems:"center"}}>
                        <MaterialIcons name="fastfood" size={24} color="green" />
                            <View style={{marginLeft:10 }}>
                              <Text style={{color:"green",fontSize:15}}>Don't send cultery tissues and straws</Text>
                               <Text style={{fontSize:15}}>Thank you for caring for the environment</Text>   
                            </View>
                        </View>
                    </View>
                    <View style={{borderColor:"#F0F0F0",height:1,borderWidth:1}}/>
                      
                      <View style={{padding:10,flexDirection:'row',alignItems:"center"}}>
                      <Entypo name="leaf" size={24} color="green" />
                       <Text style={{marginLeft:10}}>We fund environmental projects to offset carbon footprints of our deliveries</Text>
                      </View>

                      <View style={{borderColor:"#F0F0F0",height:1,borderWidth:2}}/>
                      <View style={{padding:10,backgroundColor:"#F0E6BC"}}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

                            <Text>Item Total</Text>
                            <Text>{total}</Text>
                            
                        </View>
                        <View 
                        style={{flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between",
                        marginVertical:10}}>

                            <Text>Delivery fee</Text>
                            <Text>Rs.50</Text>

                        </View>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

                            <Text>Donation fee</Text>
                            <Text>Rs.3</Text>

                        </View>
                      </View>
                      <View style={{borderColor:"#F0F0F0",height:1,borderWidth:2}}/>
 
                      </ScrollView>
                      <View 
                style={{
                    padding:10,
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between"}}>
                    <Text 
                    style={{fontSize:16,fontWeight:"bold"}}>Grand Total</Text>
                    <Text style={{marginLeft:"auto",marginRight:20,fontWeight:"bold"}}>Rs.{totalPrice}</Text>
                </View>
                </View>
               
            </View>
        );    
    };
    return (
        <>
         <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
        }}>
             
             {checkout()}
        </Modal>

    <View>
        {total === 0 ?
            null
        :(
            <Pressable 
            onPress={() => setModal(true)}
             style={{
                backgroundColor:"#fd5c63",
                width:140,
                borderRadius:4,
                padding:10,
                position:"absolute",
                bottom:40,
                left:120,
                }}>
                    <Text 
                    style={{
                        textAlign:"center",
                        color:"white",
                        fontWeight:"bold"
                        }}>ViewCart = Rs.{total}</Text>

            </Pressable>
        )}
    </View>
    </>
  )
}

export default ViewCart

const styles = StyleSheet.create({})