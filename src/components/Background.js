import { ImageBackground } from "react-native"

// background
// const image = ""

// local images
const image = require("../assets/backgrounds/vincent-guth-ISI5DlnYvuY-unsplash.jpg") // cliffs
// const image = require("../assets/backgrounds/pexels-min-an-920534.jpg") // stars
// const image = require("../assets/backgrounds/pexels-pixabay-326055.jpg") // butterflies
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

export default function Background({ children }) {
  return (
    <ImageBackground source={image} style={styles.background}>
      {children}
    </ImageBackground>
  )
}
