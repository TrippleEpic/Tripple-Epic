import Divider from "../components/Divider/Divider";
import Header from "../components/Header/Header";
import { BetContextProvider } from "../context/BetContext";
import { KshContextProvider } from "../context/SelectedKshContext";
import { AuthContextProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <KshContextProvider>
        <BetContextProvider>
          <div className="bg-[#141a3a] h-screen overflow-scroll p-3 sm:p-4">
            <Header />
            <Divider />
            <Component {...pageProps} />
          </div>
        </BetContextProvider>
      </KshContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
