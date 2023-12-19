import avatar from '../../assets/avatar male.svg'
import PropTypes from 'prop-types'

const ChatSender = ({props})=>{
    const {text} = props
    return (
        <div className="w-full flex gap-2 justify-end">
            <span className="p-4 bg-indigo-500 w-fit rounded-s-xl rounded-tr-xl text-slate-50">{text}</span>        
            <img src={avatar} alt="avatar sender"  className='w-10 h-auto'/>
        </div>
    )
}

export default ChatSender

ChatSender.propTypes={
    props: PropTypes.object,
    text: PropTypes.string
}