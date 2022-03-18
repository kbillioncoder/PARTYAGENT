import { StatusBar } from 'expo-status-bar';
import React,{component} from 'react';
import { StyleSheet, Text,TextInput,View,Image,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';



const Results=()=>{
    return(
            <View style={{flexDirection:'row',flex:1, backgroundColor:'#008080'}}>
                    <Text style={{color:'white',fontSize:30,fontWeight:'bold',marginLeft:20}}>APC</Text>
                    <TextInput placeholder='  Enter username' style={{backgroundColor:'white',width:'80%',height:40,borderRadius:10,borderBottomColor:'white',marginLeft:10}}></TextInput>
            </View>

    )

}

export default Results;