import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    withSpring
  } from 'react-native-reanimated';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  export default function Registro({response}) {
    const [value, onChangeText] = useState('');
    const [email, onChangeTextEmail] = useState('');
    const [last, onChangeTextLast] = useState('');

    const valueY = useSharedValue(25);
    const sizeLetter = useSharedValue(13);
    const Color = useSharedValue('#020c4d');

    const valueYL = useSharedValue(25);
    const sizeLetterL = useSharedValue(13);
    const ColorL = useSharedValue('#020c4d');

    const valueYE = useSharedValue(25);
    const sizeLetterE = useSharedValue(13);
    const ColorE = useSharedValue('#020c4d');

    const handlePress = () => {
      valueY.value = 0;
      sizeLetter.value =17;
      Color.value = '#fff';
    }
    const ofHandel = () => {
      if(value.length === 0){
        valueY.value = 25;
        sizeLetter.value = 15;
        Color.value = '#020c4d';
      }else{
        valueY.value = 0;
        sizeLetter.value =17;
        Color.value = '#fff';
      }
    }
    const animatedStyles = useAnimatedStyle(() => ({
      transform: [{ translateY: withSpring(valueY.value) }],
      fontSize: sizeLetter.value,
      color: Color.value
    }));

    const handlePressL = () => {
        valueYL.value = 0;
        sizeLetterL.value =17;
        ColorL.value = '#fff';
      }
      const ofHandelL = () => {
        if(last.length === 0){
          valueYL.value = 25;
          sizeLetterL.value = 15;
          ColorL.value = '#020c4d';
        }else{
          valueYL.value = 0;
          sizeLetterL.value =17;
          ColorL.value = '#fff';
        }
      }
      const animatedStylesLast = useAnimatedStyle(() => ({
        transform: [{ translateY: withSpring(valueYL.value) }],
        fontSize: sizeLetterL.value,
        color: ColorL.value
      }));
    
    
    const handlePressE = () => {
      valueYE.value = 0;
      sizeLetterE.value =17;
      ColorE.value = '#fff';
    }
    const ofHandelE = () => {
      if(email.length === 0){
        valueYE.value = 25;
        sizeLetterE.value = 15;
        ColorE.value = '#020c4d';
      }else{
        valueYE.value = 0;
        sizeLetterE.value =17;
        ColorE.value = '#fff';
      }
    }
    const animatedStylesEmail = useAnimatedStyle(() => ({
      transform: [{ translateY: withSpring(valueYE.value) }],
      fontSize: sizeLetterE.value,
      color: ColorE.value
    }));

    return (
      <View>
        <Animated.View>
            <Animated.Text style={[animatedStyles]}>Nombre</Animated.Text>
            <TextInput  
              onFocus={handlePress}
              onBlur={ofHandel}
              style={styles.input}
              maxLength={20}
              onChangeText={text => onChangeText(text)}
              value={value}></TextInput>
        </Animated.View>
        <Animated.View style={styles.margenes}>
            <Animated.Text style={animatedStylesLast}>Apellido</Animated.Text>
            <TextInput
               onFocus={handlePressL}
              onBlur={ofHandelL}
              style={styles.input}
              maxLength={20}
              onChangeText={text => onChangeTextLast(text)}
              value={last}></TextInput>
        </Animated.View>
        <Animated.View style={styles.margenesL}>
            <Animated.Text style={animatedStylesEmail}>Correo</Animated.Text>
            <TextInput
               onFocus={handlePressE}
              onBlur={ofHandelE}
              style={styles.input}
              maxLength={80}
              onChangeText={text => onChangeTextEmail(text)}
              value={email}></TextInput>
        </Animated.View>
        <View style={styles.margen}>
          <TouchableOpacity style={styles.button}>
            <Text>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

  }

  const styles = StyleSheet.create({
    margenes:{
      paddingTop: 15,
      paddingBottom: 15,
    },
    margenesL:{
        paddingTop:0,
        paddingBottom: 15,
      },
    input:{
      flex: 0,
      height: 38,
      width: widthPercentageToDP('80%'),
      backgroundColor: 'transparent',
      borderBottomColor: '#fff',
      borderWidth: 3,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderRadius: 8,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      width: wp('80%'),
      paddingHorizontal: 32,
      borderRadius: 4,
      backgroundColor: '#fff',
      borderWidth: 2,
      borderColor: '#b0c0c8',
    },
    margen:{
      paddingTop: hp('2.5%'),
    },
    textCenter:{
      textAlign:'center',
      fontSize: 18,
      color: '#fff'
    },
    textTouch:{
      top: hp('-6%'),
      left: 0,
      right: 0,
      textAlign: 'center',
      width: wp('100%'),
      padding: 5,
      position: 'absolute'
    },
    buttonSecond:{
      backgroundColor: '#020c4d',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      width: wp('80%'),
      paddingHorizontal: 32,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#0c1761',
    },
    textSecond:{
      color:'#fff'
    }
  })