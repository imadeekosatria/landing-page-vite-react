import { useEffect, useRef, useState } from "react"
import { ChatSender, ChatFrom, ChatInput} from "../ui/chat"

const SectionChat=()=>{
    const [message, setMessage] = useState([
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
    ])
    const ref=useRef(null)
    useEffect(()=>{
        ref.current.scrollIntoView({behavior: 'smooth'})
    },[message])
    return (
        <div className="w-full flex justify-between h-full flex-col gap-4">
            <div className="mb-4 flex flex-col gap-6 overflow-y-auto h-[8rem] 2xl:h-60 px-4" >
                {
                    message.map((msg, index)=>{
                        if(msg.sender){
                            return <ChatSender key={index} props={{text: msg.sender.text}}/>
                        }else{
                            return <ChatFrom key={index} props={{text: msg.from.text}}/>
                        }
                    })
                }
                <div ref={ref}></div>
            </div>
            <ChatInput onSubmit={(data)=>{setMessage([...message, {sender:{text: data}}])}}/>
        </div>
    )
}

export default SectionChat