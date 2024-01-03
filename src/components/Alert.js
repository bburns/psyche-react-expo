// reusable alert component
// uses gluestack Modal

import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody
} from "@gluestack-ui/themed"
import { Heading, Icon, Text } from "@gluestack-ui/themed"
import { Button, ButtonText } from "@gluestack-ui/themed"
import { X } from "lucide-react-native"

export function useAlert() {
  const [showAlert, setShowAlert] = useState(false)
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  function showAlertFn({ title, text }) {
    setTitle(title)
    setText(text)
    setShowAlert(true)
  }

  return [showAlert, setShowAlert, showAlertFn]
}

export default function Alert({ title, text, showAlert, setShowAlert, children }) {
  return (
    <Modal isOpen={showAlert} onClose={() => setShowAlert(false)}>
      <ModalBackdrop />
      <ModalContent bg="$primary500">
        <ModalHeader>
          <Heading size="lg">{title}</Heading>
          <ModalCloseButton>
            <X />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button size="sm" onPress={() => setShowAlert(false)}>
            <ButtonText>Close</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
