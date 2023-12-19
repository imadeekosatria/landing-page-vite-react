import { Card, CardTitle } from "../ui/card"
import TransactionList from "../ui/trans-list"
import avatar1 from "../../assets/avatar male.svg"
import avatar2 from "../../assets/avatar female.svg"
import avatar3 from "../../assets/avatar 3.svg"
import avatar4 from "../../assets/avatar 4.svg"
import avatar5 from "../../assets/avatar 5.svg"

const Transaction = ()=>{
    return (
        <Card className="bg-white w-3/5 flex flex-col gap-4 h-72">
            <div className="flex justify-between">
                <CardTitle>Last Transaction</CardTitle>
                <div className="flex gap-4 text-slate-700">
                    <span className="underline">Newest</span>
                    <span>Oldest</span>
                </div>
            </div>
            <div className="overflow-y-auto h-full pr-3 flex flex-col gap-2">
                <TransactionList props={{avatar: avatar1, name: 'Jhon Demon', date: '02 July, 2023', value: '-$3,000' }}/>
                <TransactionList props={{avatar: avatar2, name: 'Bessie Cooper', date: '02 July, 2023', value: '+$1,970' }}/>
                <TransactionList props={{avatar: avatar3, name: 'Guy Hawkin', date: '02 July, 2023', value: '-$5,000' }}/>
                <TransactionList props={{avatar: avatar4, name: 'Jhon Price', date: '02 July, 2023', value: '+$1,020' }}/>  
                <TransactionList props={{avatar: avatar5, name: 'Helena Park', date: '02 July, 2023', value: '-$1,200' }}/>
            </div>
        </Card>
    )
}

export default Transaction