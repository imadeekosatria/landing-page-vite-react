import Balance from "./Section/balance"
import Visa from "./Section/visa"
import ItemToBuy from "./Section/item-to-buy"
import Transaction from "./Section/transaction"
import Analytic from "./Section/analytic"
import Search from "./Section/search"
import { PropTypes } from "prop-types"



const Section = ({prop}) => {
  const {name} = prop
  return (
    <>
      <main>
        <header>
          <div className="user">
            <h1>Hello, {name}</h1>
            <span>View and control your finances here!</span>
          </div>
          <div className="theme-search">
            <Search/>
          </div>
        </header>
        <div className="content">
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
