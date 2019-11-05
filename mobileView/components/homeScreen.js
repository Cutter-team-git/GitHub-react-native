import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";

export default function homeScreen() {
  //declare const to using useState for usersInfo
  const [usersInfo, setUsersInfo] = useState("");

  //declare const to using useState for userInfo
  const [userInfo, setUserInfo] = useState();

  const setUserInformation = event => {
    setUsersInfo(event.nativeEvent.text);
  };

  const getUserInformation = () => {
    axios
      .get(`https://api.github.com/users/${usersInfo}`)
      .then(response => {
        let incomingData = response.data;
        setUserInfo({ ...userInfo, incomingData });
      })
      .catch(() => {
        console.log("Not Found");
      });
  };

  return (
    <View>
      <TextInput title="UserName ..." onChange={setUserInformation} />
      <Text>----------------------------------------</Text>
      <Text>----------------------------------------</Text>
      <Button onPress={getUserInformation} title="Enter One" />
      <Text>----------------------------------------</Text>
      {userInfo !== undefined ? (
        <View>
          <Text>{userInfo.incomingData.login}</Text>
          <Text>{userInfo.incomingData.id}</Text>
        </View>
      ) : null}
    </View>
  );
}

// class homeScreen extends Component {
//   state = { userName: "" };
//   //function to get user information by axios from github api
//   getUserInfo = () => {
//     axios
//       .get(`https://api.github.com/users/${this.state.userName}`)
//       .then(userInfo => {
//           this.setState()
//       })
//       .catch(error => {
//         console.log(`
//         {
//               message: Not Found,
//               documentation_url: https://developer.github.com/v3/users/#get-a-single-user
//         }`);
//       });
//   };

//   //get input data
//   inputValue = event => {
//     this.setState({ userName: event.nativeEvent.text });
//   };
//   render() {
//     return (
//       <View>
//         <TextInput
//           placeholder="Enter Username ..."
//           onChange={this.inputValue}
//         />
//         <Button title="Enter" onPress={this.getUserInfo} />
//       </View>
//     );
//   }
// }

// export default homeScreen;

