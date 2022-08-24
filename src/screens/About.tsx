import { FC } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const About: FC = () => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text>About page</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default About;
