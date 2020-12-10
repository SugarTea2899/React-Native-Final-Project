import { createContext } from "react";

export const UserContext = createContext({
    token: '',
    info: null,
    setContent: (token, info) => {}
});