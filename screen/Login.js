import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import img from '../assets/logo.png'
import {ScrollView} from 'react-native'
import Input from '../components/login'
import Animated, {
    useSharedValue,
    Easing,
    Keyframe
  } from 'react-native-reanimated';

export default function LoadData({ navigation }) {
  const navegarTo = (url) => {
    navigation.navigate(url)
  }

  const enteringAnimation = new Keyframe({
    0: {
        transform: [{scale: 1}, {rotate: '0deg'}],
    },
    50: {
        transform: [{scale: 1.15}, {rotate: '15deg'}],
    },
    100: {
        transform: [{scale: 1}, {rotate: '0deg'}],
        easing: Easing.quad,
      },
  }).duration(1500);

  return ( 
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#003399', '#0073e6', '#4da1ff']}
        >
            <ScrollView>
                <View style={styles.background}>
                    <Animated.Image entering={enteringAnimation} style={[styles.img]} source={img}></Animated.Image>
                    <Text style={styles.texto}>Login RemoraApp</Text>
                    <View style={styles.margen}>
                    <Input response={navigation}></Input>
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.textTouch}>
                    <Text style={styles.textCenter}>Regresar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
      </LinearGradient>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  img:{
    flex: 0,
    width: '80%',
    height: '26%',
    backgroundColor: 'transparent',
  },
  background: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margen:{
    padding: hp('2.5%'),
  },
  texto:{
    color: '#fff',
    fontFamily: 'space-mono',
    fontSize: hp('3%'),
    marginTop: hp('2.5%'),
    width: wp('65%'),
    textAlign: 'center',
    fontWeight: '700'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#b0c0c8',
  },
  textCenter:{
    textAlign:'center',
    fontSize: 18,
    color: '#fff'
  },
  textTouch:{
    left: 0,
    right: 0,
    textAlign: 'center',
    width: wp('100%'),
    top: -10,
  }
});
