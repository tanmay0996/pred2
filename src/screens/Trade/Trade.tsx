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
  const [tradeType, setTradeType] = useState<string>("long");
  const [activeNavTab, setActiveNavTab] = useState<string>("live");
  const [activePositionTab, setActivePositionTab] =
    useState<string>("positions");
  const [reduceOnly, setReduceOnly] = useState<boolean>(false);

  return (
    <div className="bg-gray-900 overflow-hidden w-full min-w-[412px] min-h-[1214px] flex">
      <div className="flex w-[412px] h-[1706px] relative flex-col items-start">
        {/* <header className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch w-full h-[38px] bg-[#33373a]">
            <img
              className="absolute top-[17px] left-[331px] w-[67px] h-[11px]"
              alt="Right"
              src="/right.png"
            />
            <img
              className="absolute top-[17px] left-[33px] w-7 h-[11px]"
              alt="Date"
              src="/date.png"
            />
          </div>

          <div className="relative self-stretch h-[55px] w-full bg-[#33373a]">
            <div className="absolute w-full h-[98.18%] top-0 left-0 shadow-[0px_0.4px_0px_#cccccc]" />
            <div className="absolute w-[calc(100%_-_21px)] left-[11px] bottom-2.5 h-9 bg-[#5e6367] rounded-[30px]" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-6 w-[21px] h-[21px] p-0 h-auto"
            >
              <ShareIcon className="w-[21px] h-[21px]" />
            </Button>
            <div className="inline-flex items-center justify-center gap-[7px] absolute top-4 left-[calc(50.00%_-_50px)]">
              <LockIcon className="relative w-4 h-4 text-white" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0] leading-[normal]">
                pred.app
              </div>
            </div>
          </div>
        </header> */}
        {/*header*/}
        <div className="relative w-[412px] h-[1042px] overflow-y-scroll">
          <div className="absolute top-0 left-0 w-[412px] h-[811px] flex items-center justify-center bg-gray-900 overflow-hidden">
            <div className="mt-[-540.3px] h-[1146.73px] w-[814px] rounded-[407px/573.37px] blur-[52.45px] [background:radial-gradient(50%_50%_at_50%_26%,rgba(98,98,98,0.3)_0%,rgba(45,106,126,0.3)_52%,rgba(22,43,50,0.37)_99%)]" />
          </div>

          <div className="flex flex-col w-[412px] items-start absolute top-px left-0">
            <nav className="flex items-center justify-between p-4 relative self-stretch w-full flex-[0_0_auto] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)] shadow-blur-60">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <img
                  className="relative w-8 h-8"
                  alt="Frame"
                  src="/frame-806.svg"
                />
                <Button
                  variant="ghost"
                  className="inline-flex gap-2 px-2 py-1 flex-[0_0_auto] items-center relative h-auto"
                >
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="flex w-5 h-5 items-center gap-[3.33px] p-0.5 relative bg-white rounded-sm">
                      <img
                        className="relative w-[15px] h-[15px]"
                        alt="Image"
                        src="/image-4.png"
                      />
                    </div>
                    <div className="relative flex items-center justify-center w-fit font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-bold-font-style)]">
                      EPL 2025
                    </div>
                  </div>
                  <ChevronDownIcon className="relative w-6 h-6" />
                </Button>
              </div>

              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] rounded-sm overflow-hidden">
                <Button
                  variant="outline"
                  className="inline-flex justify-center gap-1 px-3 py-2 flex-[0_0_auto] rounded-sm border border-solid border-[#7878801f] items-center relative h-auto bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)]"
                >
                  <img
                    className="relative w-4 h-4"
                    alt="Image"
                    src="/image-18.png"
                  />
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-bold-font-style)]">
                    Earn Rewards
                  </div>
                  <div className="absolute top-0 left-[76px] w-8 h-px rounded-[0px_10px_10px_0px] bg-[linear-gradient(90deg,rgba(163,225,86,0.1)_0%,rgba(140,240,86,1)_72%)]" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="inline-flex items-center justify-center p-1 relative flex-[0_0_auto] rounded-sm overflow-hidden border border-solid border-[#7878801f] h-auto bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)]"
                >
                  <div className="relative w-[25.88px] h-[25.88px] mt-[-0.94px] mb-[-0.94px] ml-[-0.94px] mr-[-0.94px] rounded-[86.13px] border-[0.94px] border-solid border-white">
                    <div className="w-[92.75%] h-[92.75%] rounded-xl bg-[linear-gradient(180deg,rgba(157,253,227,1)_0%,rgba(227,131,216,1)_100%)]" />
                  </div>
                </Button>
              </div>
            </nav>

            <nav className="flex w-[412px] items-center gap-4 px-4 py-3 relative flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#7878801f] bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]">
              {" "}
              {navigationTabs.map((tab) => (
                <Button
                  key={tab.id}
                  variant="ghost"
                  onClick={() => setActiveNavTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] h-auto px-0 ${
                    tab.id === activeNavTab ? "text-gray-200" : "text-gray-400"
                  }`}
                >
                  <div className="gap-1 inline-flex items-center justify-center relative flex-[0_0_auto]">
                    {tab.icon && tab.id === "live" && (
                      <PlayCircleIcon className="relative w-4 h-4" />
                    )}
                    {!tab.icon && (
                      <div className="flex w-4 h-4 items-center justify-center gap-[3.2px] p-[1.92px] relative bg-white rounded">
                        <img
                          className="relative w-[14.4px] h-[14.4px] mt-[-1.12px] mb-[-1.12px] ml-[-1.12px] mr-[-1.12px]"
                          alt="Image"
                          src="/image-4.png"
                        />
                      </div>
                    )}
                    <div className="text-[length:var(--title-2-semi-bold-font-size)] leading-[var(--title-2-semi-bold-line-height)] relative w-fit mt-[-1.00px] font-title-2-semi-bold font-[number:var(--title-2-semi-bold-font-weight)] tracking-[var(--title-2-semi-bold-letter-spacing)] whitespace-nowrap [font-style:var(--title-2-semi-bold-font-style)]">
                      {tab.label}
                    </div>
                  </div>
                </Button>
              ))}
              {activeNavTab === "live" && (
                <img
                  className="relative w-px h-8 object-cover"
                  alt="Line"
                  src="/line-65.svg"
                />
              )}
            </nav>

            <section className="flex w-[412px] items-start justify-between p-4 relative flex-[0_0_auto] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-[linear-gradient(180deg,rgb(29,38,40)_0%,rgba(29,38,40,0.8)_100%)] shadow-blur-60">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <div className="flex w-9 h-9 items-center justify-center gap-2.5 relative rounded-sm">
                  <div className="relative w-[32.0px] h-[32.0px] bg-[url(/chelsea.png)] bg-cover bg-[50%_50%]" />
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-title-2-semi-bold font-[number:var(--title-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--title-2-semi-bold-font-size)] tracking-[var(--title-2-semi-bold-letter-spacing)] leading-[var(--title-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--title-2-semi-bold-font-style)]">
                      MANC
                    </div>
                  </div>
                  <div className="relative w-fit font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff99] text-[length:var(--body-2-medium-font-size)] text-right tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                    1,389,829M Vol.
                  </div>
                </div>
              </div>

              <div className="inline-flex items-start justify-end gap-2 relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <div className="inline-flex items-start justify-end gap-1 relative flex-[0_0_auto]">
                    <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-title-2-semi-bold font-[number:var(--title-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--title-2-semi-bold-font-size)] text-right tracking-[var(--title-2-semi-bold-letter-spacing)] leading-[var(--title-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--title-2-semi-bold-font-style)]">
                      30% chance
                    </div>
                  </div>
                  <div className="inline-flex items-start justify-end relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff99] text-[length:var(--body-2-medium-font-size)] text-right tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                      $100→
                    </div>
                    <div className="relative w-fit mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)] text-right tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                      $130
                    </div>
                  </div>
                </div>
              </div>
            </section>

<section className="w-[412px] items-center justify-between flex-[0_0_auto] overflow-hidden border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#7878801f] flex relative bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]">              <div className="flex flex-col items-start px-0 py-3 relative flex-1 self-stretch grow">
                <div className="flex flex-col items-start gap-2.5 px-4 py-0 relative self-stretch w-full flex-[0_0_auto] bg-transparent">
                  <ToggleGroup
                    type="single"
                    value={tradeType}
                    onValueChange={(value) => value && setTradeType(value)}
                    className="flex items-center p-px relative self-stretch w-full flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-fillspressed rounded-sm border border-solid border-[#ffffff0f]"
                  >
                    <ToggleGroupItem
                      value="long"
                      className="flex justify-center px-3 py-1 flex-1 grow rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] items-center relative shadow-blur-60 data-[state=on]:bg-[#8cf056] data-[state=on]:text-[#111111] data-[state=off]:bg-transparent data-[state=off]:text-[#ffffffd1]"
                    >
                      <div className="w-fit font-[number:var(--body-2-semi-bold-font-weight)] whitespace-nowrap relative flex items-center justify-center mt-[-1.00px] font-body-2-semi-bold text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] [font-style:var(--body-2-semi-bold-font-style)]">
                        Long/Buy
                      </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="short"
                      className="flex justify-center px-2 py-1 flex-1 grow rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] items-center relative shadow-blur-60 data-[state=on]:bg-[#8cf056] data-[state=on]:text-[#111111] data-[state=off]:bg-transparent data-[state=off]:text-[#ffffffd1]"
                    >
                      <div className="relative flex items-center justify-center flex-1 mt-[-1.00px] font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] [font-style:var(--body-2-semi-bold-font-style)]">
                        Short/Sell
                      </div>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className="flex flex-col items-start gap-4 p-4 relative self-stretch w-full flex-[0_0_auto]">
                  <Button
                    variant="outline"
                    className="flex h-8 items-center justify-between pl-2 pr-1 py-0 relative self-stretch w-full rounded-sm border border-solid border-[#ffffff33] h-auto bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]"
                  >
                    <div className="relative w-fit font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                      Market Price
                    </div>
                    <div className="flex w-6 h-6 justify-center gap-1 px-[3px] py-0 rounded-sm overflow-hidden items-center relative">
                      <ChevronDownIcon className="relative w-4 h-4" />
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex h-8 items-center justify-between pl-2 pr-1 py-0 relative self-stretch w-full rounded-sm border border-solid border-[#ffffff33] h-auto bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]"
                  >
                    <div className="relative w-fit font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                      USDC
                    </div>
                    <div className="flex w-6 h-6 items-center justify-center gap-1 px-[3px] py-0 relative rounded-sm overflow-hidden">
                      <ChevronDownIcon className="relative w-4 h-4" />
                    </div>
                  </Button>

                  <div className="flex flex-col items-end relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center gap-2.5 px-0 py-0.5 relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff99] text-[length:var(--body-2-medium-font-size)] text-right tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                        $265 Available
                      </div>
                    </div>

                    <div className="flex h-8 items-center gap-2 px-1 py-0 relative self-stretch w-full rounded-sm border border-solid border-[#1B2A30]">
                      <img
                        className="relative w-6 h-6"
                        alt="Custom icons"
                        src="/custom-icons-3.svg"
                      />
                      <Input
                        placeholder="$0.00"
                        className="relative flex-1 font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)] text-center tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] [font-style:var(--body-2-medium-font-style)] border-0 bg-transparent p-0 h-auto"
                      />
                      <img
                        className="relative w-6 h-6"
                        alt="Add line"
                        src="/add-line.svg"
                      />
                    </div>

                    <div className="flex flex-col items-end gap-2.5 px-0 py-2 self-stretch w-full relative flex-[0_0_auto]">
                      <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                        {percentageOptions.map((option) => (
                          <Button
                            key={option.value}
                            variant="outline"
                            className="inline-flex items-center justify-center gap-2.5 px-1 py-0.5 relative flex-[0_0_auto] rounded-sm border border-solid border-[#ffffff33] h-auto bg-gradient-to-r from-[rgb(21,31,35)] via-[rgb(25,35,40)] to-[rgb(21,31,35)]"
                          >
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#ffffff99] text-xs tracking-[0] leading-4 whitespace-nowrap">
                              {option.label}
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-2 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#7878801f]">
                  <div className="relative flex items-center justify-center w-fit font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-gray-200 text-[length:var(--body-2-medium-font-size)] text-center tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                    Reduce only
                  </div>
                  <Checkbox
                    checked={reduceOnly}
                    onCheckedChange={(checked) =>
                      setReduceOnly(checked as boolean)
                    }
                    className="relative w-6 h-6 border border-solid border-white"
                  />
                </div>

                <div className="flex flex-col items-start justify-between px-4 py-0 relative flex-1 self-stretch w-full grow">
                  <div className="flex items-start justify-end gap-2 pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-gray-200 text-[length:var(--body-2-semi-bold-font-size)] tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-bold-font-style)]">
                        To Win 🎉
                      </div>
                      <div className="relative w-fit font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-gray-300 text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                        Avg Price 30¢
                      </div>
                    </div>
                    <div className="relative flex-1 mt-[-1.00px] font-body-1-medium font-[number:var(--body-1-medium-font-weight)] text-gray-400 text-[length:var(--body-1-medium-font-size)] text-right tracking-[var(--body-1-medium-letter-spacing)] leading-[var(--body-1-medium-line-height)] [font-style:var(--body-1-medium-font-style)]">
                      $0
                    </div>
                  </div>

                  <Button className="flex justify-center px-3 py-2 self-stretch w-full flex-[0_0_auto] bg-[#8cf056] rounded-sm items-center relative h-auto">
                    <div className="flex-1 font-[number:var(--button-bold-font-weight)] text-[#111111] relative flex items-center justify-center mt-[-1.00px] font-button-bold text-[length:var(--button-bold-font-size)] text-center tracking-[var(--button-bold-letter-spacing)] leading-[var(--button-bold-line-height)] [font-style:var(--button-bold-font-style)]">
                      Long MANC
                    </div>
                  </Button>
                </div>
              </div>

              <aside className="flex-col w-[180px] items-start self-stretch mt-[-1.00px] mb-[-1.00px] -ml-px border-l [border-left-style:solid] border-[#7878801f] flex relative">
                <div className="inline-flex items-center gap-[121px] relative flex-[0_0_auto]">
                  <div className="flex w-[180px] items-center justify-end gap-[121px] px-4 py-3 relative mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] border-b [border-bottom-style:solid] border-[#7878801f]">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      <div className="w-20 relative flex items-center justify-center mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-gray-400 text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] [font-style:var(--body-2-medium-font-style)]">
                        Price
                      </div>
                      <div className="w-20 -ml-3.5 text-right relative flex items-center justify-center mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-gray-400 text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] [font-style:var(--body-2-medium-font-style)]">
                        Shares
                      </div>
                    </div>
                  </div>
                </div>

                {orderBookSellData.map((order, index) => (
                  <div
                    key={`sell-${index}`}
                    className="h-8 items-center justify-end self-stretch w-full flex relative"
                  >
                    <div className="flex h-8 items-center justify-end gap-4 px-4 py-0 relative flex-1 grow">
                      <div className="flex items-center justify-between relative flex-1 grow">
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-label-regular font-[number:var(--label-regular-font-weight)] text-colorsred text-[length:var(--label-regular-font-size)] tracking-[var(--label-regular-letter-spacing)] leading-[var(--label-regular-line-height)] whitespace-nowrap [font-style:var(--label-regular-font-style)]">
                            {order.price}
                          </div>
                        </div>
                        <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffff99] text-[length:var(--body-2-regular-font-size)] text-right tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
                          {order.shares}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col items-start gap-2.5 px-4 py-2 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#7878801f] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] shadow-blur-40">
                  <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative flex items-center justify-center w-fit font-body-1-semi-bold font-[number:var(--body-1-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-1-semi-bold-font-size)] tracking-[var(--body-1-semi-bold-letter-spacing)] leading-[var(--body-1-semi-bold-line-height)] whitespace-nowrap [font-style:var(--body-1-semi-bold-font-style)]">
                      29.9¢
                    </div>
                    <div className="flex w-6 h-6 items-center justify-center gap-1 px-[3px] py-0 relative rounded-sm overflow-hidden">
                      <GiftIcon className="relative w-4 h-4" />
                    </div>
                  </div>
                </div>

                {orderBookBuyData.map((order, index) => (
                  <div
                    key={`buy-${index}`}
                    className="h-8 items-center justify-end self-stretch w-full flex relative"
                  >
                    <div className="flex h-8 items-center justify-end gap-4 px-4 py-0 relative flex-1 grow">
                      <div className="flex items-center justify-between relative flex-1 grow">
                        <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-label-regular font-[number:var(--label-regular-font-weight)] text-[#8cf056] text-[length:var(--label-regular-font-size)] tracking-[var(--label-regular-letter-spacing)] leading-[var(--label-regular-line-height)] whitespace-nowrap [font-style:var(--label-regular-font-style)]">
                            {order.price}
                          </div>
                        </div>
                        <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffff99] text-[length:var(--body-2-regular-font-size)] text-right tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
                          {order.shares}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </aside>
            </section>

<section className="flex items-center justify-between px-4 py-3 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#7878801f] bg-[rgb(19,28,30)]">              <div className="relative w-fit font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                EPL
              </div>
              <div className="inline-flex gap-2 flex-[0_0_auto] items-center relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="flex w-6 h-6 items-center justify-center gap-1 px-[3px] py-0 relative rounded-sm overflow-hidden h-auto"
                >
                  <MoreHorizontalIcon className="relative w-4 h-4" />
                </Button>
              </div>
            </section>

            <Tabs
              value={activePositionTab}
              onValueChange={setActivePositionTab}
className="flex flex-col items-start gap-2.5 p-4 self-stretch w-full border-b [border-bottom-style:solid] border-[#7878801f] relative flex-[0_0_auto] bg-gradient-to-r from-[rgb(8,15,17)] via-[rgb(12,19,22)] to-[rgb(8,15,17)]"            >
              <TabsList className="inline-flex items-center gap-4 relative flex-[0_0_auto] bg-transparent p-0 h-auto">
                {positionTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="gap-2.5 inline-flex items-center justify-center relative flex-[0_0_auto] bg-transparent p-0 h-auto data-[state=active]:shadow-none"
                  >
                    <div
                      className={`text-[length:var(--body-2-semi-bold-font-size)] leading-[var(--body-2-semi-bold-line-height)] relative w-fit mt-[-1.00px] font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] tracking-[var(--body-2-semi-bold-letter-spacing)] whitespace-nowrap [font-style:var(--body-2-semi-bold-font-style)] ${
                        activePositionTab === tab.id
                          ? "text-[#ffffffd1]"
                          : "text-[#ffffff66]"
                      }`}
                    >
                      {tab.label}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <section className="flex flex-col w-[412px] items-start gap-4 p-4 relative flex-[0_0_auto]">
              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[125px] items-start justify-center relative">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)] tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-bold-font-style)]">
                    Arsenal
                  </div>
                  <div className="inline-flex items-start relative flex-[0_0_auto]">
                    <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                      Winner
                    </div>
                    <div className="w-fit whitespace-nowrap relative flex items-center justify-center mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] [font-style:var(--body-2-medium-font-style)]">
                      Long
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-20 items-end justify-center relative">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#8cf056] text-[length:var(--body-2-medium-font-size)] text-right tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)]">
                    +$200
                  </div>
                  <div className="flex max-w-[72px] w-[72px] items-center justify-end relative flex-[0_0_auto]">
                    <img
                      className="relative w-4 h-4"
                      alt="Custom icons"
                      src="/custom-icons.svg"
                    />
                    <div className="relative w-fit mt-[-1.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#8cf056] text-[length:var(--body-2-regular-font-size)] text-right tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
                      12.5%
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                {positionDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div
                      className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-body-2-medium font-[number:var(--body-2-medium-font-weight)] text-[#ffffff66] text-[length:var(--body-2-medium-font-size)] tracking-[var(--body-2-medium-letter-spacing)] leading-[var(--body-2-medium-line-height)] whitespace-nowrap [font-style:var(--body-2-medium-font-style)] ${
                        detail.label === "Shares" ? "w-[78px]" : ""
                      }`}
                    >
                      {detail.label}
                    </div>
                    <div className="relative flex items-center justify-center w-fit mt-[-1.00px] font-body-2-regular font-[number:var(--body-2-regular-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-regular-font-size)] tracking-[var(--body-2-regular-letter-spacing)] leading-[var(--body-2-regular-line-height)] whitespace-nowrap [font-style:var(--body-2-regular-font-style)]">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-[22px] left-0 w-0.5 h-6">
                <div className="h-full bg-[#8cf056] rounded-[20px] rotate-180" />
              </div>

              <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <Button className="flex justify-center px-3 py-2 flex-1 grow bg-[#78788033] rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] items-center relative shadow-blur-60 h-auto">
                      <div className="w-fit font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] whitespace-nowrap relative flex items-center justify-center mt-[-1.00px] font-body-2-semi-bold text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] [font-style:var(--body-2-semi-bold-font-style)]">
                        Market close
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
                  <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                    <Button className="flex justify-center px-3 py-2 flex-1 grow bg-[#78788033] rounded-sm backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] items-center relative shadow-blur-60 h-auto">
                      <div className="w-fit font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] whitespace-nowrap relative flex items-center justify-center mt-[-1.00px] font-body-2-semi-bold text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] [font-style:var(--body-2-semi-bold-font-style)]">
                        Limit close
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="flex flex-col w-[412px] items-start absolute left-0 bottom-0 backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] bg-[rgb(15,15,15)] shadow-blur-60">
            <div className="flex items-center justify-around px-4 py-3 flex-[0_0_auto] relative self-stretch w-full border-t [border-top-style:solid] border-[#7878801f] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] shadow-blur-60">
              <div className="flex w-[380px] items-center gap-2 relative">
                <Button
                  variant="outline"
                  className="flex justify-between px-2 py-1 flex-1 grow bg-[rgb(29,29,29)] rounded items-center relative h-auto border-[#7878801f]"
                >
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="flex w-5 h-5 items-center gap-[3.33px] p-0.5 relative bg-white rounded-sm">
                      <img
                        className="relative w-[15px] h-[15px]"
                        alt="Image"
                        src="/image-4.png"
                      />
                    </div>
                    <div className="relative flex items-center justify-center w-fit font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-bold-font-style)]">
                      Manchester city
                    </div>
                  </div>
                  <ChevronDownIcon className="relative w-6 h-6" />
                </Button>

                <Button
                  variant="outline"
                  className="flex gap-2 px-2 py-1.5 flex-1 grow bg-[rgb(29,29,29)] rounded items-center relative h-auto border-[#7878801f]"
                >
                  <InfoIcon className="relative w-5 h-5" />
                  <div className="relative flex items-center justify-center w-fit font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[#ffffffd1] text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--body-2-semi-bold-font-style)]">
                    View team info
                  </div>
                </Button>
              </div>
            </div>

            <nav className="h-16 relative self-stretch w-full border-t [border-top-style:solid] border-[#7878801f] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] shadow-blur-60 bg-[rgb(15,15,15)]">
              <div className="flex w-full items-start justify-between relative top-[calc(50.00%_-_21px)]">
                {bottomNavItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    className="flex flex-col items-center gap-0.5 relative flex-1 grow h-auto p-0"
                  >
                    <div className="flex w-6 h-6 items-center justify-center gap-1 px-[3px] py-0 relative rounded-sm overflow-hidden">
                      <img
                        className="relative w-4 h-4"
                        alt={item.label}
                        src={item.icon}
                      />
                    </div>
                    <div
                      className={`relative self-stretch font-body-2-semi-bold font-[number:var(--body-2-semi-bold-font-weight)] text-[length:var(--body-2-semi-bold-font-size)] text-center tracking-[var(--body-2-semi-bold-letter-spacing)] leading-[var(--body-2-semi-bold-line-height)] [font-style:var(--body-2-semi-bold-font-style)] ${
                        item.active ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {item.label}
                    </div>
                  </Button>
                ))}
              </div>
            </nav>
          </footer>
        </div>

       
      </div>
    </div>
  );
};
