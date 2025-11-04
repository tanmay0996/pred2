import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Trade } from "./screens/Trade";
import { TradeDesktop } from "./screens/TradeDesktop";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Hide loading screen after 3 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return isMobile ? <Trade /> : <TradeDesktop />;
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
