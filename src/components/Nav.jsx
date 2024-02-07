import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Position, Tooltip } from "evergreen-ui"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { Avatar } from "evergreen-ui"
import Logo from "./ui/logo"
import { ChatLink } from "./ui/chat"
import Link from "./ui/nav-link"

const Nav = () => {
  const tooltipPosition = Position.RIGHT;
  return (
    <>
      <nav className="nav-container">
        <div className="nav">
          <div className="logo-container">
            <Logo props={{ text: "S.", tooltip: tooltipPosition }} />
            <ChatLink prop={{ tooltip: tooltipPosition }} />
          </div>
          <div className="nav-link">
            <Link prop={{ tooltip: tooltipPosition }} />
          </div>
          <div className="bottom-nav-container">
            <Tooltip content="Profile" position={tooltipPosition}>
              <Avatar name="Jeroen Ransijn" size={40} />
            </Tooltip>
            <Tooltip content="Logout" position={tooltipPosition}>
              <a href="logout">
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" className="bg-slate-200 p-2.5 rounded-full"/>
              </a>
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
