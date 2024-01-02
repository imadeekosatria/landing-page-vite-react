import {Card, CardTitle} from '../ui/card'
import StackChart from '../ui/stack-chart'
const Expense = ()=>{
    return (
        <Card className="border-2 rounded-2xl">
            <CardTitle className="text-sm">Expense and income</CardTitle>
            <div className='flex'>
                <div className='flex flex-col'>
                    <span className='text-sm '>Expense</span>
                    <span className='text-base font-semibold'>75%</span>
                    <span className='text-sm text-slate-400'>5,653</span>
                </div>
                <div className="inline-flex items-center justify-center w-full relative">
                    <hr className="w-12 h-px my-8 bg-gray-200 border-0  rotate-90"/>
                    <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2  ">vs</span>
                </div>
                <div className='flex flex-col text-right'>
                    <span className='text-sm'>Income</span>
                    <span className='text-base font-semibold'>40%</span>
                    <span className='text-sm text-slate-400'>2,656</span>
                </div>
            </div>
            <div className='rounded-full'>
                <StackChart/>
            </div>
        </Card>
    )
}

export default Expense