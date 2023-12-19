/* eslint-disable react/prop-types */
import { Checkbox, Pane } from "evergreen-ui"
import { PropTypes } from "prop-types"
import { useState } from "react"

const ItemCheckBox = ({props})=>{
    const {text, check} = props
    const [isCheck, setIsCheck] = useState(check)
    return (
        <div >
            <Pane className="bg-gray-100 rounded-xl px-4 py-0.5 w-36" >
                <Checkbox label={text} checked={isCheck} value={text} onChange={()=>setIsCheck(!isCheck)}/>
            </Pane>
        </div>
    )
}

ItemCheckBox.PropTypes ={
    props: PropTypes.object,
    text: PropTypes.string,
    check: PropTypes.bool,
}

export default ItemCheckBox