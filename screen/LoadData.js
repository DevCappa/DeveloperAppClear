import { StyleSheet, Text, Image, SafeAreaView, View, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function LoadData() {

  return (
    <View style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#003399', '#0073e6', '#4da1ff']}
        >
          <View style={styles.background}>
            <ScrollView>
                <View style={styles.container}>
                  <Text style={styles.titles}>Mejores productos</Text>
                  <ScrollView horizontal={true}>
                    <View style={styles.cardSell}>
                      <Image style={styles.img16} source={{uri: "https://i.blogs.es/cb8cbb/ultrapanoramic/1366_2000.jpg",}} ></Image>
                      <View style={styles.descuento}>
                        <Text style={styles.text}>
                          Descuento del 50% en computadoras de alta gama..
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardSell}>
                      <Image style={styles.img16} source={{uri: "https://i.blogs.es/cb8cbb/ultrapanoramic/1366_2000.jpg",}} ></Image>
                      <View style={styles.descuento}>
                        <Text style={styles.text}>
                          Descuento del 50% en computadoras de alta gama..
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardSell}>
                      <Image style={styles.img16} source={{uri: "https://i.blogs.es/cb8cbb/ultrapanoramic/1366_2000.jpg",}} ></Image>
                      <View style={styles.descuento}>
                        <Text style={styles.text}>
                          Descuento del 50% en computadoras de alta gama..
                        </Text>
                      </View>
                    </View>
                    
                  </ScrollView>
                  <Text style={styles.titles}>Productos</Text>
                  <View style={styles.cardSimple}>
                    <View  style={styles.imgCard}>
                        <Image style={styles.img1}  source={{uri: 'https://s1.significados.com/foto/hardware.jpg'}} ></Image>
                    </View>
                    <View style={styles.textDard}>
                        <Text style={styles.textCard}>Nombre: Procesador</Text>
                        <Text style={styles.textCard}>Costo: 600Bfs</Text>
                        <Text style={styles.textCard}>Descuento: 5%</Text>
                        <Text style={styles.textCard}>Descripcion: Es un procesador de alta gama.....</Text>
                    </View>
                  </View>
                  <View style={styles.cardSimple2}>
                    <View  style={styles.imgCard}>
                        <Image style={styles.img1}  source={{uri: 'https://s1.significados.com/foto/hardware.jpg'}} ></Image>
                    </View>
                    <View style={styles.textDard}>
                        <Text style={styles.textCard2}>Nombre: Procesador</Text>
                        <Text style={styles.textCard2}>Costo: 600Bfs</Text>
                        <Text style={styles.textCard2}>Descuento: 5%</Text>
                        <Text style={styles.textCard2}>Descripcion: Es un procesador de alta gama.....</Text>
                    </View>
                  </View>
                  <View style={styles.cardSimple}>
                    <View  style={styles.imgCard}>
                        <Image style={styles.img1}  source={{uri: 'https://s1.significados.com/foto/hardware.jpg'}} ></Image>
                    </View>
                    <View style={styles.textDard}>
                        <Text style={styles.textCard}>Nombre: Procesador</Text>
                        <Text style={styles.textCard}>Costo: 600Bfs</Text>
                        <Text style={styles.textCard}>Descuento: 5%</Text>
                        <Text style={styles.textCard}>Descripcion: Es un procesador de alta gama.....</Text>
                    </View>
                  </View>
                  <View style={styles.cardSimple2}>
                    <View  style={styles.imgCard}>
                        <Image style={styles.img1}  source={{uri: 'https://s1.significados.com/foto/hardware.jpg'}} ></Image>
                    </View>
                    <View style={styles.textDard}>
                        <Text style={styles.textCard2}>Nombre: Procesador</Text>
                        <Text style={styles.textCard2}>Costo: 600Bfs</Text>
                        <Text style={styles.textCard2}>Descuento: 5%</Text>
                        <Text style={styles.textCard2}>Descripcion: Es un procesador de alta gama.....</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.spacio}></View>
            </ScrollView>
          </View>
      </LinearGradient>
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
  background: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    backgroundColor: 'transparent',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 15
  },
  cardSell:{
    backgroundColor: '#fff',
    padding: 5,
    marginRight: 10,
    borderRadius: 10,
    marginLeft:7
  },
  img16:{
    width: wp('90%'),
    height: hp('30%'),
    resizeMode: 'stretch',
    borderRadius: 10,

  },
  img1:{
    width: wp('30%'),
    height: hp('15%'),
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
  imgCard:{
    marginLeft: 10
  },
  textDard:{
    marginLeft: 10,
    width: 200
  },
  textCard:{
    marginTop: 2,
  },
  spacio:{
    height: 80,
  },
  textCard2:{
    marginTop: 2,
    color: '#fff'
  }
});
