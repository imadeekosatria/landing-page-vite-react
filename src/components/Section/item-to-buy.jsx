import { Card, CardTitle } from "../ui/card";
import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemCheckBox from "../ui/item-checkbox";
import SectionChat from "./section-chat";
import { Tooltip } from "evergreen-ui";

const ItemToBuy = () => {
  const Items = [
    { text: "Macbook", check: true },
    { text: "Bicycle", check: false },
    { text: "Motorcycle", check: false },
    { text: "Iphone 14 pro max", check: true },
  ];
  return (
    <Card className="items-to-buy-container">
      <div className="list-items-container">
        <CardTitle>List of items to buy</CardTitle>
        <div className="times-container">
          <div>
            <span>02:00</span>
            <span>Sat, August 12</span>
          </div>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: "#e2e8f0" }} />
          <div>
            <span>05:00</span>
            <span>Sat, September 12</span>
          </div>
        </div>
        <div className="items-top">
          <div>
            <span>0/3</span>
            <span>Shopping list</span>
          </div>
          <Tooltip content="Add an item">
            <button>
              <FontAwesomeIcon icon={faPlus} />
              Add an item
            </button>
          </Tooltip>
        </div>
        <div className="items">
          {Items.map((item, index) => {
            return <ItemCheckBox key={index} props={item} />;
          })}
        </div>
      </div>
      <span className="separator"></span>
      <div className="chat-container">
        <CardTitle>Esther Howard</CardTitle>
        <SectionChat />
      </div>
    </Card>
  );
};

export default ItemToBuy;
