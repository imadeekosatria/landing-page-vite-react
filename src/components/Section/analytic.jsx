import { Card, CardTitle } from "../ui/card"
import { Popover, Menu, EditIcon, ResetIcon } from "evergreen-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import RadialChart from "../ui/radial"
const Analytic = ()=>{
    return (
        <Card className="bg-white w-auto flex-grow">
            <div className="flex justify-between">
                <CardTitle>Analytics</CardTitle>
                <Popover
                    content={
                    <Menu>
                        <Menu.Group>
                        <Menu.Item icon={EditIcon} secondaryText="⌘R">
                            Rename...
                        </Menu.Item>
                        </Menu.Group>
                        <Menu.Group>
                        <Menu.Item icon={ResetIcon} >
                            Reset...
                        </Menu.Item>
                        </Menu.Group>
                    </Menu>
                    }
                >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </Popover>
            </div>
            <RadialChart/>
        </Card>
    )
}

export default Analytic