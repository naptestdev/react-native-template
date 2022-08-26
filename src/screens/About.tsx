import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Text, View } from "react-native";

const About: FC = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>About page</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default About;
