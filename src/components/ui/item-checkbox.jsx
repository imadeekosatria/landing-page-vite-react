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
    <Pane className="bg-slate-200 dark:bg-slate-700 rounded-xl px-4 w-[10rem] flex-grow 2xl:w-[21rem] flex justify-between items-center">
      <Checkbox
        label={<span className="font-semibold dark:text-white text-sm">{text}</span>}
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
