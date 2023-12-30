import { Box, Heading, Text } from "@gluestack-ui/themed"
import { ImageBackground } from "react-native"
import { StatusBar } from "expo-status-bar"
import { styles } from "./src/styles"

// const image = require("./assets/backgrounds/pexels-min-an-920534.jpg") // local image
const image = require("./assets/backgrounds/pexels-pixabay-326055.jpg") // local image
// const image = { uri: "https://foo.com/assets/backgrounds/pexels-min-an-920534.jpg" } // remote image

export default function Home() {
  return (
    <Box style={styles.container} bg="$primary500" fg="$primary200">
      <ImageBackground source={image} style={styles.image}>
        <Heading>Psyche</Heading>
        <Text>An open-source mental health app</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </Box>
  )
}
