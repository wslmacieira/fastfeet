import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import Profile from '~/pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import AppRoutes from './App.Routes';

export default function Routes(signedIn = false) {
  return !signedIn ? (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  ) : (
    <>
      <StatusBar backgroundColor="#999" barStyle="dark-content" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#8d41a8',
          style: { paddingTop: 20 },
        }}
      >
        <Tab.Screen
          name="Entregas"
          component={AppRoutes}
          options={{
            title: 'Entregas',
            tabBarIcon: ({ tintColor }) => (
              <Icon name="reorder" size={24} color={tintColor} />
            ),
          }}
        />
        <Tab.Screen
          name="Meu Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Icon name="account-circle" size={24} color={tintColor} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
