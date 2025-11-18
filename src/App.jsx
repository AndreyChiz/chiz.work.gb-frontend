import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import GlobalWrapper from "./components/global/GlobalWrapper";

import { UIProvider } from "./UIContext";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <UIProvider>
      <GlobalWrapper>

        <TopBar />
        <Header />
        <MainContent />
        <Footer />

      </GlobalWrapper>
    </UIProvider>
  )
}
