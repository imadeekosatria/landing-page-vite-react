import Expense from "./Sidebar/expense"
import GoToPremium from "./Sidebar/got-to-premium"
import Spending from "./Sidebar/spending"

const Sidebar = ()=>{
    return (
        <>
            <div className="col-span-3 px-4 py-8 bg-white dark:bg-slate-800 dark:text-white h-full 2xl:flex-grow overflow-y-auto flex flex-col gap-6">
                <Expense/>
                <Spending/>
                <GoToPremium/>
            </div>
        </>
    )
}

export default Sidebar