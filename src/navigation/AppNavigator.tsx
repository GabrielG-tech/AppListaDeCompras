import React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import ConfigScreen from '../screens/ConfigScreen';

type DrawerParamList = {
  Home: undefined;
  Config: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const drawerScreenOptions: DrawerNavigationOptions = {
  drawerLabelStyle: { fontSize: 16 },
  drawerStyle: { backgroundColor: '#fff' },
  drawerActiveTintColor: '#999999',
};

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={drawerScreenOptions} 
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Config" component={ConfigScreen} />
    </Drawer.Navigator>
  );
}
