/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  /*
  * Defining state as in react.
  */
  state = {
      placeNameInput: '',
      places: []
  }

  textInputChangeHandler = (val) => {
      this.setState({
          placeNameInput: val
      });
  }

  handleButtonClick = () => {
      if(this.state.placeNameInput.trim() === "") {
          return;
      }

      this.setState(prevState => {
          return {
              places: prevState.places.concat(this.state.placeNameInput)
          }
      });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
            <TextInput
            placeholder="write your awesome place"
            onChangeText={this.textInputChangeHandler}
            style={styles.inputBox}
            />

            <Button
            title="Add"
            style={styles.inputButton}
            onPress={this.handleButtonClick}
            />
        </View>

        <View>
            {this.state.places.map(place => {
                return <Text key={place}> {place} </Text>;
            })}
        </View>
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
  },
  inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '90%',
      alignItems: 'center'
  },
  inputBox: {
      borderWidth: 1.5,
      height: 30,
      width: "90%",
      borderRadius: 5
  },
  inputButton: {
      borderWidth: 2,
      backgroundColor: '#000000'
  }
});
