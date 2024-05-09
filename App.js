import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './assets/StackNavigator';
import { BasketContext } from './Context';

export default function App() {


  return (
    <BasketContext>
      <StackNavigator/>   
      <StatusBar style="auto" />
    </BasketContext>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
