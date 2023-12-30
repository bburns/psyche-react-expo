// note: expo expects this file to be at project root

// import { StatusBar } from "expo-status-bar"

// GluestackUIProvider provides aliases and tokens throughout your app, using React's Context API.
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Box, Heading, Text, View } from "@gluestack-ui/themed"
import { ImageBackground } from "react-native"
import { config } from "./src/config"
import { styles } from "./src/styles"

// const image = require("./src/assets/backgrounds/pexels-min-an-920534.jpg") // local image
const image = require("./src/assets/backgrounds/pexels-pixabay-326055.jpg") // local image
// const image = { uri: "https://foo.com/assets/backgrounds/pexels-min-an-920534.jpg" } // remote image

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box style={styles.container} bg="$primary500" fg="$primary200">
        <ImageBackground source={image} style={styles.image}>
          <Heading>Psyche</Heading>
          <Text>An open-source mental health app</Text>
        </ImageBackground>
      </Box>
    </GluestackUIProvider>
  )
}
