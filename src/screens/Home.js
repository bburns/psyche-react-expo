import { useState, useRef } from "react"
import { Box } from "@gluestack-ui/themed"
import { Text } from "@gluestack-ui/themed"
import { HStack, Switch } from "@gluestack-ui/themed"
// import { Button, ButtonText } from "@gluestack-ui/themed"
import { StatusBar } from "expo-status-bar"
import Header from "../components/Header"
import Background from "../components/Background"
import * as notifs from "../helpers/notifs"

const reminder = {
  title: "Psyche reminder",
  options: {
    body: `Take a mindful pause. Be an observer of your thoughts and feelings.`,
    icon: require("../assets/icons/icon.png")
  },
  schedule: {
    // every: "5 seconds" //. handle number prefixes
    // every: "minute"
    every: "hour"
  }
}

export default function Home() {
  const [isEnabled, setIsEnabled] = useState(false)
  const timerRef = useRef(undefined)

  // toggle notifications on/off - value is t/f
  async function onToggle(value) {
    console.log("onToggle", value)
    if (value) {
      startTimer()
    } else {
      stopTimer()
    }
    setIsEnabled((previousState) => !previousState)
  }

  async function startTimer() {
    console.log("startTimer", timerRef)
    if (await notifs.checkPermissions()) {
      const timerId = notifs.scheduleNotification(reminder)
      timerRef.current = timerId
      if (timerId) {
        alert(`Reminder scheduled for every ${reminder.schedule.every}`)
      }
    }
  }

  async function stopTimer() {
    console.log("stopTimer", timerRef)
    const timerId = timerRef.current
    window.clearInterval(timerId)
    timerRef.current = undefined
    alert("Reminder cancelled")
  }

  return (
    <Box flex="1" flexDirection="column" alignItems="center" justifyContent="center" bg="$primary500" fg="white">
      <Header />
      <Background>
        <HStack space="md">
          <Switch onToggle={onToggle} value={isEnabled} />
          <Text>Send reminders every {reminder.schedule.every}</Text>
        </HStack>
      </Background>
      <StatusBar style="auto" />
    </Box>
  )
}
