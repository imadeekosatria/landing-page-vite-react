import TinyChart from "../ui/tiny-chart";
import BarChartSection from "../ui/bar-chart";
import { Popover, Menu, Position, toaster, Tooltip } from "evergreen-ui";
import {
  faChevronDown,
  faCircleArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardTitle } from "../ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wallet from "../../assets/wallet.svg";

const Balance = () => {
  return (
    <Card className="balance">
      <div className="top">
        <CardTitle>Balance statistics</CardTitle>
        <Popover
          position={Position.BOTTOM_LEFT}
          content={
            <Menu>
              <Menu.Group>
                <Menu.Item onSelect={() => toaster.notify("October Selected")}>
                  Oct
                </Menu.Item>
                <Menu.Item onSelect={() => toaster.notify("November Selected")}>
                  Nov
                </Menu.Item>
                <Menu.Item onSelect={() => toaster.notify("December Selected")}>
                  Dec
                </Menu.Item>
                <Menu.Item onSelect={() => toaster.notify("January Selected")}>
                  Jan
                </Menu.Item>
                <Menu.Item onSelect={() => toaster.notify("February Selected")}>
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
      <div className="bottom">
        <div className="balance-item">
          <span className="balance-now">$564</span>
          <div className="balance-wallet">
            <img src={wallet} alt="wallet image" />
            <span>Your total balance</span>
          </div>
          <hr />
          <div className="tinychart">
            <TinyChart />
            <span>
              <FontAwesomeIcon icon={faCircleArrowUp} size="lg" />
              6%
            </span>
          </div>
          <span className="earnings-remind">
            Always see your earnings updates
          </span>
        </div>
        <div className="balance-chart">
          <BarChartSection />
        </div>
      </div>
    </Card>
  );
};

export default Balance;
