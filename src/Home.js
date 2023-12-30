import { Box, Heading, Text } from "@gluestack-ui/themed"
import { ImageBackground } from "react-native"
import { StatusBar } from "expo-status-bar"

// const image = require("./assets/backgrounds/pexels-min-an-920534.jpg") // local image
const image = require("./assets/backgrounds/pexels-pixabay-326055.jpg") // local image
// const image = { uri: "https://foo.com/assets/backgrounds/pexels-min-an-920534.jpg" } // remote image

const styles = {
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
}

export default function Home() {
  return (
    <Box flex="1" flexDirection="column" alignItems="center" justifyContent="center" bg="$primary500" fg="$primary200">
      <ImageBackground source={image} style={styles.background}>
        <Heading>Psyche</Heading>
        <Text>An open-source mental health app</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </Box>
  )
}
