import PropTypes from "prop-types"
const SpendingList = ({props, collectIndex})=>{
    const {image, name, dateTime, } = props
    const {length, current} = collectIndex
    return (
        <>
            <div>
                <img src={image} alt="Store logo"/>
                <div>
                    <span>{name}</span>
                    <span>{dateTime}</span>
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