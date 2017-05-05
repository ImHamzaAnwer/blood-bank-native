import React from 'react';
import Expo from 'expo';
import {Header, Left,Body, Right,Title} from 'native-base'
import { StyleSheet, Text, View } from 'react-native';
import Spinner from './src/components/common/Spinner';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Router from './src/Router';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC17aXIik4Q7PhSafsxoAoOVCD1jdkQIuE",
      authDomain: "native-auth-app.firebaseapp.com",
      databaseURL: "https://native-auth-app.firebaseio.com",
      projectId: "native-auth-app",
      storageBucket: "native-auth-app.appspot.com",
      messagingSenderId: "759048171847"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        {
          this.state.fontLoaded ? (
            <View style={styles.container}>
              <View style={styles.toolbarStyles} />
              <Router />
            </View>) : <Spinner />
        }
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  toolbarStyles: {
    height: 26,
    backgroundColor: "#ce2b36",
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});