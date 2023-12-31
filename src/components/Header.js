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

const Header = React.memo(() => {
  return (
    <Box w="100%">
      <Box w="100%">
        <HStack justifyContent="space-between" alignItems="center" w="100%" space="lg" px="$2">
          <Button size="md" variant="link">
            <ButtonIcon as={Logo} />
            <ButtonText color="white">&nbsp;Psyche</ButtonText>
          </Button>
          <Text color="gray">An open-source mental health app</Text>
          <Button
            size="sm"
            variant="link"
            onPress={() => {
              alert("hi")
            }}
          >
            <ButtonText color="white" fontWeight="$medium">
              About
            </ButtonText>
          </Button>
        </HStack>
      </Box>
    </Box>
  )
})

export default Header
