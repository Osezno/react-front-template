import React from 'react'
import PropTypes from 'prop-types'
import Text from '../../../components/Text/Text'
import { useStyles } from '../Account.styles';
import colors from '../../../constants/colors';

const Info = props => {
    const classes = useStyles();
    return (
        <div className={classes.infoRoot}>
            <Text color={colors.darkest} type="title">
              { props.title} 
            </Text>
            <Text className={classes.highligth} color={colors.primary} type="title">
                {props.highlight}
            </Text>
            <Text color={colors.dark} type="subtitle">
                {props.message}
            </Text>
           
        </div>
    )
}

Info.propTypes = {
    name: PropTypes.string,
    message: PropTypes.string
}

export default Info
