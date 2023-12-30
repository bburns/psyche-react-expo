import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import styles from "./src/styles"
import { PsycheText, PsycheHeaderText } from "./src/components"

export default function App() {
  return (
    <View style={styles.container}>
      <PsycheHeaderText>Psyche</PsycheHeaderText>
      <PsycheText>Open up App.js to start working on your app!</PsycheText>
      <StatusBar style="auto" />
    </View>
  )
}
