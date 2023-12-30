// note: expo expects this file to be at project root

// import { StatusBar } from "expo-status-bar"
// import styles from "./src/styles"

// GluestackUIProvider provides aliases and tokens throughout your app, using React's Context API.
import { GluestackUIProvider, Box, Heading, Text } from "@gluestack-ui/themed"
import { config as defaultConfig } from "@gluestack-ui/config"
import { createConfig } from "@gluestack-ui/themed"
import { ImageBackground } from "react-native"
const image = { uri: "https://legacy.reactjs.org/logo-og.png" }

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

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      {/* <Box width="100%" justifyContent="center" alignItems="center" height="100%"> */}
      {/* <ImageBackground source={image} resizeMode="cover" style={image}> */}
      <Box width="100%" justifyContent="center" alignItems="center" bg="$primary500">
        <Heading bold color="$light100">
          Psyche
        </Heading>
        <Text color="$light300">An open-source mental health app</Text>
      </Box>
      {/* </ImageBackground> */}
      {/* </Box> */}
    </GluestackUIProvider>
  )
}
