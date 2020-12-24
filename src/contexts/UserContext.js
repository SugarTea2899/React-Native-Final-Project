import { createContext } from "react";

export const UserContext = createContext({
    token: null,
    setContent: (token) => {},
    setLoading: (loading) => {},
});