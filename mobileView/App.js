import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./components/homeScreen";
import User from "./components/user";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>GitHub-fullStack-react-native</Text> */}
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const App = createAppContainer(MainNavigator);

export default App;
