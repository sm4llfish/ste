import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import renderIf from '../utils/renderif'

const Sound = require('react-native-sound');

export default class SleepScreen extends Component {
    static navigationOptions = {
      title: 'Oversikt',
    };

    constructor(props){
      super(props);

      this.playSound = () => {
        console.log('play sound button pressed');
        if(this.state.playingSound){
          if(!this.state.isSoundPlaying){
            return;
          }

          if(!this.state.isSoundPaused){
            this.state.playingSound.pause();
            this.setState({isSoundPaused: true, showPlay: true});
          } else  {
            this.state.playingSound.play();
            this.setState({isSoundPaused: false, showPlay: false});
          }

          return;
        }

        if(!this.state.playingFileName || this.state.playingFileName === ''){
          return;
        }

        const s = new Sound(this.state.playingFileName, Sound.MAIN_BUNDLE, (e) => {
          if(e){
            console.log('error', e);
          } else {
            s.setSpeed(1);
            s.setNumberOfLoops(1);
            console.log('duration',s.getDuration());
            console.log('is loaded',s.isLoaded());
            console.log('volum', s.getVolume());
            s.play(() => s.release());
          }
        });
        this.setState({playingSound: s, isSoundPlaying: true, showPlay: false, duration: s.getDuration()});
      };

      this.stopSound = () => {
        if(!this.state.playingSound){
          return;
        }

        this.state.playingSound.stop().release();
        this.setState({playingSound: null, isSoundPlaying: false, isSoundPaused: false, showPlay: true, duration: -1});
      };

      this.currentPlayingTime = () => {
        this.state.playingSound.getCurrentTime();
      };

      this.state = {
        playingSound: undefined,
        isSoundPlaying: false,
        isSoundPaused: false,
        showPlay: true,
        duration: -1,
        playingFileName: 'mareritt.mp3',
       };
    }

    render (){
      return(
        <View>
          <Text>Ting å vite om søvn</Text>
          {renderIf(!this.state.playingSound,
            <Picker selectedValue={this.state.playingFileName}
              onValueChange={(name) => this.setState({playingFileName: name})}>
                <Picker.Item label='Mareritt' value='mareritt.mp3' />
                <Picker.Item label='Pusteøvelse' value='pusteoevelse_478.mp3' />
            </Picker>
          )}
          <Button title={this.state.showPlay ? 'Spill' : 'Pause'} onPress={() => this.playSound()} />
          {renderIf(this.state.playingSound, <Button title='Stopp' onPress={this.stopSound} />)}
        </View>
      );
    }
}
