// expo expects this file to be at project root

import { View } from "react-native"
import { StatusBar } from "expo-status-bar"
import styles from "./src/styles"
import { PsycheText, PsycheHeaderText } from "./src/components"

export default function App() {
  return (
    <View style={styles.container}>
      <PsycheHeaderText>Psyche</PsycheHeaderText>
      <PsycheText>An open-source mental health app</PsycheText>
      <StatusBar style="auto" />
    </View>
  )
}
