import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Dev components and providers
import Routes from '../src/routes/index';
import {AuthProvider} from '../src/contexts/auth';
import {MarketProvider} from './contexts/marketContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <MarketProvider>
            <Routes />
          </MarketProvider>
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
