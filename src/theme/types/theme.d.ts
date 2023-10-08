import 'styled-components'

declare module 'styled-components' {
  export type TBreakPoints = {
    SM: number
    MD: number
    LG: number
  }

  export interface DefaultTheme {
    Color: {
      PRIMARY: string
      SECONDARY: string
      TERTIARY: string
      ACCENT: string
      SUCCESS_DEFAULT: string
      ERROR_DEFAULT: string
      OVERLAY_DARK: string
      OVERLAY_MEDIUM: string
      OVERLAY_LIGHT: string
    }
    Layout: {
      BREAKPOINT: TBreakPoints
      MAX_WIDTH: number
      COLUMNS: number
    }
  }
}
