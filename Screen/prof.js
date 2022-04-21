import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView,
    TextInput,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { getUserData, LogoutUser, storeUserData } from "../utils/AsyncStorageFunctions";
  import Loading from "./Loading";
  import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";
  const Profilee = ({ navigation }) => {
    const [station, setStation] = useState(null);
    const [allowedit,setAllowedit]=useState(false);
  const [email , setEmail]=useState('')
  const[Nom_station , setNom_station] = useState('')
const [password, setPassword] = useState('')
   const editProfile = async () => {
      
         fetch("http://192.168.43.230:3001/utilisateur/ms/"+ station.data.station._id, {
        method: "PUT",
        body: JSON.stringify(
           Nom_station,
        email
        )
      }).then((res) => {
        console.log(res)
        if(res.status==200){
         navigation.navigate("Dashboard")}
         
       
      })
      .catch((err)=>{console.log(err)})
    }


 const editProfilee = async () => {
      const payload = {
        Nom_stations:Nom_station,
        emails:email
            }
            const response = await fetch("http://192.168.43.230:3001/utilisateur/ms/"+ station.data.station._id, {
        method: "PUT",
        headers :{
        Accept: 'application/json'},
        body: JSON.stringify(payload)
      }).then((res) => {
        console.log(res)
       

      })
    }

















    useEffect(async () => {
      setStation(await getUserData());
      //setPassword(AsyncStorage.getItem("loginStation").password)
      console.log(station)
    }, []);



    async function update(){

    
      
      fetch("http://192.168.43.230:3001/utilisateur/ms/"+ station.data.station._id, {
          method: 'PUT',
        
          headers:{
              "Content-Type" : 'application/json',
              "Accept":'application/json'
             
          },
         
  
        
      }).then(res=>res.json())
      .then(async data=>{
    
     setEmail(data.email),
     setNom_station(data.Nom_station)
      })
      .catch(err=>{
        console.log(err)
      });
     
      
     
  }




  
    if (station == null) {
      return (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Loading />
        </View>
      );
    }
  


    return (
      <>
      {station && (
      <View
        style={{
          display: "flex",
          flexGrow: 1,
          backgroundColor: "#dddddd",
          justifyContent: "center",
        }}
      >
        <StatusBar backgroundColor={"#f3607b"} barStyle="auto" />
        <View
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              marginBottom: 10,
              marginTop: 10,
              width: "80%",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "700" }}>My Profile</Text>
            <Image
              style={{ height: 90, width: 80 }}
              source={{
                uri: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              backgroundColor: "white",
              borderRadius: 20,
              width: "80%",
              flex: 1,
              alignSelf: "center",
              padding: 25,
            }}
          >
            <ScrollView contentContainerStyle={{flexGrow: 1,justifyContent:'space-between'}}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 15,
                  borderBottomColor: "#ddd",
                  borderBottomWidth: 1,
                  alignItems:'center',
                  paddingBottom: 10,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text  style={{ fontWeight: "700" }}>Nom station</Text>
                  <TextInput editable={true} style={{ fontSize: 14,color:allowedit?'black':'gray', padding: "5px"}} defaultValue={station.data.station.Nom_station}  onChangeText={text => setNom_station(text)} />                    
                </View>
                
              </View>
              
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 15,
                  borderBottomColor: "#ddd",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "700" }}>Email</Text>
                  <TextInput editable={true} style={{ fontSize: 14,color:allowedit?'black':'gray', padding: "5px"}}
                   defaultValue={station.data.station.email} onChangeText={text => setEmail(text)} />
                </View>
                <View>
                   
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 15,
                  borderBottomColor: "#ddd",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "700" }}>Change password</Text>
                  <TextInput  style={{ fontSize: 14,color:'black', padding: "5px"}} placeholder="Votre ancien mot de passe" />
                  <TextInput  style={{ fontSize: 14,color:'black', padding: "5px"}} placeholder="Votre nv mot de passe" />
                  <TextInput  style={{ fontSize: 14,color:'black', padding: "5px"}} placeholder="Votre nv mot de passe" />
                </View>
                <View>
                   
                </View>
              </View>
              
                
                
            
            </ScrollView>
          </View>
        </View>
  
       {/* <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
          onPress={() => {
            editProfile()
          }}
        >
        </TouchableOpacity> */}

<TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
          onPress={() => {
            editProfile()
          }}
        >

          <Image
            source={require("../assets/logout.png")}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity> 
      </View>
      )}
      </>
    );
  };
  
  export default Profilee;