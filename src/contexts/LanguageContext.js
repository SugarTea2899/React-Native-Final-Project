import { createContext } from "react";
import * as language from '../globals/EngConstants';

export const LanguageContext = createContext({
    languageConstant: language,
    setLanguage: (isEnglish) => {}
})