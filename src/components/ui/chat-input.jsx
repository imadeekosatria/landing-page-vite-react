import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faPaperclip } from "@fortawesome/free-solid-svg-icons"
const ChatInput = ()=>{
    return (
        <div className="bg-slate-200 rounded-xl">
            <input type="text" placeholder="Type your message" className="w-full bg-inherit rounded-xl px-4 pt-4 focus:outline-none"/>
            <div className="flex justify-between p-4 items-center">
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faFaceSmile} className="cursor-pointer hover:animate-bounce"/>
                    <FontAwesomeIcon icon={faPaperclip} className="cursor-pointer hover:animate-bounce"/>
                </div>
                <button type="submit" className="bg-indigo-500 px-4 py-2 text-slate-50 rounded-lg">Send now</button>
            </div>
        </div>
    )
}

export default ChatInput