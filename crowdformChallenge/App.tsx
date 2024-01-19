/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/app/store';
import AppNavigation from './src/navigations/AppNavigation/AppNavigation';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/style/theme';
import {GlobalContainer} from './src/components/global/GlobalContainer';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={'default'} />
        <GlobalContainer>
          <AppNavigation />
        </GlobalContainer>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
