import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';
import { getActiveChildNavigationOptions } from 'react-navigation';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator screenOptions={{
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
      headerStyle: { backgroundColor: '#1b9fba' },
      headerTintColor: '#FFF'
      }}>
      <Stack.Screen name="Usuários" component={Main} />
      <Stack.Screen
        name="User"
        component={User}
        options={({ route }) => ({ title: route.params.user.name })}
      />
      <Stack.Screen
        name="Repository"
        component={Repository}
        options={({ route }) => ({ title: route.params.repository.name })}
      />
    </Stack.Navigator>
  );
}

export default Routes;
