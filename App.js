import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Manager from './components/manager';
import Passwordlist from './components/passwordlist';
import { DataProvider } from './components/dataprovider';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Passwords" component={Passwordlist} options={{
            tabBarLabel: 'Passwords',
            tabBarIcon:({ focused, color, size }) => (
              <Image
              source={
                focused
                ?require('./assets/logo1.png')
                :require('./assets/logo1.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
              />
            ),
          }}
          />
          <Tab.Screen name="Manager" component={Manager} options={{
            tabBarLabel: 'Manage',
            tabBarIcon:({ focused, color, size }) => (
              <Image
              source={
                focused
                ?require('./assets/logo2.png')
                :require('./assets/logo2.png')
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
              />
            ),
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
// <Tab.Screen name="Manager" component={Manager}/>