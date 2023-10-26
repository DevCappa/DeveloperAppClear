import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    withSpring
  } from 'react-native-reanimated';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity  } from 'react-native';
import React from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  export default function Login({response}) {
    const [value, onChangeText] = React.useState('');
    const valueY = useSharedValue(25);
    const sizeLetter = useSharedValue(13);
    const Color = useSharedValue('#020c4d');

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
    
    const sendData = () => {
      response.navigate('NotFound')
    }
  

    return (
      <View>
        <Animated.View style={styles.margenes}>
            <Animated.Text style={[animatedStyles]}>Correo</Animated.Text>
            <TextInput  
              onFocus={handlePress}
              onBlur={ofHandel}
              style={styles.input}
              maxLength={20}
              onChangeText={text => onChangeText(text)}
              value={value}></TextInput>
        </Animated.View>
        <View style={styles.margen}>
          <TouchableOpacity style={styles.buttonSecond}>
            <Text style={styles.textSecond}>Recuperar Contraseña</Text>
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