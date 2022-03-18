import { StatusBar } from 'expo-status-bar';
import React,{component,useState} from 'react';
import { StyleSheet, Text,TextInput,View,Image,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';




    const Details=({navigation})=>{
        const[state,setstate]=useState();
        
        
        

        return(
            <KeyboardAvoidingView behavior='padding'style={{backgroundColor:'#008080',width:'100%',height:'100%'}}>
                <ScrollView >
                <View style={{flex:1,backgroundColor:'#008080',marginVertical:70}}>
                <View style={{marginLeft:40}}>
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginVertical:20}}>State</Text>
                    <TextInput placeholder=' Enter State' style={{backgroundColor:'white',width:'90%',height:40,borderRadius:10,borderBottomColor:'white'}}></TextInput>

                    <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginVertical:20}}>Local Government Area</Text>
                    <TextInput placeholder=' Enter LGA' style={{backgroundColor:'white',width:'90%',height:40,borderRadius:10,borderBottomColor:'white'}}></TextInput>
                
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginVertical:20}}>Ward</Text>
                    <TextInput placeholder=' Enter Ward' style={{backgroundColor:'white',width:'90%',height:40,borderRadius:10,borderBottomColor:'white'}}></TextInput>
                
                    <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginVertical:20}}>Polling Unit</Text>
                    <TextInput placeholder=' Enter polling unit' style={{backgroundColor:'white',width:'90%',height:40,borderRadius:10,borderBottomColor:'white'}}></TextInput>
                </View>

                  

                <View style={styles.container}>
                
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold',marginVertical:20}}>Election Category</Text>
                  
                   
                        <Picker
                        selectedValue={state} onValueChange={(itemValue,itemIndex)=>setstate(itemValue)}
                            style={{height:20,width:300,backgroundColor:'white'}}
                        >
                            <Picker.Item  label='Presidential' value='Pick 1'/>
                            <Picker.Item  label='Governorship' value='Pick 2'/>
                            <Picker.Item  label='Senatorial' value='Pick 3'/>
                            <Picker.Item  label='House of Rep' value='Pick 4'/>
                            <Picker.Item  label='State House of Assembly' value='Pick 5'/>

                            
                                
                        </Picker>
                    </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={{marginLeft:300,marginVertical:250}} onPress={()=>navigation.navigate("Results")}>
                       
                    
                    
                    
                    
                    <Image source={require('./image/PngItem_823367.png')} style={{height:25,width:60}}/>
                    
                       
                        
                       
                    </TouchableOpacity>

                   
                </View>
               
                </View>
               
            </ScrollView>

            </KeyboardAvoidingView>
            
        )


    }

    export default Details;

    const styles=StyleSheet.create({
       
        container:{
          
            marginLeft:40,
           

        }

    })
