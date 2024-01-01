import { useState } from "react"
import { Box, HStack } from "@gluestack-ui/themed"
import { Button, ButtonText, ButtonIcon, Image } from "@gluestack-ui/themed"
import About from "../components/About"

const logo = require("../assets/icons/icon.png") // local image
const Logo = () => <Image source={logo} size="xs" alt="Psyche logo" />

export default function Header() {
  const [showAbout, setShowAbout] = useState(false)

  function clickAbout() {
    setShowAbout(true)
  }

  return (
    <Box w="100%" bg="black">
      <Box w="100%">
        <HStack justifyContent="space-between" alignItems="center" w="100%" space="lg" px="$2">
          <Button size="md" variant="link">
            <ButtonIcon as={Logo} />
            <ButtonText color="lightgray">&nbsp;Psyche</ButtonText>
          </Button>

          <Button size="sm" variant="link" onPress={clickAbout}>
            <ButtonText color="lightgray" fontWeight="$medium">
              About
            </ButtonText>
          </Button>

          <About showAbout={showAbout} setShowAbout={setShowAbout} />
        </HStack>
      </Box>
    </Box>
  )
}
