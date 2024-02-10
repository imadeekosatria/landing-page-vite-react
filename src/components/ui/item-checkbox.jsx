import {
  Checkbox,
  Pane,
  Popover,
  Menu,
  EditIcon,
  TrashIcon,
  Tooltip
} from "evergreen-ui";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const ItemCheckBox = ({ props }) => {
  const { text, check } = props
  const [isCheck, setIsCheck] = useState(check);
  return (
    <Pane className="pane">
      <Checkbox
        label={<span className="item-label">{text}</span>}
        checked={isCheck}
        value={text}
        onChange={() => setIsCheck(!isCheck)} 
        
      />
      <Popover
        content={
          <Menu>
            <Menu.Group>
              <Menu.Item icon={EditIcon} secondaryText="⌘R">
                Rename...
              </Menu.Item>
            </Menu.Group>
            <Menu.Divider />
            <Menu.Group>
              <Menu.Item icon={TrashIcon} intent="danger">
                Delete...
              </Menu.Item>
            </Menu.Group>
          </Menu>
        }
      >
        <Tooltip content="Option">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </Tooltip>
      </Popover>
    </Pane>
  );
};

ItemCheckBox.propTypes = {
  props: PropTypes.object,
  text: PropTypes.string,
  check: PropTypes.bool,
};

export default ItemCheckBox;
