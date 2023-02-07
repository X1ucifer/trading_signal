import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    
        <Tab.Navigator
          initialRouteName="Home"
          shifting={true}
          activeColor="white"
          inactiveColor="grey"
          barStyle={{ backgroundColor: 'black' }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={"black"} size={26} />
            ),
            tabBarLabel: 'Home',
          }} />
          <Tab.Screen name="Analysis" component={""} options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="atom-variant" color={color} size={26} />
            ),
            tabBarLabel: 'Analysis',
          }} />
          <Tab.Screen name="Trading" component={""} options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="arrow-collapse" color={color} size={26} />
            ),
            tabBarLabel: 'Trading',
          }} />
          <Tab.Screen name="Wishlist" component={""} options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="cards-heart" color={color} size={26} />
            ),
            tabBarLabel: 'Wishlist',
          }} />
          <Tab.Screen name="Profile" component={""} options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-reactivate" color={color} size={26} />
            ),
            tabBarLabel: 'Profile',
          }} />
        </Tab.Navigator>
  
  );
}



export default MyTabs;
