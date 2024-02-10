import Expense from "./Sidebar/expense"
import GoToPremium from "./Sidebar/got-to-premium"
import Spending from "./Sidebar/spending"

const Sidebar = ()=>{
    return (
        <>
            <div className="sidebar-container">
                <Expense/>
                <Spending/>
                <GoToPremium/>
            </div>
        </>
    )
}

export default Sidebar