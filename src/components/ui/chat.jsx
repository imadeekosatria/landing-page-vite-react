import { faComments } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tooltip} from "evergreen-ui"
import { PropTypes } from "prop-types"
import avatarSender from '../../assets/avatar male.svg'
import avatarFrom from '../../assets/avatar 3.svg'
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faPaperclip } from "@fortawesome/free-solid-svg-icons"



const ChatLink = ({prop}) => {
  const {tooltip} = prop
  return (
    <Tooltip content="Chat" position={tooltip}>
      <a href="#" className="h-fit">
        <FontAwesomeIcon
          icon={faComments}
          fixedWidth
          size="lg"
          className="message"
        />
      </a>
    </Tooltip>
  );
}

ChatLink.propTypes={
  prop: PropTypes.object,
  tooltip: PropTypes.string
}



const ChatSender = ({props})=>{
    const {text} = props
    return (
        <div className="sender">
            <span>{text}</span>        
            <img src={avatarSender} alt="avatar sender"/>
        </div>
    )
}

ChatSender.propTypes={
    props: PropTypes.object,
    text: PropTypes.string
}


const ChatFrom = ({props})=>{
    const {text} = props
    return (
        <div className="from">
            <img src={avatarFrom} alt="avatar from"/>
            <span>{text}</span>
        </div>
    )
}


ChatFrom.propTypes ={
    props: PropTypes.object,
    text: PropTypes.string
}

const ChatInput = (props)=>{
  const formHandler = (event)=>{
    event.preventDefault()
    props.onSubmit(event.target.msg.value)
  }
  return (
    <form onSubmit={formHandler}>
      <div>
          <input type="text" name="msg" placeholder="Type your message" aria-autocomplete="false"/>
          <div className="chat-bottom">
              <div>
                  <FontAwesomeIcon icon={faFaceSmile}/>
                  <FontAwesomeIcon icon={faPaperclip}/>
              </div>
              <button type="submit">Send now</button>
          </div>
      </div>
    </form>
  )
}

ChatInput.propTypes ={
  onSubmit: PropTypes.func,
  chat: PropTypes.object
}

export {ChatLink, ChatSender, ChatFrom, ChatInput}
