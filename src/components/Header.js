import React from "react"
import { Box, HStack, Input, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed"
import { SearchIcon } from "@gluestack-ui/themed"
import { Text } from "@gluestack-ui/themed"
import { Button, ButtonText, ButtonIcon, Image } from "@gluestack-ui/themed"
// import { Info, Layers, Plus, Search } from 'lucide-react-native';
// import HeaderTabs from "./header/HeaderTabs";
// import HomestayLogo from "./header/HomestayLogo";
// import ToggleMode from "./header/ToggleMode";
import UserProfile from "./UserProfile"

const logo = require("../assets/icons/icon.png") // local image
const Logo = () => <Image source={logo} size="xs" alt="Psyche logo" />

function about() {
  alert(`Psyche is an open-source mental health app.`)
}

const Header = React.memo(() => {
  return (
    <Box w="100%" bg="black">
      <Box w="100%">
        <HStack justifyContent="space-between" alignItems="center" w="100%" space="lg" px="$2">
          <Button size="md" variant="link">
            <ButtonIcon as={Logo} />
            <ButtonText color="lightgray">&nbsp;Psyche</ButtonText>
          </Button>
          <Button size="sm" variant="link" onPress={about}>
            <ButtonText color="lightgray" fontWeight="$medium">
              About
            </ButtonText>
          </Button>
        </HStack>
      </Box>
    </Box>
  )
})

export default Header
