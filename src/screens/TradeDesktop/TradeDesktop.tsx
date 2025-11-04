import {
  ChevronDownIcon,
  GiftIcon,
  InfoIcon,
  MoreHorizontalIcon,
  PlayCircleIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { motion } from "framer-motion";

const navigationTabs = [
  { id: "live", label: "Live & Upcoming", icon: true },
  { id: "winner", label: "Winner" },
  { id: "mvp", label: "MVP" },
  { id: "top3", label: "Top 3 teams" },
];

const orderBookSellData = [
  { price: "34.9¢", shares: "210,000" },
  { price: "34.9¢", shares: "210,000" },
  { price: "34.9¢", shares: "210,000" },
  { price: "34.9¢", shares: "210,000" },
  { price: "34.9¢", shares: "210,000" },
];

const orderBookBuyData = [
  { price: "34.9¢", shares: "210,000" },
  { price: "34.9¢", shares: "210,000" },
  { price: "34.9¢", shares: "210,000" },
  { price: "34.9¢", shares: "210,000" },
  { price: "34.9¢", shares: "210,000" },
];

const percentageOptions = [
  { value: "25", label: "25%" },
  { value: "50", label: "50%" },
  { value: "100", label: "100%" },
];

const positionTabs = [
  { id: "positions", label: "Positions" },
  { id: "orders", label: "Open orders" },
  { id: "history", label: "Trade History" },
];

export const TradeDesktop = (): JSX.Element => {
  const MotionButton = motion(Button as any);
  const [tradeType, setTradeType] = useState<string>("long");
  const [activeNavTab, setActiveNavTab] = useState<string>("live");
  const [activePositionTab, setActivePositionTab] = useState<string>("positions");
  const [reduceOnly, setReduceOnly] = useState<boolean>(false);
  const [orderType, setOrderType] = useState("market");
  const [currencyType, setCurrencyType] = useState("usdc");
  const [amount, setAmount] = useState("");
  const [positions, setPositions] = useState([
    {
      id: 1,
      team: "Arsenal",
      type: "long",
      profit: "+$200",
      percentage: "12.5%",
      avgPrice: "53.5¢",
      markPrice: "53.5¢",
      shares: "3,200",
      currentValue: "$12,200"
    }
  ]);
  const [orderIdCounter, setOrderIdCounter] = useState(2);
  const [isOrderTypeOpen, setIsOrderTypeOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const prob = 0.3;
  const price = 0.30;
  const availableUSDC = 265;
  const maxShares = availableUSDC / price;
  const isUSDC = currencyType === "usdc";
  const availableAmount = isUSDC ? availableUSDC : maxShares;
  const availableText = isUSDC ? "$265 Available" : `${Math.floor(maxShares).toLocaleString()} Shares Available`;
  const step = isUSDC ? 10 : 100;
  const invest = parseFloat(amount || "0");
  const multiplier = tradeType === "long" ? 1.3 : 1 / (1 - prob);
  const toWin = invest * multiplier;
  const inputPlaceholder = isUSDC ? "$0.00" : "0";
  const inputValue = amount ? (isUSDC ? `$${amount}` : amount) : "";

  const handlePercentageClick = (percentage: string) => {
    const percent = parseInt(percentage);
    const calculatedAmount = availableAmount * (percent / 100);
    setAmount(calculatedAmount.toFixed(isUSDC ? 2 : 0));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (isUSDC) {
      value = value.replace(/[^0-9.]/g, '');
    } else {
      value = value.replace(/[^0-9]/g, '');
    }
    setAmount(value);
  };

  const handleMinusClick = () => {
    const newAmount = Math.max(0, invest - step);
    setAmount(newAmount.toFixed(isUSDC ? 2 : 0));
  };

  const handlePlusClick = () => {
    const newAmount = invest + step;
    setAmount(newAmount.toFixed(isUSDC ? 2 : 0));
  };

  const handlePlaceOrder = () => {
    if (invest <= 0) return;
    
    const shares = isUSDC ? Math.floor(invest / price) : invest;
    const currentValue = isUSDC ? `$${invest.toFixed(2)}` : `$${(invest * price).toFixed(2)}`;
    
    const newPosition = {
      id: orderIdCounter,
      team: "MANC",
      type: tradeType,
      profit: "+$0.00",
      percentage: "0%",
      avgPrice: "30¢",
      markPrice: "30¢",
      shares: shares.toString(),
      currentValue: currentValue
    };
    
    setPositions([...positions, newPosition]);
    setOrderIdCounter(orderIdCounter + 1);
    setAmount("");
  };

  const handleClosePosition = (id: number) => {
    setPositions(positions.filter(pos => pos.id !== id));
  };

  return (
    <div className="bg-gray-900 w-full min-h-screen flex flex-col">
      <style>{`
        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }
      `}</style>
      

      <div className="flex-1 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="h-[1146.73px] w-[814px] rounded-[407px/573.37px] blur-[52.45px] [background:radial-gradient(50%_50%_at_50%_26%,rgba(98,98,98,0.3)_0%,rgba(45,106,126,0.3)_52%,rgba(22,43,50,0.37)_99%)]" />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-6">
            <nav className="flex items-center justify-between p-4 mb-4 backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)] rounded-lg shadow-blur-60">
              <div className="inline-flex items-center gap-2">
                <img className="w-8 h-8" alt="Frame" src="/frame-806.svg" />
                <MotionButton
                  variant="ghost"
                  className="inline-flex gap-2 px-2 py-1 h-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <div className="inline-flex items-center gap-1">
                    <div className="flex w-5 h-5 items-center gap-[3.33px] p-0.5 bg-white rounded-sm">
                      <img className="w-[15px] h-[15px]" alt="Image" src="/image-4.png" />
                    </div>
                    <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)]">
                      EPL 2025
                    </div>
                  </div>
                  <ChevronDownIcon className="w-6 h-6" />
                </MotionButton>
              </div>

              <div className="inline-flex items-center gap-2 rounded-sm overflow-hidden">
                <div className="relative p-[2px] rounded overflow-hidden">
                  <div className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0deg_320deg,#8cf056_320deg_360deg)]" />
                  <MotionButton
                    variant="outline"
                    className="inline-flex justify-center gap-1 px-3 py-2 rounded-sm border-0 h-auto bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)] relative"
                    whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(140,240,86,0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <img className="w-4 h-4" alt="Image" src="/image-18.png" />
                    <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)]">
                      Earn Rewards
                    </div>
                  </MotionButton>
                </div>
                <MotionButton
                  variant="outline"
                  size="icon"
                  className="p-1 rounded-sm overflow-hidden border border-solid border-[#7878801f] h-auto bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)]"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <div className="w-[25.88px] h-[25.88px] rounded-[86.13px] border-[0.94px] border-solid border-white">
                    <div className="w-[92.75%] h-[92.75%] rounded-xl bg-[linear-gradient(180deg,rgba(157,253,227,1)_0%,rgba(227,131,216,1)_100%)]" />
                  </div>
                </MotionButton>
              </div>
            </nav>

            <nav className="flex items-center gap-4 px-4 py-3 mb-4 border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]">
              {navigationTabs.map((tab) => (
                <MotionButton
                  key={tab.id}
                  variant="ghost"
                  onClick={() => setActiveNavTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 h-auto px-2 bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent focus-visible:ring-0 ${
                    tab.id === activeNavTab ? "text-gray-200" : "text-gray-400"
                  }`}
                  whileHover={{ y: -1, color: "#e5e7eb" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <div className="gap-1 inline-flex items-center justify-center">
                    {tab.icon && tab.id === "live" && <PlayCircleIcon className="w-4 h-4" />}
                    {!tab.icon && (
                      <div className="flex w-4 h-4 items-center justify-center gap-[3.2px] p-[1.92px] bg-white rounded">
                        <img className="w-[14.4px] h-[14.4px]" alt="Image" src="/image-4.png" />
                      </div>
                    )}
                    <div className="text-[length:var(--title-2-semi-bold-font-size)] leading-[var(--title-2-semi-bold-line-height)] font-title-2-semi-bold font-[number:var(--title-2-semi-bold-font-weight)]">
                      {tab.label}
                    </div>
                  </div>
                </MotionButton>
              ))}
            </nav>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <section className="flex items-start justify-between p-4 mb-4 bg-[rgb(19,28,30)] rounded-lg">
                  <div className="inline-flex items-center gap-2">
                    <div className="flex w-9 h-9 items-center justify-center gap-2.5 rounded-sm">
                      <div className="w-[32.0px] h-[32.0px] bg-[url(/chelsea.png)] bg-cover bg-[50%_50%]" />
                    </div>
                    <div className="inline-flex flex-col items-start">
                      <div className="font-title-2-semi-bold font-[number:var(--title-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--title-2-semi-bold-font-size)]">
                        MANC
                      </div>
                      <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff99] text-[length:var(--body-2-medium-font-size)]">
                        1,389,829M Vol.
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-start justify-end gap-2">
                    <div className="inline-flex flex-col items-end">
                      <div className="font-title-2-semi-bold font-[number:var(--title-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--title-2-semi-bold-font-size)]">
                        30% chance
                      </div>
                      <div className="inline-flex items-start justify-end">
                        <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff99] text-[length:var(--body-2-medium-font-size)]">
                          $100→
                        </div>
                        <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)]">
                          $130
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="grid grid-cols-2 gap-4">
                  <section className="flex flex-col items-start px-0 py-3 border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-gradient-to-r from-[rgb(8,15,17)] via-[rgb(12,19,22)] to-[rgb(8,15,17)]">
                    <div className="flex flex-col items-start gap-2.5 px-4 py-0 w-full">
                      <ToggleGroup
                        type="single"
                        value={tradeType}
                        onValueChange={(value) => value && setTradeType(value)}
                        className="flex items-center p-px w-full bg-fillspressed rounded-sm border border-solid border-[#ffffff0f]"
                      >
                        <ToggleGroupItem
                          value="long"
                          className="flex justify-center px-3 py-1 flex-1 grow rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] items-center shadow-blur-60 data-[state=on]:bg-[#8cf056] data-[state=on]:text-[#111111] data-[state=off]:bg-transparent data-[state=off]:text-[#ffffffd1]"
                        >
                          <div className="font-[number:var(--body-2-semi-bold-font-weight)] font-body-2-semi-bold text-[length:var(--body-2-semi-bold-font-size)]">
                            Long/Buy
                          </div>
                        </ToggleGroupItem>
                        <ToggleGroupItem
                          value="short"
                          className="flex justify-center px-2 py-1 flex-1 grow rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] items-center shadow-blur-60 data-[state=on]:bg-[#8cf056] data-[state=on]:text-[#111111] data-[state=off]:bg-transparent data-[state=off]:text-[#ffffffd1]"
                        >
                          <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[length:var(--body-2-semi-bold-font-size)]">
                            Short/Sell
                          </div>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </div>

                    <div className="flex flex-col items-start gap-4 p-4 w-full">
                      <div className="relative w-full">
                        <MotionButton 
                          variant="outline" 
                          onClick={() => setIsOrderTypeOpen(!isOrderTypeOpen)}
                          className="flex h-8 items-center justify-between pl-2 pr-1 py-0 w-full rounded-sm border border-solid border-[#7878801f] bg-[rgb(29,29,29)] hover:border-[#8cf056]/50 hover:bg-[#ffffff0a] transition-colors"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)]">
                            {orderType === "market" ? "Market Price" : "Limit Price"}
                          </div>
                          <ChevronDownIcon className="w-4 h-4" />
                        </MotionButton>
                        {isOrderTypeOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-[rgb(29,38,40)] border border-[#ffffff33] rounded-sm z-50">
                            <button 
                              onClick={() => { setOrderType("market"); setIsOrderTypeOpen(false); }}
                              className="w-full px-2 py-2 text-left text-gray-200 text-sm hover:bg-[#ffffff1a] transition-colors"
                            >
                              Market Price
                            </button>
                            <button 
                              onClick={() => { setOrderType("limit"); setIsOrderTypeOpen(false); }}
                              className="w-full px-2 py-2 text-left text-gray-200 text-sm hover:bg-[#ffffff1a] transition-colors"
                            >
                              Limit Price
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="relative w-full">
                        <MotionButton 
                          variant="outline" 
                          onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                          className="flex h-8 items-center justify-between pl-2 pr-1 py-0 w-full rounded-sm border border-solid border-[#7878801f] bg-[rgb(29,29,29)] hover:border-[#8cf056]/50 hover:bg-[#ffffff0a] transition-colors"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)]">
                            {currencyType === "usdc" ? "USDC" : "Shares"}
                          </div>
                          <ChevronDownIcon className="w-4 h-4" />
                        </MotionButton>
                        {isCurrencyOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-[rgb(29,38,40)] border border-[#ffffff33] rounded-sm z-50">
                            <button 
                              onClick={() => { setCurrencyType("usdc"); setIsCurrencyOpen(false); }}
                              className="w-full px-2 py-2 text-left text-gray-200 text-sm hover:bg-[#ffffff1a] transition-colors"
                            >
                              USDC
                            </button>
                            <button 
                              onClick={() => { setCurrencyType("shares"); setIsCurrencyOpen(false); }}
                              className="w-full px-2 py-2 text-left text-gray-200 text-sm hover:bg-[#ffffff1a] transition-colors"
                            >
                              Shares
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-end w-full">
                        <div className="flex items-center gap-2.5 px-0 py-0.5 w-full">
                          <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff99] text-[length:var(--body-2-medium-font-size)]">
                            {availableText}
                          </div>
                        </div>

                        <div className="flex h-8 items-center gap-2 px-1 py-0 w-full rounded-sm border border-solid border-[#7878801f] hover:border-[#8cf056]/50 transition-colors">
                          <button
                            type="button"
                            onClick={handleMinusClick}
                            className="inline-flex items-center justify-center w-6 h-6 rounded-sm text-[#ffffffcc] hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Decrease amount"
                          >
                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <Input
                            placeholder={inputPlaceholder}
                            value={inputValue}
                            onChange={handleAmountChange}
                            className="flex-1 font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)] border-0 bg-transparent p-0 h-auto text-center hover:bg-[#ffffff0a] transition-colors"
                          />
                          <button
                            type="button"
                            onClick={handlePlusClick}
                            className="inline-flex items-center justify-center w-6 h-6 rounded-sm text-[#ffffffcc] hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Increase amount"
                          >
                            <PlusIcon className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="flex flex-col items-end gap-2.5 px-0 py-2 w-full">
                          <div className="inline-flex items-start gap-2">
                            {percentageOptions.map((option) => (
                              <MotionButton
                                key={option.value}
                                variant="outline"
                                onClick={() => handlePercentageClick(option.value)}
                                className="inline-flex items-center justify-center gap-2.5 px-1 py-0.5 rounded-sm border border-solid border-[#7878801f] h-auto bg-transparent hover:bg-[#ffffff0a] hover:border-[#8cf056]/50 shadow-none focus-visible:ring-0"
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              >
                                <div className="[font-family:'Inter',Helvetica] font-medium text-[#ffffff66] text-xs">
                                  {option.label}
                                </div>
                              </MotionButton>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-4 py-2 w-full border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#7878801f]">
                      <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-gray-200 text-[length:var(--body-2-medium-font-size)]">
                        Reduce only
                      </div>
                      <Checkbox checked={reduceOnly} onCheckedChange={(checked) => setReduceOnly(checked as boolean)} className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-start justify-between px-4 py-0 w-full flex-1">
                      <div className="flex items-start justify-end gap-2 pt-4 pb-0 px-0 w-full">
                        <div className="inline-flex flex-col items-start">
                          <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-gray-200 text-[length:var(--body-2-semi-bold-font-size)]">
                            To Win 🎉
                          </div>
                          <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-gray-300 text-[length:var(--body-2-medium-font-size)]">
                            Avg Price 30¢
                          </div>
                        </div>
                        <div className="flex-1 font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-gray-400 text-[length:var(--body-1-medium-font-size)] text-right">
                          ${toWin.toFixed(2)}
                        </div>
                      </div>

                      <MotionButton 
                        onClick={handlePlaceOrder}
                        className="flex justify-center px-3 py-2 w-full bg-[#8cf056] hover:bg-[#8cf056] active:bg-[#8cf056] focus:bg-[#8cf056] focus-visible:ring-0 rounded-sm items-center h-auto mt-4"
                        whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(140,240,86,0.35)", filter: "brightness(1.05)" }}
                        whileTap={{ scale: 0.98, y: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <div className="flex-1 font-[number:var(--button-bold-font-weight)] text-[#111111] font-button-bold text-[length:var(--button-bold-font-size)]">
                          {tradeType === "long" ? "Long MANC" : "Short MANC"}
                        </div>
                      </MotionButton>
                    </div>
                  </section>

                  <aside className="flex flex-col items-start border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-gradient-to-r from-[rgb(8,15,17)] via-[rgb(12,19,22)] to-[rgb(8,15,17)]">
                    <div className="flex items-center justify-end gap-[121px] px-4 py-3 w-full border-b [border-bottom-style:solid] border-[#7878801f]">
                      <div className="flex items-center justify-between flex-1">
                        <div className="w-20 font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-gray-400 text-[length:var(--body-2-medium-font-size)]">
                          Price
                        </div>
                        <div className="w-20 text-right font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-gray-400 text-[length:var(--body-2-medium-font-size)]">
                          Shares
                        </div>
                      </div>
                    </div>

                    {orderBookSellData.map((order, index) => (
                      <motion.div key={`sell-${index}`} className="h-8 items-center justify-end w-full flex" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }} transition={{ duration: 0.15 }}>
                        <div className="flex h-8 items-center justify-end gap-4 px-4 py-0 flex-1">
                          <div className="flex items-center justify-between flex-1">
                            <div className="font-label-regular font-[number:var(--label-regular-font-weight)] text-colorsred text-[length:var(--label-regular-font-size)]">
                              {order.price}
                            </div>
                            <div className="font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffff99] text-[length:var(--body-2-regular-font-size)] text-right">
                              {order.shares}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    <div className="flex flex-col items-start gap-2.5 px-4 py-2 w-full border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#7878801f] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-blur-40">
  <div className="flex items-center justify-between w-full">
    <div className="font-body-1-semi-bold font-[number:var(--body-1-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-1-semi-bold-font-size)]">
      29.9¢
    </div>
    <GiftIcon className="w-4 h-4 text-white" />
  </div>
</div>

                    {orderBookBuyData.map((order, index) => (
                      <motion.div key={`buy-${index}`} className="h-8 items-center justify-end w-full flex" whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }} transition={{ duration: 0.15 }}>
                        <div className="flex h-8 items-center justify-end gap-4 px-4 py-0 flex-1">
                          <div className="flex items-center justify-between flex-1">
                            <div className="font-label-regular font-[number:var(--label-regular-font-weight)] text-[#8cf056] text-[length:var(--label-regular-font-size)]">
                              {order.price}
                            </div>
                            <div className="font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffff99] text-[length:var(--body-2-regular-font-size)] text-right">
                              {order.shares}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </aside>
                </div>
              </div>

              <div className="col-span-4">
                <section className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#7878801f] bg-[rgb(19,28,30)] rounded-t-lg">
                  <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)]">
                    EPL
                  </div>
                  <MotionButton
                    variant="ghost"
                    size="icon"
                    className="w-6 h-6 hover:bg-[#ffffff1a] transition-colors"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <MoreHorizontalIcon className="w-4 h-4" />
                  </MotionButton>
                </section>

                <Tabs
                  value={activePositionTab}
                  onValueChange={setActivePositionTab}
                  className="flex flex-col items-start gap-2.5 p-4 self-stretch w-full border-b [border-bottom-style:solid] border-[#7878801f] relative flex-[0_0_auto] bg-gradient-to-r from-[rgb(8,15,17)] via-[rgb(12,19,22)] to-[rgb(8,15,17)]"
                >
                  <TabsList className="inline-flex items-center gap-4 bg-transparent p-0 h-auto">
                    {positionTabs.map((tab) => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className="gap-2.5 inline-flex items-center justify-center !bg-transparent p-0 h-auto data-[state=active]:shadow-none data-[state=active]:!bg-transparent data-[state=active]:text-inherit hover:!bg-transparent hover:text-gray-200 transition-colors"
                      >
                        <div
                          className={`text-[length:var(--body-2-semi-bold-font-size)] leading-[var(--body-2-semi-bold-line-height)] font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] ${
                            activePositionTab === tab.id ? "text-[#ffffffd1]" : "text-[#ffffff66]"
                          }`}
                        >
                          {tab.label}
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
                
                {activePositionTab === "positions" && (
                  <div className="border border-[#7878801f] rounded-b-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-gradient-to-r from-[rgb(8,15,17)] via-[rgb(12,19,22)] to-[rgb(8,15,17)] max-h-[400px] overflow-y-auto">
                    {positions.map((position, idx) => (
                      <motion.section key={position.id} className={`flex flex-col items-start gap-4 p-4 relative ${idx < positions.length - 1 ? 'border-b border-[#7878801f]' : ''}`} whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }} transition={{ duration: 0.15 }}>
                        <div className="absolute top-4 left-0 w-0.5 h-6">
                          <div className={`h-full rounded-[20px] ${position.type === "long" ? "bg-[#8cf056]" : "bg-red-500"}`} />
                        </div>

                        <div className="flex items-center justify-between w-full pl-2">
                          <div className="flex flex-col items-start justify-center">
                            <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)]">
                              {position.team}
                            </div>
                            <div className="inline-flex items-start">
                              <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)]">
                                Winner {" "}
                              </div>
                              <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)] capitalize">
                                {position.type}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end justify-center">
                            <div className={`font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[length:var(--body-2-medium-font-size)] text-right ${position.type === "long" ? "text-[#8cf056]" : "text-red-500"}`}>
                              {position.profit}
                            </div>
                            <div className="flex items-center justify-end">
                              <img className="w-4 h-4" alt="Custom icons" src="/custom-icons.svg" />
                              <div className={`font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[length:var(--body-2-regular-font-size)] text-right ${position.type === "long" ? "text-[#8cf056]" : "text-red-500"}`}>
                                {position.percentage}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-start gap-2 w-full">
                          <div className="flex items-center justify-between w-full">
                            <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)]">
                              Avg. price
                            </div>
                            <div className="font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-regular-font-size)]">
                              {position.avgPrice}
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)]">
                              Mark price
                            </div>
                            <div className="font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-regular-font-size)]">
                              {position.markPrice}
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)]">
                              Shares
                            </div>
                            <div className="font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-regular-font-size)]">
                              {position.shares}
                            </div>
                          </div>
                          <div className="flex items-center justify-between w-full">
                            <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)]">
                              Current value
                            </div>
                            <div className="font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-regular-font-size)]">
                              {position.currentValue}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 w-full">
                          <MotionButton 
                            onClick={() => handleClosePosition(position.id)}
                            className="flex justify-center px-3 py-2 flex-1 bg-[#78788033] rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] shadow-blur-60 h-auto hover:bg-[#78788050] transition-colors"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98, y: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            <div className="font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] font-body-2-semi-bold text-[length:var(--body-2-semi-bold-font-size)]">
                              Market close
                            </div>
                          </MotionButton>
                          <MotionButton 
                            onClick={() => handleClosePosition(position.id)}
                            className="flex justify-center px-3 py-2 flex-1 bg-[#78788033] rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] shadow-blur-60 h-auto hover:bg-[#78788050] transition-colors"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98, y: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          >
                            <div className="font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] font-body-2-semi-bold text-[length:var(--body-2-semi-bold-font-size)]">
                              Limit close
                            </div>
                          </MotionButton>
                        </div>
                      </motion.section>
                    ))}
                  </div>
                )}
                {activePositionTab !== "positions" && (
                  <div className="border border-[#7878801f] rounded-b-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-gradient-to-r from-[rgb(8,15,17)] via-[rgb(12,19,22)] to-[rgb(8,15,17)] max-h-[400px] overflow-y-auto p-4">
                    <div className="text-gray-400 text-sm">No data available</div>
                  </div>
                )}

                <div className="flex items-center justify-around px-4 py-3 mt-4 border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] shadow-blur-60 bg-[rgb(15,15,15)]">
                  <div className="flex items-center gap-2 w-full">
                    <Button variant="outline" className="flex justify-between px-2 py-1 flex-1 bg-[rgb(29,29,29)] hover:bg-[rgb(29,29,29)] active:bg-[rgb(29,29,29)] focus:bg-[rgb(29,29,29)] focus-visible:ring-0 rounded items-center h-auto border-[#7878801f] hover:border-[#8cf056]/50 transition-colors">
                      <div className="inline-flex items-center gap-1">
                        <div className="flex w-5 h-5 items-center gap-[3.33px] p-0.5 bg-white rounded-sm">
                          <img className="w-[15px] h-[15px]" alt="Image" src="/image-4.png" />
                        </div>
                        <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)]">
                          Manchester city
                        </div>
                      </div>
                      <ChevronDownIcon className="w-6 h-6" />
                    </Button>

                    <Button variant="outline" className="flex gap-2 px-2 py-1.5 flex-1 bg-[rgb(29,29,29)] hover:bg-[rgb(29,29,29)] active:bg-[rgb(29,29,29)] focus:bg-[rgb(29,29,29)] focus-visible:ring-0 rounded items-center h-auto border-[#7878801f] hover:border-[#8cf056]/50 transition-colors">
                      <InfoIcon className="w-5 h-5" />
                      <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)]">
                        View team info
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};