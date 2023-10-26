import React from "react";
import {View, Text, StyleSheet, Image} from "react-native"
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer"
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const customDrawer = (props) =>{
    return(
        <DrawerContentScrollView {...props}>
            <LinearGradient
            style={styles.up}
                // Button Linear Gradient
                colors={['#003399', '#0073e6', '#4da1ff']}
                >
                <View style={styles.container}>
                    <View style={styles.center}>
                        <Image style={styles.circle} source={{uri:'https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'}} />
                    </View>
                    <Text style={styles.texto}>Hola, Jose Sequera</Text>
                    <Text style={styles.texto}>id: 0x123412341234</Text>
                </View>
            </LinearGradient>
            <DrawerItemList {...props}></DrawerItemList>
        </DrawerContentScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        height: 250,
        top:5,
        margin:5,
        alignContent:"center",
    },
    texto:{
        color:"#fff",
        margin: 2
    },
    up:{
        top: -4
    },
    circle:{
        width: 120,
        height: 120, 
        borderRadius:60,
        alignContent:"center",
        alignItems: "center",
        
    },
    center:{
        alignContent:"center",
        alignItems: "center",
        marginTop:20,
        marginBottom:hp("8%")
    }
})
export default customDrawer