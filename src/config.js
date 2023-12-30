// default theme - https://gluestack.io/ui/docs/theme-configuration/theme/default-tokens

import { config as defaultConfig } from "@gluestack-ui/config"
import { createConfig } from "@gluestack-ui/themed"
import { mergeDeep } from "./utils"

// config.tokens.fontSizes.newFontSize = 90
// config.components.Heading.theme.color = "$textLight0"
// config.components.Text.theme.color = "$textLight200"

// define prop overrides and use deepmerge

const overrides = {
  components: {
    Heading: {
      theme: {
        color: "$textLight0"
      }
    },
    Text: {
      theme: {
        color: "$textLight200"
      }
    }
  },
  tokens: {
    fontSizes: {
      newFontSize: 90
    }
  }
}

export const config = createConfig(mergeDeep(defaultConfig, overrides))
// console.log("config", config)
