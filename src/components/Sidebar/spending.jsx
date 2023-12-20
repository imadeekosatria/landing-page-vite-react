import { Card, CardOption, CardTitle } from "../ui/card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import SpendingList from "../ui/spending-list"
import Store from "../../assets/open-an-online-store.svg"
import Hospital from "../../assets/joyful-female-doctor.svg"
import Tikect from "../../assets/cinema-tickets.svg"
import { Tooltip } from "evergreen-ui"

const Spending = ()=>{
    const data = [
        {image: Store, name: 'Online store', dateTime: 'May 30, 2023 at 08.00 pm'},
        {image: Hospital, name: 'Pay the hospital', dateTime: 'May 28, 2023 at 10.00 pm'},
        {image: Tikect, name: 'Tickets', dateTime: 'May 10, 2023 at 12.00 pm'}
    ]
    return (
        <Card className="border-2">
            <div className="flex justify-between items-center">
                <CardTitle>Last spending</CardTitle>
                <CardOption/>
            </div>
            <div className="mt-4 flex flex-col gap-4">
                {
                    data.map((spending, index)=>{
                        return (
                            <SpendingList  key={index} props={spending} collectIndex={{length: data.length, current:index}}/>
                        )
                    })
                    
                }
                <Tooltip content="Show all spending list">
                    <span className="text-indigo-500 flex gap-x-2 items-center justify-center cursor-pointer">Show all <FontAwesomeIcon icon={faArrowRight} /></span>
                </Tooltip>
            </div>
        </Card>
    )
}

export default Spending