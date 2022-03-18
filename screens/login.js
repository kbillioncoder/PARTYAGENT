import { StatusBar } from 'expo-status-bar';
import React,{component,useState} from 'react';
import { StyleSheet, Text,View,Image,KeyboardAvoidingView,ScrollView,TouchableOpacity,TextInput,SafeAreaView,Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {authentication, register} from '../firebase/index';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { signin,Register } from '../firebase/index';

const Login=({navigation})=> {
   
   const [passwordVisible, setPasswordVisible] = useState(true);
   const[email,setemail]=useState('')
   const[password,setpassword]=useState('')
   const[Issignedin,setIssignedin]=useState(false)
   const[mode,setmode]=useState('Register')

   async function handlepress(){
    if(mode=='Register'){
        await Register(email,password)
    }
    if(mode=='signin'){
        await signin(email,password)
    }
    
    

   }

   const logindisplay=()=>{
     return( mode=='Register'? <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Register</Text>:<Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Sign in</Text>); 
   }

   const onSignin=({navigation})=>{
            return(
                !Issignedin?()=>navigation.navigate('Details'):alert('Enter your details')

            )

   };

   const SignedInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
        .then((re) => {setIssignedin(true); onSignin })
        .catch((re) => {
            console.log(re);
        });
};

const Signoutuser = () => {
    signOut(authentication)
        .then((re) => { setIssignedin(false) })
        .catch((re) => {
            console.log(re);

           
        });
};

const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
        .then((re) => { console.log(re); })
        .catch((re) => {
            console.log(re);
        });
};



  return (
    
      <KeyboardAvoidingView bahavior="padding" style={styles.container} >
          
          <View style={{}}>
      <View style={{paddingLeft:40,padding:10,marginVertical:60}}>
          <Text style={{color:'white',fontSize:40,fontWeight:'bold'}}>APC AGENT APP</Text>
      </View>
      <View style={{paddingLeft:75,marginBottom:50}}>
          <TouchableOpacity>
          <Image source={require('./image/apclogo.png')} style={{width:200,height:180}}></Image>
          </TouchableOpacity>
         
      </View>
      <View style={{marginLeft:40,marginVertical:5,padding:5}}>
          <Text style={{fontSize:20,color:'white'}}>Username</Text>
          <TextInput value={email} placeholder='  Enter username' style={{backgroundColor:'white',width:'80%',height:40,borderRadius:10,borderBottomColor:'white'}}  onChangeText={(text) => setemail(text)}></TextInput>
         
          <Text style={{fontSize:20,color:'white',marginTop:10}}>Password</Text>
          <TextInput 
          value={password}
          placeholder="  Password"
          secureTextEntry={passwordVisible}
          style={{backgroundColor:'white',width:'80%',height:40,borderRadius:10, borderBottomColor:'white'}} 
          onChangeText={(text) => setpassword(text)}

          />
    <TouchableOpacity
    style={{
        marginRight:100,
        position:'absolute',
        right:0,
        bottom:10,
        height:30,
        width:30
    }}
    onPress={()=>setPasswordVisible(!passwordVisible)}
    >
       
        <Image 
        source={
            
                passwordVisible?require('./image/closeeye.png'): require('./image/eye.png')
            
           
        }
        style={{height:20,
                width:30,
                //tintColor:'white'
        }}
        />
    </TouchableOpacity>
              
     
      </View>
      <View style={{marginVertical:20, width:'50%',height:'50%', marginLeft:90}}>
      
            <Button title={mode=='Register'?'Register':'Signin'} color='red' onPress={handlepress} disabled={!password||!email}/> 
    
      </View>
     
              

    </View>
                 
      </KeyboardAvoidingView>
   
  );
}

export default Login;

const styles=StyleSheet.create(
{

    container:{
        flex:1,
        backgroundColor:'#008080',
        //justifyContent:'center',
        //alignItems:'center',
       // width:'100%',height:'100%'
        
    }
});




