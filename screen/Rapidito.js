import { StyleSheet, Text, Image, TouchableOpacity, Modal, View, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import image from '../assets/rapidito.png'
export default function Rapidito() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#003399', '#0073e6', '#4da1ff']}
        >
          <View style={styles.background}>
            <ScrollView>
                <View style={styles.background2}>
                    <Text style={styles.titles}>Rapidito a tu asiento</Text>
                    <Image style={styles.img1} source={image} />
                    <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={styles.buttonSecond}>
                        <Text style={styles.textCenter}>Scanear QR</Text>
                    </TouchableOpacity>
                    <Text style={styles.titles}>Combos mas solicitados</Text>
                </View>
                  <ScrollView horizontal={true}>
                    <View style={styles.cardSell}>
                      <Image style={styles.img16} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTcH1EGZ7VPQkN50fOgNojNzCaOmIDxGtNA&usqp=CAU",}} ></Image>
                    </View>
                    <View style={styles.cardSell}>
                      <Image style={styles.img16} source={{uri: "https://static.vecteezy.com/system/resources/previews/001/349/636/non_2x/fast-food-menu-combo-template-free-vector.jpg",}} ></Image>
                    </View>
                    <View style={styles.cardSell}>
                      <Image style={styles.img16} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8sgAmqMygfQCvcyN9pYZVeD5d6ylUDJA0Q&usqp=CAU",}} ></Image>
                    </View>
                    
                  </ScrollView>
            </ScrollView>
          </View>
      </LinearGradient>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Confirma tu compra</Text>
                <View style={styles.cardSell}>
                    <Image style={styles.all} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTcH1EGZ7VPQkN50fOgNojNzCaOmIDxGtNA&usqp=CAU",}} ></Image>
                </View>
            <Text style={styles.modalText}>Combo Familiar</Text>
            <Text style={styles.modalText}>Total: 16$</Text>
            <Pressable
              style={[styles.buttonSecond]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Confirmar Pedido</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 20,
  },
  titles:{
    fontSize: hp("2.5%"),
    color: "#fff",
    fontWeight: "bold",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 10,
    marginTop:10,
  },
  background2:{
    flex: 1,

    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',

    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 15
  },
  all:{
    width:wp("90%"),
    height: 350
  },
  cardSell:{
    backgroundColor: '#fff',
    padding: 5,
    marginRight: 10,
    borderRadius: 10,
    marginLeft:7
  },
  img16:{
    width: wp('35%'),
    height: hp('15%'),
    resizeMode: 'stretch',
    borderRadius: 10,

  },
  img1:{
    width: wp('100%'),
    height: hp('40%'),
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  descuento:{
    position:'absolute',
    elevation: 1,
    bottom:5,
    left: 5,
    backgroundColor: "rgba(0,0,0,.8)",
    color: "#fff",
    width: wp('90%'),
    height: 70,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  cardSimple:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
    width: wp('95%'),
    height: hp("18%"),
    alignItems: "center",
    gap:10,
    margin: 8,
    borderRadius: 5,
  },
  cardSimple2:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#1a15b7",
    width: wp('95%'),
    height: hp("18%"),
    alignItems: "center",
    gap:10,
    margin: 8,
    borderRadius: 5,
  },
  text:{
    color:"#fff",
    paddingLeft: 10,
    paddingTop:10
  },
  textCenter:{
    textAlign:'center',
    fontSize: 18,
    color: '#fff'
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
  textCard2:{
    marginTop: 2,
    color: '#fff'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
        width: wp("95%"),
    height: hp("80%"),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
