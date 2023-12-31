import { Box, Button } from "@gluestack-ui/themed"
import { Text } from "@gluestack-ui/themed"
import { ImageBackground } from "react-native"
import { StatusBar } from "expo-status-bar"
import Header from "../components/Header"

// const image = require("../assets/backgrounds/pexels-min-an-920534.jpg") // local image
const image = require("../assets/backgrounds/pexels-pixabay-326055.jpg") // local image
// const image = { uri: "https://foo.com/assets/backgrounds/pexels-min-an-920534.jpg" } // remote image

//. move these to ImageBackground props
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
    <Box flex="1" flexDirection="column" alignItems="center" justifyContent="center" bg="black" fg="white">
      <Header />
      <ImageBackground source={image} style={styles.background}>
        <Button>Start notifications</Button>
        <Text>Image by foo</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </Box>
  )
}
