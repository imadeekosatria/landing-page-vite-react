import TinyChart from "../ui/tiny-chart";
import BarChartSection from "../ui/bar-chart";
import { Popover, Menu, Position, toaster, Tooltip } from "evergreen-ui";
import {
    faChevronDown,
    faCircleArrowUp,
  } from "@fortawesome/free-solid-svg-icons";
import { Card, CardTitle } from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wallet from '../../assets/wallet.svg'

const Balance =()=>{
    return (
        <Card className="balance">
            <div className="top">
              <CardTitle>Balance statistics</CardTitle>
              <Popover
                position={Position.BOTTOM_LEFT}
                content={
                  <Menu>
                    <Menu.Group>
                      <Menu.Item
                        onSelect={() => toaster.notify("October Selected")}
                      >
                        Oct
                      </Menu.Item>
                      <Menu.Item
                        onSelect={() => toaster.notify("November Selected")}
                      >
                        Nov
                      </Menu.Item>
                      <Menu.Item
                        onSelect={() => toaster.notify("December Selected")}
                      >
                        Dec
                      </Menu.Item>
                      <Menu.Item
                        onSelect={() => toaster.notify("January Selected")}
                      >
                        Jan
                      </Menu.Item>
                      <Menu.Item
                        onSelect={() => toaster.notify("February Selected")}
                      >
                        Feb
                      </Menu.Item>
                    </Menu.Group>
                  </Menu>
                }
              >
                <Tooltip content="Filter">
                  <button>
                    Filter
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      style={{ color: "#020617" }}
                    />
                  </button>
                </Tooltip>
              </Popover>
            </div>
            <div className="grid grid-cols-3 gap-x-1 dark:text-white">
              <div className="flex flex-col w-full gap-y-1">
                <span className="font-semibold text-4xl">$564</span>
                <div className="flex gap-x-2 items-center">
                  <img src={wallet} alt="wallet image" className="w-16 xl:w-5/12"/>
                  <span className="break-words tracking-wide 2xl:text-3xl">Your total balance</span>
                </div>
                <hr />
                <div className="flex items-center gap-x-2">
                  <TinyChart />
                  <span className="flex gap-x-1 items-center">
                    <FontAwesomeIcon icon={faCircleArrowUp} size="lg" />
                    6%
                  </span>
                </div>
                <span className="text-slate-400">
                  Always see your earnings updates
                </span>
              </div>
              <div className="col-span-2">
                <BarChartSection />
              </div>
            </div>
          </Card>   
    )
}

export default Balance