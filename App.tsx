// App.tsx
import 'react-native-gesture-handler';        
import { enableScreens } from 'react-native-screens';  
enableScreens();                             

import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/context/ThemeContext';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    // <GestureHandlerRootView style={styles.container}>
    //   <SafeAreaProvider>
        <NavigationContainer>
          <ThemeProvider>
            <AppNavigator />
          </ThemeProvider>
        </NavigationContainer>
      // </SafeAreaProvider>
    //</GestureHandlerRootView> 
  );
}
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); */