
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, StyleSheet, Text } from 'react-native';
import GalleryScreen from './screens/GalleryScreen';
import GalleryDetailScreen from "./screens/GalleryDetailScreen";
import CreateProfileScreen from "./screens/CreateProfileScreen";
import ProfileScreen from './screens/ProfileScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Gallery") {
            icon = "view-gallery-outline"
          } else if (route.name === "Profile") {
            icon = "account"
          }
          return <MaterialCommunityIcons name={icon} size={24} color={focused ? "black" : "gray"} />
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>

        <Tab.Screen name="Gallery" component={StackNavigator} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="GalleryScreen">
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GalleryDetailScreen" component={GalleryDetailScreen} options={{
        headerBackTitle: 'Back',
      }} />
    </Stack.Navigator>

  );
}


function ProfileStackNavigator() {
  return (<ProfileStack.Navigator initialRouteName='ProfileScreen' >
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="CreateProfileScreen" component={CreateProfileScreen} options={{
      headerBackTitle: 'Back',
    }} />
  </ProfileStack.Navigator>)
}