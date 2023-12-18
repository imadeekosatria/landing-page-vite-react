import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Position, Tooltip } from "evergreen-ui"
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { Avatar } from "evergreen-ui"
import Logo from "./ui/logo"
import Chat from "./ui/chat"
import Link from "./ui/nav-link"

const Nav = () => {
  const tooltipPosition = Position.RIGHT;
  return (
    <>
      <nav className="col-start-1 min-h-screen w-24 bg-white text-center py-4 grid-rows-6">
        <div className="row-span-2 flex flex-col justify-between h-28">
          <Logo props={{ text: "S.", tooltip: tooltipPosition }} />
          <Chat prop={{ tooltip: tooltipPosition }} />
        </div>
        <div className="row-span-3 py-[1.5rem] flex flex-col items-center">
          <Link prop={{ tooltip: tooltipPosition }} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Tooltip content="Profile" position={tooltipPosition}>
            <Avatar name="Jeroen Ransijn" size={40} />
          </Tooltip>
          <Tooltip content="Logout" position={tooltipPosition}>
            <a href="logout">
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" className="bg-slate-200 p-2.5 rounded-full"/>
            </a>
          </Tooltip>
        </div>
      </nav>
    </>
  );
};

export default Nav;
