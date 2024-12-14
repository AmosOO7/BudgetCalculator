import { Image, StyleSheet, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import "../../global.css";

export default function HomeScreen() {
  return (
    <View className="m-10" style={{ backgroundColor: "#fff", flex: 1 }}>
      <Text>Hello There!!!</Text>
    </View>
  );
}
