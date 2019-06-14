/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,DeviceEventEmitter} from 'react-native';
import firebase from 'react-native-firebase';


/* import React, {
  DeviceEventEmitter // will emit events that you can listen to
} from 'react-native';
 */


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var mSensorManager = require('NativeModules').SensorManager;


type Props = {};
export default class App extends Component<Props> {


  constructor(props){
    super(props);
    const ref = firebase.database().ref('boards');


    mSensorManager.startAccelerometer(100); // To start the accelerometer with a minimum delay of 100ms between events.
    DeviceEventEmitter.addListener('Accelerometer', function (data) {
      /**
      * data.x
      * data.y
      * data.z
      **/
     this.setState({x:data.x,y:data.y,z:data.z});
    });
    //mSensorManager.stopAccelerometer();
   /*  ref.set(
      { author: 'bar' ,
        description:'dcerv',
        title:'sdcds'
    }); */
  }
  
  


  
  
  render() {
    return (

     
      <View style={styles.container}>

        <Value name="x" value={this.state.x} />
        <Value name="y" value={this.state.y} />
        <Value name="z" value={this.state.z} />

     

        



        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//console.log(firebase.database().app.name); // '[DEFAULT]'