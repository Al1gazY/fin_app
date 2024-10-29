import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from 'react-native-vector-icons';
import StackNavigator from './StackNavigator';
import SummaryScreen from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Transactions') {
            return <MaterialIcons name="receipt" size={size} color={color} />;
          } else if (route.name === 'Summary') {
            return <FontAwesome name="line-chart" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#3498db', 
        tabBarInactiveTintColor: '#7f8c8d',
      })}
    >
      <Tab.Screen 
        name="Transactions" 
        component={StackNavigator} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Summary" 
        component={SummaryScreen} 
      />
    </Tab.Navigator>
  );
}
