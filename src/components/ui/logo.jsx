import { Tooltip} from "evergreen-ui"
import PropTypes from 'prop-types'
const Logo =({props})=>{
    const {text, tooltip} = props
    return (
        <>
            <Tooltip content='S.' position={tooltip}>
                <a href="/" className="logo">{text}</a>
            </Tooltip>
        </>
    )
}

Logo.propTypes={
    props: PropTypes.object,
    text: PropTypes.string,
    tooltip: PropTypes.string
}

export default Logo