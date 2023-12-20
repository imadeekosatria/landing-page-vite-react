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
          className="bg-orange-200 hover:bg-orange-300 rounded-full px-2.5 py-3"
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
        <div className="w-full flex gap-2 justify-end">
            <span className="px-4 py-2 bg-indigo-500 w-fit rounded-s-xl rounded-tr-xl text-slate-50">{text}</span>        
            <img src={avatarSender} alt="avatar sender"  className='w-10 h-auto'/>
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
        <div className="w-full text-left flex gap-2">
            <img src={avatarFrom} alt="avatar from"  className='w-10 h-auto'/>
            <span className="px-4 py-2 bg-slate-200 w-fit rounded-e-xl rounded-tl-xl">{text}</span>
        </div>
    )
}


ChatFrom.propTypes ={
    props: PropTypes.object,
    text: PropTypes.string
}

const ChatInput = ()=>{
  return (
      <div className="bg-slate-200 rounded-xl">
          <input type="text" placeholder="Type your message" className="w-full bg-inherit rounded-xl px-4 pt-4 focus:outline-none"/>
          <div className="flex justify-between p-4 items-center">
              <div className="flex gap-4">
                  <FontAwesomeIcon icon={faFaceSmile} className="cursor-pointer hover:animate-bounce"/>
                  <FontAwesomeIcon icon={faPaperclip} className="cursor-pointer hover:animate-bounce"/>
              </div>
              <Tooltip content="Send message">
                <button type="submit" className="bg-indigo-500 px-4 py-2 text-slate-50 rounded-lg">Send now</button>
              </Tooltip>
          </div>
      </div>
  )
}

export {ChatLink, ChatSender, ChatFrom, ChatInput}
