import { createContext } from "react";
import * as theme from '../globals/Theme/light'

export const ThemeContext = createContext({
    theme: theme,
    setTheme: (isDark) => {}
})