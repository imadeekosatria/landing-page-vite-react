import { Card, CardTitle } from "../ui/card";
import {
    faChevronRight,
    faPlus,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemCheckBox from "../ui/item-checkbox";
import SectionChat from "./section-chat";

const ItemToBuy = ()=>{
    return (
        <Card className="min-w-full bg-white flex gap-x-4">
              <div className="w-2/4 h-56 flex flex-col gap-y-4">
                <CardTitle>List of items to buy</CardTitle>
                <div className="flex gap-8 items-center mb-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-2xl">02:00</span>
                    <span className="text-slate-300">Sat, August 12</span>
                  </div>
                  <FontAwesomeIcon icon={faChevronRight} style={{color: '#e2e8f0'}}/>
                  <div className="flex flex-col">
                  <span className="font-medium text-2xl">05:00</span>
                  <span className="text-slate-300">Sat, September 12</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                    <span className="text-slate-300">0/3</span><span className="font-medium">Shopping list</span>
                    </div>
                  </div>
                  <button className="font-medium flex gap-x-2 items-center "><FontAwesomeIcon icon={faPlus} />Add an item</button>
                </div>
                <div className="flex flex-wrap gap-4 w-full justify-between">
                    <ItemCheckBox props={{text: 'Macbook', check: true}}/>
                    <ItemCheckBox props={{text: 'Bicycle', check: false}}/>
                    <ItemCheckBox props={{text: 'Motorcycle', check: false}}/>
                    <ItemCheckBox props={{text: 'Iphone 14 pro max', check: true}}/>
                </div>
              </div>
              <span className="bg-slate-300 h-auto w-0.5 rounded-full"></span>
              <div className="w-2/4 flex flex-col gap-4">
                <CardTitle>Esther Howard</CardTitle>
                <SectionChat/>
              </div>
          </Card>
    )
}

export default ItemToBuy