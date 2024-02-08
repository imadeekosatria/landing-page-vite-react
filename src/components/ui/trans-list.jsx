import { PropTypes } from "prop-types";
import { Popover, Menu, TrashIcon, Tooltip } from "evergreen-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const TransactionList = ({ props }) => {
  const { avatar, name, date, value } = props;
  return (
    <>
      <hr />
      <div className="item-container">
        <img src={avatar} alt="avatar user"/>
        <div className="item-context">
          <span>{name}</span>
          <span>{date}</span>
        </div>
        <div className="item-value">
          <span>{value}</span>
          <Popover
            content={
              <Menu>
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
        </div>
      </div>
    </>
  );
};

export default TransactionList;

TransactionList.propTypes = {
  props: PropTypes.object,
  avatar: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  date: PropTypes.string,
};
