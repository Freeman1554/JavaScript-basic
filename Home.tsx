import { SafeAreaView} from "react-native-safe-area-context";
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';



const Home = () => {
    return(
        <SafeAreaView style={{flex:1}}>
          <ScrollView>
            
      <View style={styles.container}>
      <View style={styles.inputContainer}>

      <TextInput
          style={styles.input}
          placeholder="Search for a car"
          placeholderTextColor="#999"
        />
        
        <Image 
          source={require('../../assets/images/search.png')} 
          style={styles.image}
        />
      </View>
    </View>
    
    <View style={{flexDirection:'row', marginRight:30, marginBottom:10}}>
    <View >  
    <TouchableOpacity style={styles.TouchableOpacity3}>
        
        <Image source={require('../../assets/images/new.png' )} style={{height:86, width:99, marginTop:10,}}/>
            
        <Text style={{textAlign:'center', color:'white', fontWeight:'bold',marginTop:10, fontSize:14 }}>
         Standard {"\n"}56 
        </Text>
        
    </TouchableOpacity>
    </View>
    

    <View style={{marginLeft:30}}>  
    <TouchableOpacity style={styles.TouchableOpacity2}>
        
        <Image source={require('../../assets/images/Prestige.png')} style={{height:86.29, width:120, top:10,}}/>
            
        <Text style={{textAlign:'center', color:'black', fontWeight:'bold',marginTop:10}}>
         Prestige {"\n"}22 
        </Text>
              
    </TouchableOpacity>
    </View>

    <View style={{marginLeft:30,}}>  
    <TouchableOpacity style={styles.TouchableOpacity2}>
        
        <Image source={require('../../assets/images/suv.png')} style={{height:86.29, width:120, top:10,}}/>
            
        <Text style={{textAlign:'center', color:'black', fontWeight:'bold',marginTop:10}}>
         SUV {"\n"}34 
        </Text>
              
    </TouchableOpacity>
    </View>
    </View>
    
    <View style={{marginTop:20}}>
      <Text style={{marginTop:40, fontSize:14, fontWeight:'400', marginLeft:15}}>
        Available Vehicles
      </Text>
      <View>

      <TouchableOpacity style={styles.TouchableOpacity1}>
        <View style={{flexDirection:'row'}}>
        <View>
          <Text style={styles.Text2}>Toyota</Text>{"\n"}

          <Text style={styles.Text1}>Yaris iA</Text>

          <Text style={styles.Text1}>Engine</Text>
        </View >
        <View style={{paddingLeft:130}}>
        <Text style={{fontWeight:300, fontSize:34, color:'#304FFE'}}>$350</Text>{"\n"}
        <Text style={{textAlign:'right'}}>/Month</Text>
        <Text>4 Cyl 1.5 Liter</Text>
        </View>
          </View>

          <View >
        <Image source={require('../../assets/images/car.png')} style={{width:350, height:200,}}/>
          </View>
      </TouchableOpacity>
    </View>
    </View>  
    <View>
        
      <TouchableOpacity style={styles.TouchableOpacity1}>
        <View style={{flexDirection:'row'}}>
        <View>
          <Text style={styles.Text2}>Hyundai</Text>{"\n"}

          <Text style={styles.Text1}>i20</Text>
        </View >
        <View style={{paddingLeft:100}}>
        <Text style={{fontWeight:300, fontSize:34, color:'#304FFE'}}>$200</Text>{"\n"}
        <Text style={{textAlign:'right'}}>/Month</Text>
        </View>
          </View>

          <View >
        <Image source={require('../../assets/images/new.png')} style={{width:350, height:200,}}/>
          </View>
      </TouchableOpacity>
    </View>
    
    </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
      backgroundColor: 'green',
      height:50,
      marginHorizontal:10,
      borderRadius:55,
           
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius:50,
      marginHorizontal:10      
      
      
    },
    image: {
      width: 17,
      height: 17,
      marginHorizontal:10
     
      
    },
    input: {
      flex: 1,
      height: 60,
      fontSize: 16,
      color: '#212121',
      //marginLeft:20,
      
      
      
    },
    TouchableOpacity1:{
      marginTop:20, 
      borderRadius:40, 
      backgroundColor:'#FFFFFF', 
      marginHorizontal:15,
      height:368,
      width:354

    },
    Text1:{
      fontWeight:400, 
      fontSize:14, 
      marginLeft:25
    },
    Text2:{
      fontWeight:800, 
      fontSize:34, 
      marginLeft:25
    },
    TouchableOpacity2:{
      width:112, 
      height:149,  
      backgroundColor:'white', 
      top:40, 
      left:30, 
      borderRadius:20, 
      alignContent:'center'
    },
    TouchableOpacity3:{
      width:112, 
      height:149, 
      backgroundColor:'blue', 
      top:40, 
      left:30, 
      borderRadius:20, 
      alignContent:'center'
    }
  });

export default Home;