import PropTypes from "prop-types"
const SpendingList = ({props, collectIndex})=>{
    const {image, name, dateTime, } = props
    const {length, current} = collectIndex
    return (
        <>
            <div className="flex items-center gap-x-2">
                <img src={image} alt="Store logo"  className="w-16 rounded-full bg-slate-300"/>
                <div className="flex flex-col ">
                    <span className="font-medium">{name}</span>
                    <span className="text-slate-400 text-sm">{dateTime}</span>
                </div>
            </div>
            {
                length-1 != current && <hr/>
            }
        </>
    )
}

export default SpendingList

SpendingList.propTypes ={
    props: PropTypes.object,
    image: PropTypes.string,
    name: PropTypes.string,
    dateTime: PropTypes.string,
    collectIndex: PropTypes.object,
    index: PropTypes.number,
    length: PropTypes.number,
}