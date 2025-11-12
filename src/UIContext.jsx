import { createContext } from "react";
import { fetchUIData } from "./api/mock/mockUiData";

export const UIContext = createContext(null);

export function UIProvider({ children }) {
    const ui = fetchUIData().ui; // берем только ui

    return <UIContext.Provider value={ui}>{children}</UIContext.Provider>;
}
