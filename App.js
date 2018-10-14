/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

type Props = {};
export default class App extends Component<Props> {

  /*
  * Defining state as in react.
  */
  state = {
      placeNameInput: '',
      places: []
  }

  onPlaceAdded = (placeName) => {

      this.setState(prevState => {
          return {
              places: prevState.places.concat(placeName)
          }
      });
  }

  onItemPressed = (indexToBeDeleted) => {
      // on Press of the item, we are trying to delete the item.

      this.setState(prevState => {
          return {
              places: prevState.places.filter((place, i) => {
                  return i !== indexToBeDeleted;
              })
          }
      });
  }

  render() {
    return (

        <View style={styles.container}>

            <PlaceInput onPlaceAdded={this.onPlaceAdded} />

            <PlaceList places={this.state.places} onItemPressed={this.onItemPressed}/>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      // by default, the flex direction is column
      flex: 1,
      paddingTop: 30,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  }
});
