// expo expects this file to be at project root

// import { View } from "react-native"
// import { StatusBar } from "expo-status-bar"
// import styles from "./src/styles"
// import { PsycheText, PsycheHeaderText } from "./src/components"

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <PsycheHeaderText>Psyche</PsycheHeaderText>
//       <PsycheText>An open-source mental health app</PsycheText>
//       <StatusBar style="auto" />
//     </View>
//   )
// }

// GluestackUIProvider provides aliases and tokens throughout your app, using React's Context API.
import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" justifyContent="center" alignItems="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
    </GluestackUIProvider>
  )
}
