import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Balance from "./Section/balance";
import Visa from "./Section/visa";
import ItemToBuy from "./Section/item-to-buy";
import Transaction from "./Section/transaction";
import Analytic from "./Section/analytic";


const Section = () => {
  return (
    <>
      <main className="col-span-9 2xl:col-span-15 w-full p-4 h-screen overflow-y-auto overscroll-y-auto">
        <header className="flex justify-between mb-4 items-center">
          <div>
            <h1 className="text-3xl font-semibold">Hello, Jhon .D</h1>
            <span>View and control your finances here!</span>
          </div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="bg-white p-4 rounded-full hover:bg-slate-100 cursor-pointer"
          />
        </header>
        <div className="flex flex-wrap gap-4 justify-between">
          <Balance/>
          <Visa/>
          <ItemToBuy/>
          <Transaction/>
          <Analytic/>
        </div>
      </main>
    </>
  );
};

export default Section;
