import React, { useEffect, } from 'react';
import { View, StatusBar } from 'react-native';

import MainNavigator from './navigator';

const App = () =>
{
  return (
    <View style={{ flex: 1, }}>
      <MainNavigator />

      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
    </View>
  );
};
export default App;
