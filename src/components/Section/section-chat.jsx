import { ChatSender, ChatFrom, ChatInput} from "../ui/chat"

const SectionChat=()=>{
    const message = [
        {
            sender:{
                text: 'Are you ready?'
            }
        },
        {
            from:{
                text: 'I have prepared everything'
            }
        }
    ]
   
    return (
        <div className="w-full flex justify-between h-full flex-col gap-4">
            <div className="mb-4 flex flex-col gap-6">
                {
                    message.map((msg, index)=>{
                        if(msg.sender){
                            return <ChatSender key={index} props={{text: msg.sender.text}}/>
                        }else{
                            return <ChatFrom key={index} props={{text: msg.from.text}}/>
                        }
                    })
                }
            </div>
            <ChatInput />
        </div>
    )
}

export default SectionChat