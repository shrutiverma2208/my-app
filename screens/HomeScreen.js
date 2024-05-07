import { SafeAreaView, StyleSheet, Text, TextInput, View,Image,Pressable, ScrollView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Categories from '../components/Categories';
import ItemComponent from '../components/ItemComponent';
import Hotels from '../components/Hotels';
import hotels from '../data/hotels';

const HomeScreen = () => {
    const data=hotels;
  return (
    <ScrollView style={{marginTop:47,backgroundColor:'#F0F0F0'}}>
        <View style={{margin:10}}>
        <View 
        style={{margin:10,
        flexDirection:'row',
        borderRadius:6,
        alignItems:'center',
        backgroundColor:'#C8C8C8',
        }}
        >
        <AntDesign name="search1" size={20} color="#E52B50" />
            <TextInput style={{paddingLeft:5}} placeholder='Restaurant name,cuisines and any dish'/>
        </View>
        <Categories/>
        <Pressable>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{width:150,height:100,margin:4,borderRadius:7}}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
                  }}
                />
                <Image
                  style={{width:150,height:100,margin:4,borderRadius:7}}
                  source={{
                    uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
                  }}
                />
              </View>
            </Pressable>
            <ItemComponent/>
            {data.map((item)=> <Hotels restaurant={item}/>)}
            </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})