import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Button, Text, View } from "react-native";

import { NavigationProps } from "../../App";

const Home: FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>Home page</Text>
      <Button
        onPress={() => navigation.navigate("About")}
        title="Go to About page"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
