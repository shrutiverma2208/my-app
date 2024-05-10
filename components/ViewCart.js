import { Pressable, StyleSheet, Text, View,Modal } from 'react-native'
import React, { useContext,useState } from 'react'
import { CartItems } from '../Context'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewCart = (props) => {
    const {cart,setCart} =useContext(CartItems);
    const total =cart
    .map((item)=> Number(item.price.replace("Rs","")))
    .reduce((prev,curr)=> prev+curr,0);
    console.log(total,"Total price:")
    const [modal,setModal]= useState(false);
    const restaurantName =props.restaurantName
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
                    <Text>Delivery in 30 min</Text>
                  </View>
                </View>
            </View>
        )
        
       
    }
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