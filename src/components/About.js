import { useRef } from "react"
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from "@gluestack-ui/themed"
import { Heading, Icon, Text } from "@gluestack-ui/themed"
import { Button, ButtonText } from "@gluestack-ui/themed"
import { X } from "lucide-react-native"

export default function About({ showAbout, setShowAbout }) {
  const ref = useRef(null)
  return (
    <Modal isOpen={showAbout} onClose={() => setShowAbout(false)} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent bg="$primary500">
        <ModalHeader>
          <Heading size="lg">Psyche</Heading>
          <ModalCloseButton>
            {/* <Icon as={CloseIcon} /> */}
            <X />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>Psyche is an open-source mental health app.</Text>
          <Text></Text>
          <Text>See https://github.com/bburns/psyche-react-expo for more information.</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            // variant="outline"
            size="sm"
            // action="secondary"
            // mr="$3"
            onPress={() => setShowAbout(false)}
          >
            <ButtonText>Okay</ButtonText>
          </Button>
          {/* <Button
            size="sm"
            action="positive"
            borderWidth="$0"
            onPress={() => {
              setShowAbout(false)
            }}
          >
            <ButtonText>Explore</ButtonText>
          </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
