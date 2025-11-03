import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Trade } from "./screens/Trade";
import { TradeDesktop } from "./screens/TradeDesktop";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <Trade /> : <TradeDesktop />;
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
