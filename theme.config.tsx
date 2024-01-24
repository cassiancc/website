import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import {HeaderLogo} from "./components/HeaderLogo";

const config: DocsThemeConfig = {
  logo: <HeaderLogo />,
  project: {
    link: 'https://github.com/Sinytra/Connector',
  },
  chat: {
    link: 'https://discord.gg/mamk7z3TKZ',
  },
  docsRepositoryBase: 'https://github.com/Sinytra/website',
  footer: {
    text: 'Sinytra documentation',
  },
}

export default config
