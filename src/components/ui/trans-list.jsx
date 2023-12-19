import { PropTypes } from "prop-types"
import { Popover, Menu, TrashIcon } from "evergreen-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const TransactionList = ({ props }) => {
  const { avatar, name, date, value } = props;
  return (
    <>
      <hr className="w-full" />
      <div className="grid grid-cols-12">
        <img src={avatar} alt="avatar user" className="w-14 my-auto"/>
        <div className="col-span-8 flex flex-col px-2 justify-center">
          <span className="font-medium text-lg">{name}</span>
          <span>{date}</span>
        </div>
        <div className="col-span-3 w-full flex justify-end items-center gap-8">
          <span className="font-medium">{value}</span>
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
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </Popover>
        </div>
      </div>
    </>
  );
};

export default TransactionList;

TransactionList.propTypes={
    props: PropTypes.object,
    avatar: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    date: PropTypes.string
}