// note: expo expects this file to be at project root

// gluestack provides aliases and tokens throughout app, using react's context api.

import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "./src/config"
import Home from "./src/Home"

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  )
}
