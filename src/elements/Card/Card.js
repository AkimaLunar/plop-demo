import React from 'react'
import PropTypes from 'prop-types'
import './Card.styles.css'

const Card = ({
    className,
    children
}) => {
    const rootStyles = `${className} card`
    return (
        <div className={rootStyles}>
            {children}
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Card
