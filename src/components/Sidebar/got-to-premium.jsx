import { Card, CardTitle } from "../ui/card"
import Crown from "../../assets/crown.png"
import { Tooltip } from "evergreen-ui"
const GoToPremium = ()=>{
    return (
        <Card className="sidebar-card">
            <CardTitle>Go to premium</CardTitle>
            <div className="go-to-premium">
                <img src={Crown} alt="Crown"/>
                <div>
                    <span>Need more features?</span>
                    <span>Update your account to premium to get more features.</span>
                </div>
                <Tooltip content="Get premium">
                    <a href="#" target="_blank" rel="noopener noreferrer">Get it now</a>
                </Tooltip>
            </div>
        </Card>
    )
}

export default GoToPremium