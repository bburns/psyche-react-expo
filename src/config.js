// import styles from "./src/styles"

// import { config as defaultConfig } from "@gluestack-ui/config"
// import { createConfig } from "@gluestack-ui/themed"

// const config = createConfig({
//   ...defaultConfig,
//   tokens: {
//     ...defaultConfig.tokens,
//     fontSizes: {
//       ...defaultConfig.tokens.fontSizes,
//       newFontSize: 90
//     }
//     // other tokens
//   }
// })
// console.log("config", config)

import { config } from "@gluestack-ui/config"

config.tokens.fontSizes.newFontSize = 90
config.components.Heading.theme.color = "$textLight0"
config.components.Text.theme.color = "$textLight200"
// config.components.Heading = {
//   ...config.components.Heading,
//   variants: {
//     ...config.components.Heading.variants,
//     newVariant: {
//       fontSize: "newFontSize"
//     }
//   }
// }

export { config }
