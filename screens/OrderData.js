import { StyleSheet,Pressable,TouchableOpacity, Text, View,SafeAreaView,Image } from 'react-native'
import React,{useState} from 'react'
import moment from 'moment';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {FontAwesome5} from "@expo/vector-icons";

const OrderData = () => {
  const route =useRoute();
  const time = moment().format('LT');
  const[tip,setTip]=useState(0)
  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1}}>
        <View style={{backgroundColor:"orange",padding:10}}>
      <Text style={{fontSize:16,marginTop:25,fontWeight:"bold",color:"white"}}>{route.params.restaurant} has accepted your order at {time}</Text>
      </View>
      <View style={{borderColor:"#BEBEBE",height:1,borderWidth:2}}/>

      <View style={{backgroundColor:"green",
      padding:5,
      justifyContent:"center",
      alignItems:"center",
      width:200,
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:10,
      borderRadius:7,
      flexDirection:"row",
      alignItems:"center",
      }}>
      <Ionicons name="time-outline" size={24} color="black" />
      <Text style={{color:"white",fontWeight:"bold",marginLeft:5}}>Delivery in 30 min</Text>
      </View>

      <Text style={{textAlign:"center",fontSize:20,marginTop:10}}>Food preprations will begin shortly!!</Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
      <Image
            style={{
              width: 200,
              height: 200,
              backgroundColor: "white",
              marginVertical: 16,
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUpDX04DyRkpYOMZbKFWf9DFV94SrafyNzpwG7nXG2QFcUqTGWmC0ISoM2uU5SUK4bQJw&usqp=CAU",
            }}
          />
</View>

<View 
style={{
  borderColor:"#BEBEBE",
  height:1,
  borderWidth:2,
 }}
  />
<View style={{flexDirection:"row",alignItems:"center",padding:20,
  justifyContent:"center"}}>
<MaterialCommunityIcons name="bike-fast" size={30} color="black" />
<View style={{marginLeft:10}}> 
  <Text style={{fontSize:18,color:"orange",fontWeight:"bold"}}>4 valets near the restaurant</Text>
  <Text style={{fontSize:18}}>anyone will pickup the order</Text>
</View>
</View>
<View 
style={{
  borderColor:"#BEBEBE",
  height:1,
  borderWidth:2,
 }}
  />

<View style={{ padding: 20, flexDirection: "row" }}>
          <FontAwesome5 name="hand-holding-heart" size={28} color="#ff0080" />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", paddingHorizontal: 2 }}
            >
              Tip your hunger Saviour
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "600",
                color: "#696969",
                marginRight: 10,
                paddingHorizontal: 2,
              }}
            >
              Thank your delivery partner for helping you stay safe
              indoors.Support them through these tough times with a tip
            </Text>
            <Pressable
              style={{
                paddingTop: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setTip(30)}
                style={{
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹30
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setTip(50)}
                style={{
                  alignItems: "center",
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  borderRadius: 7,
                  // paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{ padding: 4, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹50
                </Text>
                <Text
                  style={{
                    backgroundColor: "orange",
                    paddingHorizontal: 10,
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Most Tipped
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setTip(70)}
                style={{
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹70
                </Text>
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
        {tip ? (
          <View>
            <Text
              style={{
                color: "#034694",
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                fontSize: 16,
                fontWeight: "600",
                fontFamily: "sans-serif-medium",
              }}
            >
              please pay {"₹"}
              {tip} to your delivery agent at the time of delivery
            </Text>
            <TouchableOpacity
              onPress={() => setTip(0)}
              activeOpacity={0.7}
              style={{
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                position: "absolute",
                top: 40,

                paddingBottom: 40,
              }}
            >
              <Text style={{ color: "red", fontSize: 14, fontWeight: "700" }}>
                (Cancel)
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
    </SafeAreaView>
  )
}

export default OrderData

const styles = StyleSheet.create({})