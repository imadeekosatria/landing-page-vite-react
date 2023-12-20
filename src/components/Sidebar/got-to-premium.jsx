import { Card, CardTitle } from "../ui/card"
import Crown from "../../assets/crown.png"
import { Tooltip } from "evergreen-ui"
const GoToPremium = ()=>{
    return (
        <Card className="border-2">
            <CardTitle>Go to premium</CardTitle>
            <div className="flex flex-col items-center gap-y-4">
                <img src={Crown} alt="Crown" className="w-40"/>
                <div className="flex flex-col">
                    <span className="font-semibold">Need more features?</span>
                    <span className="text-slate-400">Update your account to premium to get more features.</span>
                </div>
                <Tooltip content="Get premium">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-500 flex items-center justify-center text-white py-4 rounded-2xl">Get now</a>
                </Tooltip>
            </div>
        </Card>
    )
}

export default GoToPremium