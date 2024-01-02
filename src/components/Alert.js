//. maybe can just use Modal?

import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogBody
} from "@gluestack-ui/themed"
import { Heading, Icon, Text } from "@gluestack-ui/themed"
import { Button, ButtonText } from "@gluestack-ui/themed"
import { X } from "lucide-react-native"

export default function Alert({ title, showAlert, setShowAlert, children }) {
  return (
    <AlertDialog isOpen={showAlert} onClose={() => setShowAlert(false)}>
      <AlertDialogBackdrop />
      <AlertDialogContent bg="$primary500">
        <AlertDialogHeader>
          <Heading size="lg">{title}</Heading>
          <AlertDialogCloseButton>
            <X />
          </AlertDialogCloseButton>
        </AlertDialogHeader>
        <AlertDialogBody>{children}</AlertDialogBody>
        <AlertDialogFooter>
          <Button size="sm" onPress={() => setShowAlert(false)}>
            <ButtonText>Close</ButtonText>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
