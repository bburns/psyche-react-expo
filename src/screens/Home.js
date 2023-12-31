import { useState } from "react"
import { Box, Button, ButtonText } from "@gluestack-ui/themed"
import { Text } from "@gluestack-ui/themed"
import { HStack, Switch } from "@gluestack-ui/themed"
import { ImageBackground } from "react-native"
import { StatusBar } from "expo-status-bar"
import Header from "../components/Header"
import * as notifs from "../helpers/notifs"

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
  const [isEnabled, setIsEnabled] = useState(false)
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  async function onToggle(v) {
    console.log("onToggle", v)
    if (v) {
      if (await notifs.checkPermissions()) {
        notifs.createNotification()
      }
    }
    //. will this rerender the component?
    setIsEnabled((previousState) => !previousState)
  }

  return (
    <Box flex="1" flexDirection="column" alignItems="center" justifyContent="center" bg="black" fg="white">
      <Header />
      <ImageBackground source={image} style={styles.background}>
        {/* <Button onPress={onPress}>
          <ButtonText>Start notifications</ButtonText>
        </Button> */}
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
