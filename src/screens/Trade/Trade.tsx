import { ChevronDown, Gift, Info, MoreHorizontal, PlayCircle } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

const positionDetails = [
  { label: "Avg. price", value: "53.5¢" },
  { label: "Mark price", value: "53.5¢" },
  { label: "Shares", value: "3,200" },
  { label: "Current value", value: "$12,200" },
];

const bottomNavItems = [
  {
    id: "markets",
    label: "Markets",
    icon: "/remix-icons-line-editor-list-check-2.svg",
  },
  {
    id: "trade",
    label: "Trade",
    icon: "/remix-icons-line-finance-funds-line.svg",
    active: true,
  },
  {
    id: "portfolio",
    label: "$0.00",
    icon: "/remix-icons-line-business-bar-chart-box-line.svg",
  },
  {
    id: "more",
    label: "More",
    icon: "/remix-icons-line-editor-align-center.svg",
  },
];

export const Trade = (): JSX.Element => {
  const [tradeType, setTradeType] = useState("long");
  const [activeNavTab, setActiveNavTab] = useState("live");
  const [activePositionTab, setActivePositionTab] = useState("positions");
  const [reduceOnly, setReduceOnly] = useState(false);

  return (
    <div className="bg-gray-900 w-full min-w-[412px] h-screen flex overflow-hidden">
      <div className="flex w-[412px] h-screen relative flex-col">
       
        <div className="relative w-[412px] flex-1 overflow-y-auto pb-[180px]">
          <div className="absolute top-0 left-0 w-[412px] h-[811px] flex items-center justify-center bg-gray-900 overflow-hidden pointer-events-none">
            <div className="mt-[-540.3px] h-[1146.73px] w-[814px] rounded-[407px/573.37px] blur-[52.45px] [background:radial-gradient(50%_50%_at_50%_26%,rgba(98,98,98,0.3)_0%,rgba(45,106,126,0.3)_52%,rgba(22,43,50,0.37)_99%)]" />
          </div>

          <div className="flex flex-col w-[412px] items-start relative">
            <nav className="flex items-center justify-between p-4 relative self-stretch w-full backdrop-blur-[30px] bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)]">
              <div className="inline-flex items-center gap-2">
                <img
                  className="relative w-8 h-8"
                  alt="Frame"
                  src="/frame-806.svg"
                />
                <Button variant="ghost" className="gap-2 px-2 py-1 h-auto">
                  <div className="inline-flex items-center gap-1">
                    <div className="flex w-5 h-5 items-center gap-[3.33px] p-0.5 bg-white rounded-sm">
                      <img
                        className="relative w-[15px] h-[15px]"
                        alt="Image"
                        src="/image-4.png"
                      />
                    </div>
                    <div className="text-gray-200 text-sm font-semibold whitespace-nowrap">
                      EPL 2025
                    </div>
                  </div>
                  <ChevronDown className="w-6 h-6" />
                </Button>
              </div>

              <div className="inline-flex items-center gap-2">
                <Button variant="outline" className="gap-1 px-3 py-2 h-auto border-[#7878801f] bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)]">
                  <img
                    className="relative w-4 h-4"
                    alt="Image"
                    src="/image-18.png"
                  />
                  <div className="text-gray-200 text-sm font-semibold whitespace-nowrap">
                    Earn Rewards
                  </div>
                </Button>
                <Button variant="outline" size="icon" className="p-1 h-auto border-[#7878801f] bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)]">
                  <div className="relative w-[25.88px] h-[25.88px] mt-[-0.94px] mb-[-0.94px] ml-[-0.94px] mr-[-0.94px] rounded-[86.13px] border-[0.94px] border-solid border-white">
                    <div className="w-[92.75%] h-[92.75%] rounded-xl bg-[linear-gradient(180deg,rgba(157,253,227,1)_0%,rgba(227,131,216,1)_100%)]" />
                  </div>
                </Button>
              </div>
            </nav>

            <nav className="flex w-[412px] items-center gap-4 px-4 py-3 border-t border-b border-[#7878801f] bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]">
              {navigationTabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant="ghost"
                  onClick={() => setActiveNavTab(tab.id)}
                  className={`gap-2 h-auto px-0 ${tab.id === activeNavTab ? "text-gray-200" : "text-gray-400"}`}
                >
                  {tab.icon && tab.id === "live" && <PlayCircle className="w-4 h-4" />}
                  {!tab.icon && (
                    <div className="flex w-4 h-4 items-center justify-center gap-[3.2px] p-[1.92px] bg-white rounded">
                      <img
                        className="relative w-[14.4px] h-[14.4px] mt-[-1.12px] mb-[-1.12px] ml-[-1.12px] mr-[-1.12px]"
                        alt="Image"
                        src="/image-4.png"
                      />
                    </div>
                  )}
                  <div className="text-sm font-semibold whitespace-nowrap">{tab.label}</div>
                </Button>
              ))}
            </nav>

            <section className="flex w-[412px] items-start justify-between p-4 backdrop-blur-[30px] bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)]">
              <div className="inline-flex items-center gap-2">
                <div className="flex w-9 h-9 items-center justify-center gap-2.5 rounded-sm">
                  <div className="relative w-[32.0px] h-[32.0px] bg-[url(/chelsea.png)] bg-cover bg-[50%_50%]" />
                </div>
                <div className="inline-flex flex-col items-start">
                  <div className="text-gray-200 text-sm font-semibold">MANC</div>
                  <div className="text-gray-400 text-xs">1,389,829M Vol.</div>
                </div>
              </div>

              <div className="inline-flex flex-col items-end">
                <div className="text-gray-200 text-sm font-semibold">30% chance</div>
                <div className="text-xs">
                  <span className="text-gray-400">$100→</span>
                  <span className="text-gray-200">$130</span>
                </div>
              </div>
            </section>

            <section className="w-[412px] flex border-t border-b border-[#7878801f] bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]">
              <div className="flex flex-col items-start px-0 py-3 flex-1">
                <div className="flex flex-col items-start gap-2.5 px-4 py-0 w-full">
                  <ToggleGroup
                    type="single"
                    value={tradeType}
                    onValueChange={(value) => value && setTradeType(value)}
                    className="flex items-center p-px w-full rounded-sm border border-[#ffffff0f]"
                  >
                    <ToggleGroupItem
                      value="long"
                      className="flex justify-center px-3 py-1 flex-1 rounded-sm data-[state=on]:bg-[#8cf056] data-[state=on]:text-[#111111] data-[state=off]:bg-transparent data-[state=off]:text-gray-200"
                    >
                      <div className="text-sm font-semibold whitespace-nowrap">Long/Buy</div>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="short"
                      className="flex justify-center px-2 py-1 flex-1 rounded-sm data-[state=on]:bg-[#8cf056] data-[state=on]:text-[#111111] data-[state=off]:bg-transparent data-[state=off]:text-gray-200"
                    >
                      <div className="text-sm font-semibold">Short/Sell</div>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className="flex flex-col items-start gap-4 p-4 w-full">
                  <Button variant="outline" className="flex h-8 items-center justify-between pl-2 pr-1 py-0 w-full rounded-sm border-[#ffffff33] h-auto bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]">
                    <div className="text-gray-200 text-sm">Market Price</div>
                    <ChevronDown className="w-4 h-4" />
                  </Button>

                  <Button variant="outline" className="flex h-8 items-center justify-between pl-2 pr-1 py-0 w-full rounded-sm border-[#ffffff33] h-auto bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]">
                    <div className="text-gray-200 text-sm">USDC</div>
                    <ChevronDown className="w-4 h-4" />
                  </Button>

                  <div className="flex flex-col items-end w-full">
                    <div className="flex items-center gap-2.5 py-0.5 w-full">
                      <div className="text-gray-400 text-sm">$265 Available</div>
                    </div>

                    <div className="flex h-8 items-center gap-2 px-1 py-0 w-full rounded-sm border border-[#1B2A30]">
                      <img
                        className="relative w-6 h-6"
                        alt="Custom icons"
                        src="/custom-icons-3.svg"
                      />
                      <Input placeholder="$0.00" className="flex-1 text-gray-400 text-sm text-center border-0 bg-transparent p-0 h-auto" />
                      <img
                        className="relative w-6 h-6"
                        alt="Add line"
                        src="/add-line.svg"
                      />
                    </div>

                    <div className="flex flex-col items-end gap-2.5 py-2 w-full">
                      <div className="inline-flex items-start gap-2">
                        {percentageOptions.map((option) => (
                          <Button key={option.value} variant="outline" className="px-1 py-0.5 h-auto rounded-sm border-[#ffffff33] bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]">
                            <div className="text-gray-400 text-xs">{option.label}</div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-2 w-full border-t border-b border-[#7878801f]">
                  <div className="text-gray-200 text-sm">Reduce only</div>
                  <Checkbox checked={reduceOnly} onCheckedChange={(checked) => setReduceOnly(checked as boolean)} className="w-6 h-6 border-white" />
                </div>

                <div className="flex flex-col items-start justify-between px-4 py-0 flex-1 w-full">
                  <div className="flex items-start justify-end gap-2 pt-4 pb-0 w-full">
                    <div className="inline-flex flex-col items-start">
                      <div className="text-gray-200 text-sm font-semibold">To Win 🎉</div>
                      <div className="text-gray-300 text-sm">Avg Price 30¢</div>
                    </div>
                    <div className="flex-1 text-gray-400 text-right">$0</div>
                  </div>

                  <Button className="flex justify-center px-3 py-2 w-full bg-[#8cf056] rounded-sm h-auto mt-4">
                    <div className="flex-1 text-[#111111] font-bold text-center">Long MANC</div>
                  </Button>
                </div>
              </div>

              <aside className="flex flex-col w-[180px] border-l border-[#7878801f]">
                <div className="flex w-[180px] items-center px-4 py-3 border-b border-[#7878801f]">
                  <div className="flex items-center justify-between flex-1">
                    <div className="w-20 text-gray-400 text-sm">Price</div>
                    <div className="w-20 -ml-3.5 text-right text-gray-400 text-sm">Shares</div>
                  </div>
                </div>

                {orderBookSellData.map((order, index) => (
                  <div key={`sell-${index}`} className="h-8 flex items-center w-full">
                    <div className="flex h-8 items-center gap-4 px-4 flex-1">
                      <div className="flex items-center justify-between flex-1">
                        <div className="text-red-500 text-sm">{order.price}</div>
                        <div className="text-gray-400 text-sm text-right">{order.shares}</div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col items-start gap-2.5 px-4 py-2 w-full border-t border-b border-[#7878801f] backdrop-blur-[20px]">
                  <div className="flex items-center justify-between w-full">
                    <div className="text-gray-200 text-base font-semibold">29.9¢</div>
                    <Gift className="w-4 h-4" />
                  </div>
                </div>

                {orderBookBuyData.map((order, index) => (
                  <div key={`buy-${index}`} className="h-8 flex items-center w-full">
                    <div className="flex h-8 items-center gap-4 px-4 flex-1">
                      <div className="flex items-center justify-between flex-1">
                        <div className="text-[#8cf056] text-sm">{order.price}</div>
                        <div className="text-gray-400 text-sm text-right">{order.shares}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </aside>
            </section>

            <section className="flex items-center justify-between px-4 py-3 w-full border-b border-[#7878801f] bg-[rgb(19,28,30)]">
              <div className="text-gray-200 text-sm">EPL</div>
              <Button variant="ghost" size="icon" className="w-6 h-6 h-auto">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </section>

            <Tabs value={activePositionTab} onValueChange={setActivePositionTab} className="flex flex-col items-start gap-2.5 p-4 w-full border-b border-[#7878801f] bg-gradient-to-r from-[rgb(8,15,17)] via-[rgb(12,19,22)] to-[rgb(8,15,17)]">
              <TabsList className="inline-flex items-center gap-4 bg-transparent p-0 h-auto">
                {positionTabs.map((tab) => (
                  <TabsTrigger key={tab.id} value={tab.id} className="gap-2.5 bg-transparent p-0 h-auto data-[state=active]:shadow-none">
                    <div className={`text-sm font-semibold ${activePositionTab === tab.id ? "text-gray-200" : "text-gray-500"}`}>
                      {tab.label}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <section className="flex flex-col w-[412px] items-start gap-4 p-4 relative">
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col w-[125px] items-start justify-center">
                  <div className="text-gray-200 text-sm font-semibold">Arsenal</div>
                  <div className="inline-flex items-start">
                    <div className="text-gray-500 text-sm">Winner </div>
                    <div className="text-gray-500 text-sm whitespace-nowrap">Long</div>
                  </div>
                </div>

                <div className="flex flex-col w-20 items-end justify-center">
                  <div className="text-[#8cf056] text-sm text-right">+$200</div>
                  <div className="flex max-w-[72px] w-[72px] items-center justify-end">
                    <img
                      className="relative w-4 h-4"
                      alt="Custom icons"
                      src="/custom-icons.svg"
                    />
                    <div className="text-[#8cf056] text-sm text-right">12.5%</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                {positionDetails.map((detail, index) => (
                  <div key={index} className="flex items-center justify-between w-full">
                    <div className="text-gray-500 text-sm">{detail.label}</div>
                    <div className="text-gray-200 text-sm">{detail.value}</div>
                  </div>
                ))}
              </div>

              <div className="absolute top-[22px] left-0 w-0.5 h-6">
                <div className="h-full bg-[#8cf056] rounded-[20px]" />
              </div>

              <div className="flex items-start gap-2 w-full">
                <Button className="flex justify-center px-3 py-2 flex-1 bg-[#78788033] rounded-sm h-auto">
                  <div className="text-gray-200 text-sm font-semibold whitespace-nowrap">Market close</div>
                </Button>

                <Button className="flex justify-center px-3 py-2 flex-1 bg-[#78788033] rounded-sm h-auto">
                  <div className="text-gray-200 text-sm font-semibold whitespace-nowrap">Limit close</div>
                </Button>
              </div>
            </section>
          </div>
        </div>

        <footer className="fixed bottom-0 left-0 w-[412px] flex flex-col backdrop-blur-[30px] bg-[rgb(15,15,15)] z-10">
          <div className="flex items-center px-4 py-3 w-full border-t border-[#7878801f]">
            <div className="flex w-full items-center gap-2">
              <Button variant="outline" className="flex justify-between px-2 py-1 flex-1 bg-[rgb(29,29,29)] rounded h-auto border-[#7878801f]">
                <div className="inline-flex items-center gap-1">
                  <div className="flex w-5 h-5 items-center gap-[3.33px] p-0.5 bg-white rounded-sm">
                    <img
                      className="relative w-[15px] h-[15px]"
                      alt="Image"
                      src="/image-4.png"
                    />
                  </div>
                  <div className="text-gray-200 text-sm font-semibold">Manchester city</div>
                </div>
                <ChevronDown className="w-6 h-6" />
              </Button>

              <Button variant="outline" className="flex gap-2 px-2 py-1.5 flex-1 bg-[rgb(29,29,29)] rounded h-auto border-[#7878801f]">
                <Info className="w-5 h-5" />
                <div className="text-gray-200 text-sm font-semibold whitespace-nowrap">View team info</div>
              </Button>
            </div>
          </div>

          <nav className="h-16 w-full border-t border-[#7878801f]">
            <div className="flex w-full items-center justify-between h-full px-2">
              {bottomNavItems.map((item) => (
                <Button key={item.id} variant="ghost" className="flex flex-col items-center gap-0.5 flex-1 h-auto p-0">
                  <div className="flex w-6 h-6 items-center justify-center gap-1 px-[3px] py-0 rounded-sm overflow-hidden">
                    <img
                      className="relative w-4 h-4"
                      alt={item.label}
                      src={item.icon}
                    />
                  </div>
                  <div className={`text-xs font-semibold ${item.active ? "text-white" : "text-gray-400"}`}>
                    {item.label}
                  </div>
                </Button>
              ))}
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};