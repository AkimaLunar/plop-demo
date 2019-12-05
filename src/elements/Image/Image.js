import React from 'react'
import PropTypes from 'prop-types'
import './Image.styles.css'

const Image = ({
    className,
}) => {
    const rootStyles = `${className} image`
    return (
        <div className={rootStyles}>
            Image
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

export default Image
