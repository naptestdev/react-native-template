import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import About from "./src/screens/About";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

export type NavigationProps = NativeStackNavigationProp<{
  Home: {};
  About: {};
}>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerBackTitle: "Back to home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
