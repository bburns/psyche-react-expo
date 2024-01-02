import { ImageBackground } from "react-native"

const styles = {
  background: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  }
}

export default function Background({ background, children }) {
  return (
    <ImageBackground source={background.image} style={styles.background}>
      {children}
    </ImageBackground>
  )
}
