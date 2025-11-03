import {
  ChevronDownIcon,
  GiftIcon,
  InfoIcon,
  LockIcon,
  MoreHorizontalIcon,
  PlayCircleIcon,
  ShareIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";

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

export const TradeDesktop = (): JSX.Element => {
  const [tradeType, setTradeType] = useState<string>("long");
  const [activeNavTab, setActiveNavTab] = useState<string>("live");
  const [activePositionTab, setActivePositionTab] =
    useState<string>("positions");
  const [reduceOnly, setReduceOnly] = useState<boolean>(false);

  return (
    <div className="bg-gray-900 w-full min-h-screen flex flex-col">
      <header className="flex flex-col items-start relative w-full">
        <div className="relative w-full h-[55px] bg-[#33373a] shadow-[0px_0.4px_0px_#cccccc]">
          <div className="flex items-center justify-between h-full px-6">
            <div className="inline-flex items-center gap-2">
              <LockIcon className="w-4 h-4 text-white" />
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-lg">
                pred.app
              </div>
            </div>
            <Button variant="ghost" size="icon" className="w-[21px] h-[21px]">
              <ShareIcon className="w-[21px] h-[21px]" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="h-[1146.73px] w-[814px] rounded-[407px/573.37px] blur-[52.45px] [background:radial-gradient(50%_50%_at_50%_26%,rgba(98,98,98,0.3)_0%,rgba(45,106,126,0.3)_52%,rgba(22,43,50,0.37)_99%)]" />
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-6">
            <nav className="flex items-center justify-between p-4 mb-4 backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(156,156,156,1)_0%,rgba(156,156,156,1)_100%),linear-gradient(0deg,rgba(37,37,37,0.05)_0%,rgba(37,37,37,0.05)_100%)] bg-fills-2 rounded-lg shadow-blur-60">
              <div className="inline-flex items-center gap-2">
                <img className="w-8 h-8" alt="Frame" src="/frame-806.svg" />
                <Button variant="ghost" className="inline-flex gap-2 px-2 py-1 h-auto">
                  <div className="inline-flex items-center gap-1">
                    <div className="flex w-5 h-5 items-center gap-[3.33px] p-0.5 bg-white rounded-sm">
                      <img className="w-[15px] h-[15px]" alt="Image" src="/image-4.png" />
                    </div>
                    <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)]">
                      EPL 2025
                    </div>
                  </div>
                  <ChevronDownIcon className="w-6 h-6" />
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 rounded-sm overflow-hidden">
                <Button variant="outline" className="inline-flex justify-center gap-1 px-3 py-2 rounded-sm border border-solid border-[#7878801f] h-auto">
                  <img className="w-4 h-4" alt="Image" src="/image-18.png" />
                  <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)]">
                    Earn Rewards
                  </div>
                </Button>
                <Button variant="outline" size="icon" className="p-1 rounded-sm overflow-hidden border border-solid border-[#7878801f] h-auto">
                  <div className="w-[25.88px] h-[25.88px] rounded-[86.13px] border-[0.94px] border-solid border-white">
                    <div className="w-[92.75%] h-[92.75%] rounded-xl bg-[linear-gradient(180deg,rgba(157,253,227,1)_0%,rgba(227,131,216,1)_100%)]" />
                  </div>
                </Button>
              </div>
            </nav>

            <nav className="flex items-center gap-4 px-4 py-3 mb-4 border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]">
              {navigationTabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant="ghost"
                  onClick={() => setActiveNavTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 h-auto px-2 ${
                    tab.id === activeNavTab ? "text-gray-200" : "text-gray-400"
                  }`}
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
                </Button>
              ))}
            </nav>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <section className="flex items-start justify-between p-4 mb-4 bg-[linear-gradient(0deg,rgba(156,156,156,1)_0%,rgba(156,156,156,1)_100%),linear-gradient(0deg,rgba(37,37,37,0.05)_0%,rgba(37,37,37,0.05)_100%)] bg-fills-2 rounded-lg">
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
                  <section className="flex flex-col items-start px-0 py-3 border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]">
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
                      <Button variant="outline" className="flex h-8 items-center justify-between pl-2 pr-1 py-0 w-full rounded-sm border border-solid border-[#7878801f] h-auto">
                        <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)]">
                          Market Price
                        </div>
                        <ChevronDownIcon className="w-4 h-4" />
                      </Button>

                      <Button variant="outline" className="flex h-8 items-center justify-between pl-2 pr-1 py-0 w-full rounded-sm border border-solid border-[#7878801f] h-auto">
                        <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)]">
                          USDC
                        </div>
                        <ChevronDownIcon className="w-4 h-4" />
                      </Button>

                      <div className="flex flex-col items-end w-full">
                        <div className="flex items-center gap-2.5 px-0 py-0.5 w-full">
                          <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff99] text-[length:var(--body-2-medium-font-size)]">
                            $265 Available
                          </div>
                        </div>

                        <div className="flex h-8 items-center gap-2 px-1 py-0 w-full rounded-sm border border-solid border-[#7878801f]">
                          <img className="w-6 h-6" alt="Custom icons" src="/custom-icons-3.svg" />
                          <Input
                            placeholder="$0.00"
                            className="flex-1 font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)] border-0 bg-transparent p-0 h-auto"
                          />
                          <img className="w-6 h-6" alt="Add line" src="/add-line.svg" />
                        </div>

                        <div className="flex flex-col items-end gap-2.5 px-0 py-2 w-full">
                          <div className="inline-flex items-start gap-2">
                            {percentageOptions.map((option) => (
                              <Button
                                key={option.value}
                                variant="outline"
                                className="inline-flex items-center justify-center gap-2.5 px-1 py-0.5 rounded-sm border border-solid border-[#7878801f] h-auto"
                              >
                                <div className="[font-family:'Inter',Helvetica] font-medium text-[#ffffff99] text-xs">
                                  {option.label}
                                </div>
                              </Button>
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
                          $0
                        </div>
                      </div>

                      <Button className="flex justify-center px-3 py-2 w-full bg-[#8cf056] rounded-sm items-center h-auto">
                        <div className="flex-1 font-[number:var(--button-bold-font-weight)] text-[#111111] font-button-bold text-[length:var(--button-bold-font-size)]">
                          Long MANC
                        </div>
                      </Button>
                    </div>
                  </section>

                  <aside className="flex flex-col items-start border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]">
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
                      <div key={`sell-${index}`} className="h-8 items-center justify-end w-full flex">
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
                      </div>
                    ))}

                    <div className="flex flex-col items-start gap-2.5 px-4 py-2 w-full border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#7878801f] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-blur-40">
                      <div className="flex items-center justify-between w-full">
                        <div className="font-body-1-semi-bold font-[number:var(--body-1-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-1-semi-bold-font-size)]">
                          29.9¢
                        </div>
                        <GiftIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {orderBookBuyData.map((order, index) => (
                      <div key={`buy-${index}`} className="h-8 items-center justify-end w-full flex">
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
                      </div>
                    ))}
                  </aside>
                </div>
              </div>

              <div className="col-span-4">
                <section className="flex items-center justify-between px-4 py-3 mb-4 border border-[#7878801f] rounded-lg bg-[linear-gradient(0deg,rgba(156,156,156,0.5)_0%,rgba(156,156,156,0.5)_100%),linear-gradient(0deg,rgba(37,37,37,0.3)_0%,rgba(37,37,37,0.3)_100%)]">
                  <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)]">
                    EPL
                  </div>
                  <Button variant="ghost" size="icon" className="w-6 h-6 h-auto">
                    <MoreHorizontalIcon className="w-4 h-4" />
                  </Button>
                </section>

                <Tabs
                  value={activePositionTab}
                  onValueChange={setActivePositionTab}
                  className="flex flex-col items-start gap-2.5 p-4 border border-[#7878801f] rounded-lg mb-4 backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]"
                >
                  <TabsList className="inline-flex items-center gap-4 bg-transparent p-0 h-auto">
                    {positionTabs.map((tab) => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className="gap-2.5 inline-flex items-center justify-center bg-transparent p-0 h-auto data-[state=active]:shadow-none"
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

                <section className="flex flex-col items-start gap-4 p-4 border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-center">
                      <div className="font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)]">
                        Arsenal
                      </div>
                      <div className="inline-flex items-start">
                        <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)]">
                          Winner
                        </div>
                        <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)]">
                          Long
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-center">
                      <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#8cf056] text-[length:var(--body-2-medium-font-size)] text-right">
                        +$200
                      </div>
                      <div className="flex items-center justify-end">
                        <img className="w-4 h-4" alt="Custom icons" src="/custom-icons.svg" />
                        <div className="font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#8cf056] text-[length:var(--body-2-regular-font-size)] text-right">
                          12.5%
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-2 w-full">
                    {positionDetails.map((detail, index) => (
                      <div key={index} className="flex items-center justify-between w-full">
                        <div className="font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)]">
                          {detail.label}
                        </div>
                        <div className="font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-regular-font-size)]">
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-[22px] left-0 w-0.5 h-6">
                    <div className="h-full bg-[#8cf056] rounded-[20px] rotate-180" />
                  </div>

                  <div className="flex items-start gap-2 w-full">
                    <Button className="flex justify-center px-3 py-2 flex-1 bg-[#78788033] rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] shadow-blur-60 h-auto">
                      <div className="font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] font-body-2-semi-bold text-[length:var(--body-2-semi-bold-font-size)]">
                        Market close
                      </div>
                    </Button>
                    <Button className="flex justify-center px-3 py-2 flex-1 bg-[#78788033] rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] shadow-blur-60 h-auto">
                      <div className="font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] font-body-2-semi-bold text-[length:var(--body-2-semi-bold-font-size)]">
                        Limit close
                      </div>
                    </Button>
                  </div>
                </section>

                <div className="flex items-center justify-around px-4 py-3 mt-4 border border-[#7878801f] rounded-lg backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] shadow-blur-60">
                  <div className="flex items-center gap-2 w-full">
                    <Button variant="outline" className="flex justify-between px-2 py-1 flex-1 bg-[#ffffff0f] rounded items-center h-auto">
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

                    <Button variant="outline" className="flex gap-2 px-2 py-1.5 flex-1 bg-[#ffffff0f] rounded items-center h-auto">
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
