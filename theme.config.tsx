import React from 'react'
import {DocsThemeConfig, useConfig} from 'nextra-theme-docs'
import {HeaderLogo} from "./components/HeaderLogo";

const config: DocsThemeConfig = {
  logo: <HeaderLogo/>,
  project: {
    link: 'https://github.com/Sinytra/Connector',
  },
  chat: {
    link: 'https://discord.sinytra.org',
  },
  docsRepositoryBase: 'https://github.com/Sinytra/website',
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The Sinytra Project.
        </p>
      </div>
    )
  },
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark'
  },
  head: () => {
    const { title } = useConfig();

    return <>
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  }
}

export default config
