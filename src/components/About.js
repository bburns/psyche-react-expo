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

const link = "https://github.com/bburns/psyche-react-expo"

export default function About({ showAbout, setShowAbout }) {
  const ref = useRef(null)
  return (
    <Modal isOpen={showAbout} onClose={() => setShowAbout(false)} finalFocusRef={ref}>
      <ModalBackdrop />
      <ModalContent bg="$primary500">
        <ModalHeader>
          <Heading size="lg">Psyche</Heading>
          <ModalCloseButton>
            <X />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text>Psyche is an open-source mental health app.</Text>
          <Text></Text>
          <Text>
            See <a href={link}>{link}</a> for more information.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button size="sm" onPress={() => setShowAbout(false)}>
            <ButtonText>Close</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
