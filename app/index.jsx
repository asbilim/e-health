import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import welcome from "../assets/welcome2.mp4"
import { Text, Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { COLORS } from '../styles/colors';
import { useRouter } from 'expo-router';

export default function Welcome() {

    const router = useRouter()

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.backgroundVideo}>
                <Video
                    source={welcome}
                    rate={1.0}
                    volume={1.0}
                    isMuted={true}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={StyleSheet.absoluteFill}
                    posterSource={require("../assets/welcome.jpg")}
                    posterStyle={{ width: '100%', height: '100%' }}
                />
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", color: "white", marginVertical:45, color:COLORS.green }}>E-HEALTH CAMEROON</Text>
                </View>
                <View style={styles.content}>
                    <View style={{ gap: 2, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: COLORS.darkGrey }}>Explore, chat, and contact</Text>
                        <Text style={{ color: COLORS.darkGrey }}>best doctors in the world</Text>
                    </View>
                    {/* I will add a temporary link here to redirect to the login page */}
                    <Button mode="contained" style={{ width: "90%", paddingVertical: 10, backgroundColor: COLORS.greenGradient }} onPress={()=>router.push('/home/')} >
                        <Link href="home" style={{color:"black"}}>Sign In</Link>
                    </Button>
                    <Button mode="contained" style={{ width: "90%", paddingVertical: 10, backgroundColor: COLORS.lightGrey }} >
                        <Link href="home" style={{color:"black"}}>Register</Link>
                    </Button>
                    <Text style={{ color: COLORS.darkGrey }}>Terms and Conditions</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        flex: 1,
    },
    content: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 20,
        gap: 10,
        height: "35%",
        backgroundColor: "white",
        justifyContent: 'flex-end', 
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        alignItems: 'center',
    },
});
