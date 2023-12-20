import PropTypes from 'prop-types'
import { Popover, Menu, EditIcon, ResetIcon, Tooltip } from "evergreen-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"

const Card = ({children, className})=>(
    <div className={`p-4 rounded-3xl ${className}`}>
        {children}
    </div>
)

Card.propTypes={
    children: PropTypes.node,
    className: PropTypes.string
}

const CardTitle = ({children, className})=>(
    <span className={`font-medium ${className}`}>{children}</span>
)

CardTitle.propTypes={
    children: PropTypes.node,
    className: PropTypes.string
}

const CardOption = () => {
    return (
        <Popover
            content={
                <Menu>
                <Menu.Group>
                    <Menu.Item icon={EditIcon} secondaryText="⌘R">
                    Rename...
                    </Menu.Item>
                </Menu.Group>
                <Menu.Group>
                    <Menu.Item icon={ResetIcon}>Reset...</Menu.Item>
                </Menu.Group>
                </Menu>
            }
            >
                <Tooltip content="Option">
                    <FontAwesomeIcon icon={faEllipsisVertical}  className='cursor-pointer'/>
                </Tooltip>
        </Popover>
    )
  }

export {Card, CardTitle, CardOption}