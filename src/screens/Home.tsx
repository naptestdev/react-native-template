import { FC } from "react";
import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Home: FC = () => {
  const navigation = useNavigation();

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
