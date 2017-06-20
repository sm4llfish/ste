/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import SleepScreen from './app/screens/sleep';
import TraumaScreen, { AboutTriggersScreen } from './app/screens/trauma';
import ExerciseScreen from './app/screens/exercise';

class HomeScreen extends Component {
  static navigationOptions = {
  };

  render() {
    const {navigate } = this.props.navigation;
    return (
      <View style={{flex:1, flexDirection: 'column'}}>
        <View style={styles.size1}>
          <Text style={styles.buttonText} onPress={() => navigate('Sleep')}>Søvn</Text>
        </View>
        <View style={styles.size2}>
          <Text style={styles.buttonText} onPress={() => navigate('Trauma')}>Traumer</Text>
        </View>
        <View style={styles.size3}>
          <Text style={styles.buttonText} onPress={() => navigate('Exercise')}>Øvelser</Text>
        </View>
      </View>
    );
  }
}

const STE = StackNavigator({
  Home: {screen: HomeScreen},
  Sleep: {screen: SleepScreen},
  Trauma: {screen: TraumaScreen},
  AboutTriggers: {screen: AboutTriggersScreen},
  Exercise: {screen: ExerciseScreen},
});

const styles = StyleSheet.create({
  bold:{
    fontWeight: 'bold'
  },
  red: {
    color: 'lightgrey'
  },
  header:{
    flex:1,
    alignItems:'flex-end',
    margin:10
  },
  size1: {
    flex: 10,
    alignItems: 'center',
    backgroundColor: 'powderblue',
    justifyContent: 'center',
  },
  size2:{
    flex: 10,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    justifyContent: 'center'
  },
  size3:{
    flex: 10,
    alignItems: 'center',
    backgroundColor: 'steelblue',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize:35,
    color:'snow'
  }
});

AppRegistry.registerComponent('STE', () => STE);
