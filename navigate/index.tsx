

import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LoadData from '../screen/LoadData';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Start from '../screen/Inicio'
import Login from '../screen/Login'
import Registro from '../screen/Registro'
import Recuperar from '../screen/Recuperar'
import Perfil from '../screen/Perfil'
import {Text} from 'react-native'
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Provider as PaperProvider,} from 'react-native-paper';
import DrawerCustom from '../navigate/customMenu'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <PaperProvider>
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootNavigator />
        </NavigationContainer>
    </PaperProvider>

  );
}




/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (

      <Stack.Navigator initialRouteName='LoadData'>
        <Stack.Screen name="Inicio" component={DrawerNavigate} options={{ headerShown: false }} />
        <Stack.Screen name="LoadData" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="registro" component={Registro} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="recuperar" component={Recuperar} options={{ headerShown: false }} />
      </Stack.Navigator>

  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Drawer = createDrawerNavigator<RootTabParamList>();
function DrawerNavigate() {
  return (
      <NavigationContainer independent={true}>
        <Drawer.Navigator drawerContent={props => <DrawerCustom {...props} />} initialRouteName="Tienda">
          <Drawer.Screen name="Tienda" component={BottomTabNavigator} />
          <Drawer.Screen name="Perfil" component={Perfil} />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (

      
      <NavigationContainer independent={true}>

        <BottomTab.Navigator initialRouteName="Inicio" screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            paddingHorizontal: 0,
            paddingTop: 0,
            backgroundColor: '#ffffff',
            position: "absolute",
            zIndex:1,
            elevation:1,
            borderTopWidth: 0,
        },
      })}>
          <BottomTab.Screen name="Inicio" component={LoadData} 
          options={({ navigation }: RootTabScreenProps<"Inicio">) => ({
              title: 'Tienda',
              headerShown: false,
              tabBarActiveTintColor: "#003399",
              tabBarInactiveTintColor:'#4f4f4f',
              tabBarIcon: ({ color }) => <Entypo name="shop" size={hp("3.5%")} color={color}/>,
            })}/>
            <BottomTab.Screen name="Creditos" component={LoadData} 
          options={({ navigation }: RootTabScreenProps<"Inicio">) => ({
              title: 'Creditos',
              headerShown: false,
              tabBarActiveTintColor: "#003399",
              tabBarInactiveTintColor:'#4f4f4f',
              tabBarIcon: ({ color }) => <Entypo name="credit-card" size={hp("3.5%")} color={color}/>,
            })}/>
            <BottomTab.Screen name="Rapidito" component={LoadData} 
          options={({ navigation }: RootTabScreenProps<"Inicio">) => ({
              title: 'Rapidito',
              headerShown: false,
              tabBarActiveTintColor: "#003399",
              tabBarInactiveTintColor:'#4f4f4f',
              tabBarIcon: ({ color }) => <Entypo name="direction" size={hp("3.5%")} color={color}/>,
            })}/>
        </BottomTab.Navigator>
      </NavigationContainer>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: any;
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
