import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";

import { UIProvider } from "./UIContext";


export default function App() {
  return (
    <UIProvider>
      <TopBar />
      <Header />
    </UIProvider>
  )
}
