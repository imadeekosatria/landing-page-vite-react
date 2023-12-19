import avatar from '../../assets/avatar 3.svg';
import PropTypes from 'prop-types';

const ChatFrom = ({props})=>{
    const {text} = props
    return (
        <div className="w-full text-left flex gap-2">
            <img src={avatar} alt="avatar from"  className='w-10 h-auto'/>
            <span className="p-4 bg-slate-200 w-fit rounded-e-xl rounded-tl-xl">{text}</span>
        </div>
    )
}

export default ChatFrom

ChatFrom.propTypes ={
    props: PropTypes.object,
    text: PropTypes.string
}