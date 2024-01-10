import Balance from "./Section/balance"
import Visa from "./Section/visa"
import ItemToBuy from "./Section/item-to-buy"
import Transaction from "./Section/transaction"
import Analytic from "./Section/analytic"
import Search from "./Section/search"
import { PropTypes } from "prop-types"
import ThemeSwitcher from "./Section/theme-switch"



const Section = ({prop}) => {
  const {name} = prop
  return (
    <>
      <main className="col-span-8 2xl:col-span-14 w-full p-4 min-h-screen overflow-y-auto overscroll-y-auto">
        <header className="flex justify-between mb-4 items-center">
          <div className="dark:text-white">
            <h1 className="text-3xl font-semibold">Hello, {name}</h1>
            <span>View and control your finances here!</span>
          </div>
          <div className="flex gap-x-2">
            <ThemeSwitcher/>
            <Search/>
          </div>
        </header>
        <div className="flex flex-wrap gap-4 justify-between">
          <Balance/>
          <Visa prop={{name: name, validDate: '08/12'}}/>
          <ItemToBuy/>
          <Transaction/>
          <Analytic/>
        </div>
      </main>
    </>
  );
};

Section.propTypes ={
  name: PropTypes.string,
  prop: PropTypes.object
}


export default Section;
