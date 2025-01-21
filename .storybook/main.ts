import type { StorybookConfig } from "@storybook/react-vite"

const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|)",
    "./tokens/**/*.stories.@(js|jsx|ts|tsx|)",
    "./tokens/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
} satisfies StorybookConfig
export default config
