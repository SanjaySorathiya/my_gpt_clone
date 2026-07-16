"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

<<<<<<< HEAD
/**
 * Wraps the app with `next-themes` for light/dark/system theme switching.
 */
=======
>>>>>>> c48641e9d6c8187ac2b054bf4000104ec73355b8
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}