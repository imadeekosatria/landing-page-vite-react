import { faComments } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip} from "evergreen-ui"
import { PropTypes } from "prop-types"

const Chat = ({prop}) => {
  const {tooltip} = prop
  return (
    <Tooltip content="Chat" position={tooltip}>
      <a href="#" className="h-fit">
        <FontAwesomeIcon
          icon={faComments}
          fixedWidth
          size="lg"
          className="bg-orange-200 hover:bg-orange-300 rounded-full px-2.5 py-3"
        />
      </a>
    </Tooltip>
  );
}

Chat.propTypes={
  prop: PropTypes.object,
  tooltip: PropTypes.string
}
export default Chat;
