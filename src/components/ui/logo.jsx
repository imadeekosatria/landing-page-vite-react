import { Tooltip} from "evergreen-ui"
import PropTypes from 'prop-types'
const Logo =({props})=>{
    const {text, tooltip} = props
    return (
        <>
            <Tooltip content='Brand Logo' position={tooltip}>
                <a href="/" className="text-3xl font-medium">{text}</a>
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