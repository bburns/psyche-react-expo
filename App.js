// note: expo expects this file to be at project root

// import { StatusBar } from "expo-status-bar"
// import styles from "./src/styles"

// GluestackUIProvider provides aliases and tokens throughout your app, using React's Context API.
import { GluestackUIProvider, Box, Heading, Text, View } from "@gluestack-ui/themed"
import { config as defaultConfig } from "@gluestack-ui/config"
import { createConfig } from "@gluestack-ui/themed"
import { StyleSheet, ImageBackground } from "react-native"

const image = require("./src/assets/backgrounds/pexels-min-an-920534.jpg") // local image
// const image = { uri: "https://foo.com/assets/backgrounds/pexels-min-an-920534.jpg" } // remote image

const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    fontSizes: {
      ...defaultConfig.tokens.fontSizes,
      newFontSize: 90
    }
    // other tokens
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "center"
  },
  heading: {
    color: "white",
    bold: true
  },
  text: {
    color: "lightgray"
  }
})

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      {/* <Box width="100%" justifyContent="center" alignItems="center" bg="$primary500">
      </Box> */}
      <Box style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          {/* <Text style={styles.text}>Elements</Text>
          <Text style={styles.text}>in Front of</Text>
          <Text style={styles.text}>Background</Text> */}
          <Heading style={styles.heading}>Psyche</Heading>
          <Text style={styles.text}>An open-source mental health app</Text>
        </ImageBackground>
      </Box>
    </GluestackUIProvider>
  )
}
