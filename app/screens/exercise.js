import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

export default class ExerciseScreen extends Component {
    static navigationOptions = {
      title: 'Oversikt',
    };
    render (){
      const {navigate} = this.props.navigation;
      return(
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={styles.bold}>Flere øvelser</Text>
        </View>
      );
    }
}

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
  }
});
