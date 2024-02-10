import {Card, CardTitle} from '../ui/card'
import StackChart from '../ui/stack-chart'
const Expense = ()=>{
    return (
        <Card className="sidebar-card">
            <CardTitle>Expense and income</CardTitle>
            <div className='top-expense'>
                <div className='expense-income'>
                    <span>Expense</span>
                    <span>75%</span>
                    <span>5,653</span>
                </div>
                <div className="vs">
                    <hr/>
                    <span>vs</span>
                </div>
                <div className='expense-income'>
                    <span>Income</span>
                    <span>40%</span>
                    <span>2,656</span>
                </div>
            </div>
            <div>
                <StackChart/>
            </div>
        </Card>
    )
}

export default Expense