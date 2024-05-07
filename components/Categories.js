import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'

const Categories = () => {

  const items=[{
    id:"1",
    name:'fast delivery',
  },
  {
    id:"2",
    name:'Rating 4.8+',
  },
  {
    id:"3",
    name:'offers',
  },
  {
    id:"4",
    name:'cuisines',
  },
  {
    id:"5",
    name:'Max Safety',
  },
  {
    id:"6",
    name:'Pro',
  },
   
  ]
  return (
    <View style={{marginTop:6}}>
      <FlatList horizontal={true} data={items} renderItem={({item})=>(
        <Pressable style={{backgroundColor:'#ff6666',borderRadius:6,padding:5,margin:7}}>
          <Text style={{color:'white'}}>
            {item.name}
          </Text>
        </Pressable>
      )}/>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})