import { SplashScreen } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import { SplashScreenNativeModule } from 'expo-splash-screen/build/SplashScreen.types'; 
import { SafeAreaView, } from 'react-native-safe-area-context';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';


export default function Login() {

  return(
    <SafeAreaView style={{backgroundColor:'blue', flex:1}}>
  <View>
    <Image resizeMode='stretch'  style={{height:122, width:146,  top:70, alignSelf:'center' }} source={require('../../assets/images/splash.png',)}/>
  </View>
  <View style={{ alignSelf:'center', }}>
    <Text style={{width:146, marginBottom:50, fontWeight:'bold', fontSize:38, marginTop:65, textAlign:'center', color:'#FFFFFF'}}>driveit</Text>
 
  </View>
  
  <View style={{borderRadius:74, backgroundColor:'#FFFFFF', marginVertical:20, marginHorizontal:10 }}>
  <TextInput style={{width:354, height:50, textAlign:'center'}} >Michael Joshua</TextInput>
  </View>
  
  <View style={{borderRadius:74, backgroundColor:'#FFFFFF', marginVertical:20, marginHorizontal:10 }}>
  <TextInput style={{width:354, height:50, textAlign:'center'}} >Michael Joshua</TextInput>
  </View>

  <TouchableOpacity style={{ }}>
    <Text style={{textAlign:'center', color:'white', fontFamily:'Poppins'}}>Forgotten Password</Text>
  </TouchableOpacity>


  <TouchableOpacity style={{marginVertical:50, height:50, marginHorizontal:10, borderRadius:74, backgroundColor:'#212121', justifyContent:'center' }}>
    <Text style={{alignSelf:'center', color:'white', fontWeight:'bold', fontSize:19}}>LOG IN</Text>
  </TouchableOpacity>
</SafeAreaView>

  )
}
   
   
