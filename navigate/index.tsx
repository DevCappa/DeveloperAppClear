

import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import LoadData from '../screen/LoadData';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { View } from 'react-native';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Provider as PaperProvider,} from 'react-native-paper';

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

      <Stack.Navigator initialRouteName='NotFound'>
        <Stack.Screen name="NotFound" component={DrawerNavigate} options={{ headerShown: false }} />
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
        <Drawer.Navigator initialRouteName="Root">
          <Drawer.Screen name="Root" component={BottomTabNavigator} />
          <Drawer.Screen name="Inicio" component={LoadData} />
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
            backgroundColor: '#000',
            position: "absolute",
            zIndex:1,
            elevation:1,
            borderTopWidth: 0,
        },
      })}>
          <BottomTab.Screen name="Inicio" component={LoadData} 
          options={({ navigation }: RootTabScreenProps<"Inicio">) => ({
              title: 'Inicio',
              headerShown: false,
              tabBarActiveTintColor: "#fff",
              tabBarIcon: ({ color }) => <Entypo name="home" size={hp("3.8%")} color={color} />,
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
