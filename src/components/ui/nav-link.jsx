import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faHouse,
  faUserGroup,
  faWallet,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "evergreen-ui";
import PropTypes from "prop-types";

const Link = ({ prop }) => {
  const { tooltip } = prop;
  return (
    <ol className="rounded-full bg-slate-200 w-fit p-1 flex flex-col gap-2.5">
      <li>
        <Tooltip content="Home page" position={tooltip}>
          <a href="#">
            <FontAwesomeIcon
              icon={faHouse}
              size="lg"
              style={{ color: "#f8fafc" }}
              className="bg-indigo-500 active:bg-indigo-500 rounded-full px-2.5 py-3"
              fixedWidth
            />
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Notification" position={tooltip}>
          <a href="#">
            <FontAwesomeIcon
              icon={faBell}
              fixedWidth
              size="lg"
              className="hover:bg-slate-100 rounded-full px-2.5 py-3"
            />
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="History" position={tooltip}>
          <a href="#">
            <FontAwesomeIcon
              fixedWidth
              icon={faClock}
              size="lg"
              className="hover:bg-slate-100 rounded-full px-2.5 py-3"
            />
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="User Group" position={tooltip}>
          <a href="#">
            <FontAwesomeIcon
            fixedWidth
              icon={faUserGroup}
              size="lg"
              className="hover:bg-slate-100 rounded-full px-2.5 py-3"
            />
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Wallet" position={tooltip}>
          <a href="#">
            <FontAwesomeIcon
              icon={faWallet}
              fixedWidth
              size="lg"
              className="hover:bg-slate-100 rounded-full px-2.5 py-3"
            />
          </a>
        </Tooltip>
      </li>
      <li>
        <Tooltip content="Settings" position={tooltip}>
          <a href="#">
            <FontAwesomeIcon
              icon={faGear}
              fixedWidth
              size="lg"
              className="hover:bg-slate-100 rounded-full px-2.5 py-3"
            />
          </a>
        </Tooltip>
      </li>
    </ol>
  );
};

Link.propTypes = {
  prop: PropTypes.object,
  tooltip: PropTypes.string,
};

export default Link;
