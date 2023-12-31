import React from "react"
import { Box, HStack, Input, InputField, InputIcon, InputSlot } from "@gluestack-ui/themed"
import { SearchIcon } from "@gluestack-ui/themed"
import { Button, ButtonText, ButtonIcon, Image } from "@gluestack-ui/themed"
// import { Info, Layers, Plus, Search } from 'lucide-react-native';
// import HeaderTabs from "./header/HeaderTabs";
// import HomestayLogo from "./header/HomestayLogo";
// import ToggleMode from "./header/ToggleMode";
import UserProfile from "./UserProfile"

const logo = require("../assets/icons/icon.png") // local image
const Logo = () => <Image source={logo} size="xs" />

const Header = React.memo(() => {
  return (
    <Box>
      {/* big screen */}
      <Box
        px="$16"
        w="100%"
        borderBottomWidth={1}
        display="none"
        sx={{
          "@md": {
            display: "flex"
          },
          _light: { borderColor: "$borderLight100" },
          _dark: { borderColor: "$borderDark900" }
        }}
      >
        <HStack alignItems="center" justifyContent="space-between" mx="auto" w="100%">
          <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false}>
            <ButtonIcon as={Logo} />
            <ButtonText>Psyche</ButtonText>
          </Button>

          {/* <HeaderTabs /> */}

          {/* <HStack space="lg" alignItems="center" pr="$1.5">
            <UserProfile />
          </HStack> */}
        </HStack>
      </Box>
      {/* small screen */}
      <Box
        p="$5"
        sx={{
          "@md": {
            display: "none"
          }
        }}
        w="100%"
      >
        <Input variant="rounded" size="sm" w="100%">
          <InputField placeholder="Anywhere • Any week • Add guests" />
          <InputSlot bg="$primary500" borderRadius="$full" h="$6" w="$6" m="$1.5">
            <InputIcon as={SearchIcon} color="white" size="sm" />
          </InputSlot>
        </Input>
      </Box>
    </Box>
  )
})

export default Header
