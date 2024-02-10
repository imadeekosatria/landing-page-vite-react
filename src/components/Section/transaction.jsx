import { Card, CardTitle } from "../ui/card"
import TransactionList from "../ui/trans-list"
import avatar1 from "../../assets/avatar male.svg"
import avatar2 from "../../assets/avatar female.svg"
import avatar3 from "../../assets/avatar 3.svg"
import avatar4 from "../../assets/avatar 4.svg"
import avatar5 from "../../assets/avatar 5.svg"

const Transaction = ()=>{
    const transactionData = [
        {avatar: avatar1, name: 'Jhon Demon', date: '02 July, 2023', value: '-$3,000' },
        {avatar: avatar2, name: 'Bessie Cooper', date: '02 July, 2023', value: '+$1,970' },
        {avatar: avatar3, name: 'Guy Hawkin', date: '02 July, 2023', value: '-$5,000' },
        {avatar: avatar4, name: 'Jhon Price', date: '02 July, 2023', value: '+$1,020' },
        {avatar: avatar5, name: 'Helena Park', date: '02 July, 2023', value: '-$1,200' }
    ]
    return (
        <Card className="transactions-container">
            <div className="top">
                <CardTitle>Last Transaction</CardTitle>
                <div>
                    <span>Newest</span>
                    <span>Oldest</span>
                </div>
            </div>
            <div className="list-transactions">
                {
                    transactionData.map((user, index)=>{
                        return <TransactionList key={index} props={user}/>
                    })
                }                
            </div>
        </Card>
    )
}

export default Transaction