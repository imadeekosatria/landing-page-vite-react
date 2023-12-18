import PropTypes from 'prop-types'

const Card = ({children, className})=>(
    <div className={`p-4 rounded-3xl ${className}`}>
        {children}
    </div>
)

Card.propTypes={
    children: PropTypes.node,
    className: PropTypes.string
}

const CardTitle = ({children, className})=>(
    <span className={`font-medium ${className}`}>{children}</span>
)

CardTitle.propTypes={
    children: PropTypes.node,
    className: PropTypes.string
}

export {Card, CardTitle}