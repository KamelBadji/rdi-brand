'use client'

import React, { createContext, useCallback, use, useEffect, useState } from 'react'

import type { Theme, ThemeContextType } from './types'

import canUseDOM from '@/utilities/canUseDOM'
import { defaultTheme, themeLocalStorageKey } from './shared'

const initialContext: ThemeContextType = {
  setTheme: () => null,
  theme: undefined,
}

const ThemeContext = createContext(initialContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme | undefined>(
    canUseDOM ? (document.documentElement.getAttribute('data-theme') as Theme) : undefined,
  )

  const setTheme = useCallback((themeToSet: Theme | null) => {
    const nextTheme = themeToSet || defaultTheme

    setThemeState(nextTheme)
    window.localStorage.setItem(themeLocalStorageKey, nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', defaultTheme)
    window.localStorage.setItem(themeLocalStorageKey, defaultTheme)
    setThemeState(defaultTheme)
  }, [])

  return <ThemeContext value={{ setTheme, theme }}>{children}</ThemeContext>
}

export const useTheme = (): ThemeContextType => use(ThemeContext)
