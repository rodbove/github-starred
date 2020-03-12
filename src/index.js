import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import './config/ReactotronConfig';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#1b9fba" />
        <Routes />
      </NavigationContainer>
    );
  }
}

export default App;
