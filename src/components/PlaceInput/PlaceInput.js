import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  textInputChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  handleButtonClick = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);

  };

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
        borderRadius: 5,
        paddingLeft: "3%"
    },
    inputButton: {
        borderWidth: 2,
        backgroundColor: '#000000'
    }
});

export default PlaceInput;
