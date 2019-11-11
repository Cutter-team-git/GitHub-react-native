import React, { useState } from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import axios from "axios";

export default function homeScreen() {
  //declare const to using useState for usersInfo
  const [usersInfo, setUsersInfo] = useState("");

  //declare const to using useState for userInfo
  const [userInfo, setUserInfo] = useState();

  const setUserInformation = (event) => {
    setUsersInfo(event.nativeEvent.text);
  };

  const getUserInformation = () => {
    axios
      .get(`https://api.github.com/users/${usersInfo}`)
      .then(({ data }) => {
        // let incomingData = data;
        // console.log(data);
        setUserInfo(data);
      })
      .catch(() => {
        console.log("Not Found");
      });
  };

  return userInfo !== undefined ? (
    <GetUserInformation information={userInfo} />
  ) : (
    <View>
      <TextInput
        title="UserName ..."
        onChange={setUserInformation}
        placeholder="Enter UserName ..."
        style={{ height: 50 }}
      />
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

export function GetUserInformation(props) {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [result, setResult] = useState([]);
  const textInputPlayerOne = (event) => {
    setPlayerOne(event.nativeEvent.text);
  };

  const textInputPlayerTwo = (event) => {
    setPlayerTwo(event.nativeEvent.text);
  };
  const checkPlay = () => {
    axios
      .get(`https://api.github.com/users/${playerOne}`)
      .then((playerOneData) => {
        let playerGithubOneData = playerOneData.data;
        axios
          .get(`https://api.github.com/users/${playerTwo}`)
          .then((playerTwoData) => {
            let playerGithubTwoData = playerTwoData.data;
            // console.log(playerGithubTwoData.public_repos);
            // console.log(playerGithubTwoData);
            if (
              playerGithubTwoData.public_repos >
              playerGithubOneData.public_repos
            ) {
              setResult([playerGithubTwoData.avatar_url]);
            } else if (
              playerGithubTwoData.public_repos <
              playerGithubOneData.public_repos
            ) {
              setResult([playerGithubOneData.avatar_url]);
            } else {
              setResult([
                playerGithubOneData.avatar_url,
                playerGithubTwoData.avatar_url
              ]);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { login, avatar_url } = props.information;
  return (
    <View>
      <View>
        {/* {console.log(props.information)} */}
        <Image
          source={{ uri: avatar_url }}
          style={{ width: 100, height: 100 }}
        />
        <Text>{login}</Text>

        {/* <Text>Ahmad</Text> */}
      </View>
      <View>
        <TextInput onChange={textInputPlayerOne} placeholder="Player One" />
        <TextInput onChange={textInputPlayerTwo} placeholder="Player Two" />
        <Button title="Play" onPress={checkPlay} />
        {result.length !== 0
          ? result.map((image) => (
              <View key={Math.random() * 100}>
                <Text style={{fontWeight:"bold" , color:"yellow" , backgroundColor:"black"}}>The Winner IS </Text>
                <Image
                  source={{ uri: image }}
                  style={{ width: 100, height: 100 }}
                />
              </View>
            ))
          : null}
        {/* <Image
          source={{ uri: avatar_url }}
          style={{ width: 100, height: 100 }}
        /> */}
      </View>
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
