import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { withSpacing } from 'Utilities/spacing'
import { constructStyles } from './Button.styles'

const Button = ({
    className,
}) => {

    const styles = useMemo(
        () => constructStyles(),
        []
    )
    return (
        <div
            className={className}
            css={styles}
        >
            Button
        </div>
    )
}

Button.defaultProps = {

}

Button.propTypes = {
    className: PropTypes.string,
}

export default withSpacing(Button)
