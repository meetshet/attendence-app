import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            color: 'black',
            width: 310,
            height: 60,
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              marginLeft: 30,
              fontFamily: 'Ink free',
            }}>
            SCHOOL ATTENDENCE APP
          </Text>
        </TouchableOpacity>
        <AppContainer/>
      </View>
    );
  }
}
var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
SummaryScreen:SummaryScreen
})
const AppContainer=createAppContainer(AppNavigator);
