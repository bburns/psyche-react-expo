import { useState, useRef } from "react"
import { Box, Button, ButtonText } from "@gluestack-ui/themed"
import { Text } from "@gluestack-ui/themed"
import { HStack, Switch } from "@gluestack-ui/themed"
import { ImageBackground } from "react-native"
import { StatusBar } from "expo-status-bar"
import Header from "../components/Header"
import * as notifs from "../helpers/notifs"

// background
const image = ""
// local images
// const image = require("../assets/backgrounds/vincent-guth-ISI5DlnYvuY-unsplash.jpg")
// const image = require("../assets/backgrounds/pexels-min-an-920534.jpg")
// const image = require("../assets/backgrounds/pexels-pixabay-326055.jpg")
// const image = require("../assets/backgrounds/purple_and_white_flowers_during_windy_day (720p).mp4")
// remote images
// const image = { uri: "https://foo.com/assets/backgrounds/pexels-min-an-920534.jpg" }

const styles = {
  background: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  }
}

const reminder = {
  title: "Psyche reminder",
  options: {
    body: `Take a mindful pause. Be an observer of your thoughts and feelings.`,
    icon: require("../assets/icons/icon.png")
  },
  schedule: {
    // every: "5 seconds"
    every: "minute"
    // every: "hour"
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
      <ImageBackground source={image} style={styles.background}>
        <HStack space="md">
          <Switch onToggle={onToggle} value={isEnabled} />
          <Text>Send notifications</Text>
        </HStack>
      </ImageBackground>
      <StatusBar style="auto" />
    </Box>
  )
}
