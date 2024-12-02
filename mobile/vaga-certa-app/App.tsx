/*import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';


export default function App() {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown:false,
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: '#888', 
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UsuarioProvider } from './src/context/UsuarioContext';

import theme from './src/theme';

import Login from './src/screens/Login';
import FormScreen  from './src/screens/Form';
import Profile  from './src/screens/Profile';
import Home from './src/screens/Home';
import Details  from './src/screens/Details';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function Auth(){
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = await AsyncStorage.getItem('@user');
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    };

    console.log(isAuthenticated)
    checkAuthentication();
  }, []);
  

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused, color }) => {
       let iconName: "home" | "home-outline" | "person"|"person-outline";

        if (route.name === 'Home') {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === 'Profile') {
          iconName = focused ? "person" : "person-outline";
        }

        return <Ionicons name={'home'} size={16} color={color} />;
      },
      tabBarActiveTintColor: theme.COLORS.GREEN,
      tabBarInactiveTintColor: theme.COLORS.GRAY_03,
      tabBarStyle: {
        backgroundColor: theme.COLORS.GRAY_01,
      },
      tabBarLabelStyle: {
        fontWeight: 800,
      },
    })}
    >
    {isAuthenticated ? (
      <>
      <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator screenOptions={{ headerShown: false }}>
              <HomeStack.Screen name="Home" component={Home} />
              <HomeStack.Screen name="Details" component={Details} />
            </HomeStack.Navigator>
          )}
      </Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} />
      </>
    ) : (
      <Tab.Screen name="Login" component={Login} />
    )}
    </Tab.Navigator>
  )
}


export default function App() {
  
  return (
    <UsuarioProvider>
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="FormScreen" component={FormScreen} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    </UsuarioProvider>
  );
}


