import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Divider from "../components/Divider/Divider";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { BetContextProvider } from "../context/BetContext";
import { KshContextProvider } from "../context/SelectedKshContext";
import { AuthContextProvider } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    if (
      router.pathname === "/login" ||
      router.pathname === "/signup" ||
      router.pathname === "/forgotPassword"
    ) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [router.pathname]);
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AUBn1AQG1ZLytlQDz6fYHxxh1K4jvTmkpYZCscYGeZjZHnupssuYRNepw4oJnGhs1rk3D8zWu32-7ayy",
      }}
    >
      <AuthContextProvider>
        <KshContextProvider>
          <BetContextProvider>
            <div className="bg-[#141a3a]">
              {showSidebar ? (
                <Sidebar setShowSidebar={setShowSidebar} />
              ) : (
                <>
                  {showHeader && (
                    <>
                      <Header setShowSidebar={setShowSidebar} />
                    </>
                  )}

                  <Component {...pageProps} />
                </>
              )}
            </div>
          </BetContextProvider>
        </KshContextProvider>
      </AuthContextProvider>
    </PayPalScriptProvider>
  );
}

export default MyApp;
