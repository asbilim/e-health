import {SafeAreaView} from "react-native-safe-area-context"
import { Stack } from "expo-router"
import { ScrollView } from "react-native-gesture-handler"
import { Text,TextInput,Button } from "react-native-paper"
import { View } from "react-native"
import { AntDesign,MaterialIcons,FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons"
import { COLORS } from "../../styles/colors"
import { Image } from "react-native"
import kemal from "../../assets/kemal.jpg"
import React from "react";
import { FlashList } from "@shopify/flash-list";
import {useState} from "react"


const interests = [
    { name: 'doctor', icon: <MaterialCommunityIcons name="doctor" size={35}  /> },
    { name: 'Appointment', icon: <FontAwesome name="envira" size={35}  /> },
    { name: 'Prescription', icon: <MaterialIcons name="medical-services" size={35}  /> },
];
export default function Home(){


    const handleSelect = (interest) => {
        setSelectedInterests(prev => prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]);
    };

    return (
        <SafeAreaView style={{backgroundColor:COLORS.darkWhite,flex:1}}>

            <Stack.Screen
                options={{
                    headerStyle:{
                        backgroundColor:COLORS.darkWhite,
                    },
                    headerShadowVisible:false,
                    headerTitleAlign:"center",
                    headerTitle:"home",
                    headerLeft:()=>{
                        return(
                            <Text style={{color:COLORS.black,fontSize:20,margin:4,textTransform:"uppercase",fontWeight:"900"}}>LOGO</Text>
                        )
                    },
                    // headerTitleStyle:()=>{
                    //     return (
                    //         <Text style={{color:COLORS.black,fontSize:13}}></Text>
                    //     )
                    // },
                    headerRight:()=>{
                        return(
                            <Image source={kemal} style={{width:40,height:40,margin:4,borderRadius:100}} />
                        )
                    },
                }}
            />

            <ScrollView style={{flex:1}}>

                    <View style={{marginHorizontal:15,marginVertical:20}}>
                        <Text style={{fontSize:21,color:COLORS.black}}>Find your suitable doctor!</Text>
                    </View>

                    <View style={{marginHorizontal:15,flexDirection:"row",borderWidth:1,borderColor:COLORS.darkGrey,alignItems:"center",backgroundColor:COLORS.white,paddingHorizontal:5,gap:5,borderRadius:15,paddingVertical:2,height:60}}>
                        <View>
                            <AntDesign name="search1" size={24} color="black" />
                        </View>
                        <TextInput placeholder="Search" activeUnderlineColor={COLORS.darkGrey} style={{flex:1,backgroundColor:"transparent",margin:6}} />
                    </View>
                    <FirstList />
            </ScrollView>

        </SafeAreaView>
    )
}



const CreateCard = ({ children, selected }) => {
    return (
        <View style={{ width: 90, height: 100,  borderColor: selected ? COLORS.lightGrey : "#000", backgroundColor: selected ? COLORS.primary : "#fff", borderWidth: 0.5, borderRadius: 15, justifyContent: "center", alignItems: "center", gap: 10, padding: 10 }}>
            {children}
        </View>
    );
}



const FirstList = ()=>{
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleSelect = (interest) => {
        setSelectedInterests(prev => prev.includes(interest) ? prev.filter(i => i !== interest) : [...prev, interest]);
    };
    return (
        <FlashList 
            data={interests}
            renderItem={({ item }) => {
                const isSelected = selectedInterests.includes(item.name);
                const iconWithNewColor = React.cloneElement(item.icon, { color: isSelected ? '#fff' : COLORS.green });
        
                return (
                    <Button onPress={() => handleSelect(item.name)}>
                        <CreateCard selected={isSelected}>
                            {iconWithNewColor}
                            <Text style={{  fontSize: 13, textAlign: "center", color: isSelected ? "#fff" : COLORS.green }}>{item.name}</Text>
                        </CreateCard>
                    </Button>
                );
            }}
            keyExtractor={(item) => item.name}
            numColumns={3}
        />
    )
}