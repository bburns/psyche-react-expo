import { useState } from "react"
import { Box, Button, ButtonText } from "@gluestack-ui/themed"
import { Text } from "@gluestack-ui/themed"
import { HStack, Switch } from "@gluestack-ui/themed"
import { ImageBackground } from "react-native"
import { StatusBar } from "expo-status-bar"
import Header from "../components/Header"
import * as notifs from "../helpers/notifs"

// local images
const image = require("../assets/backgrounds/vincent-guth-ISI5DlnYvuY-unsplash.jpg")
// const image = require("../assets/backgrounds/pexels-min-an-920534.jpg")
// const image = require("../assets/backgrounds/pexels-pixabay-326055.jpg")

// remote images
// const image = { uri: "https://foo.com/assets/backgrounds/pexels-min-an-920534.jpg" }

export default function Home() {
  const [isEnabled, setIsEnabled] = useState(false)

  // toggle notifications on/off - value is t/f
  async function onToggle(value) {
    if (value) {
      if (await notifs.checkPermissions()) {
        notifs.createNotification()
      }
    }
    setIsEnabled((previousState) => !previousState)
  }

  //. move these to ImageBackground props
  const styles = {
    background: {
      flex: 1,
      width: "100%",
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
    }
  }
  return (
    <Box flex="1" flexDirection="column" alignItems="center" justifyContent="center" bg="black" fg="white">
      <Header />
      <ImageBackground source={image} style={styles.background}>
        <HStack space="md">
          <Switch onToggle={onToggle} value={isEnabled} />
          <Text>Send notifications</Text>
        </HStack>
        {/* <Text>Image by foo</Text> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </Box>
  )
}
