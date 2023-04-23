import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Manager from './components/manager';
import Passwordlist from './components/passwordlist';
import { DataProvider } from './components/dataprovider';

const Tab = createBottomTabNavigator();

export default function App() {;
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Passwords" component={Passwordlist}/>
          <Tab.Screen name="Manager" component={Manager}/>
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}