import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";

class User extends Component {
  check = () => {
    console.log(this.props.navigation.state.params);
  };
  state = {};
  render() {
    return (
      <View>
        <Text>Bitar</Text>
        <Button title="Check" onPress={this.check} />
      </View>
    );
  }
}

export default User;
