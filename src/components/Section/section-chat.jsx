import ChatFrom from "../ui/chat-from"
import ChatInput from "../ui/chat-input"
import ChatSender from "../ui/chat-sender"

const SectionChat=()=>{
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="mb-4">
                <ChatSender props={{text: 'Are you ready?'}}/>
                <ChatFrom props={{text: 'I have prepared everything'}}/>
            </div>
            <ChatInput/>
        </div>
    )
}

export default SectionChat