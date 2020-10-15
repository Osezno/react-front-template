import React from 'react'
import PropTypes from 'prop-types'
import  shadows  from '../../constants/shadows';
import  borders  from '../../constants/borders';
import PaginationButtonStyle from './PaginationButton.style'

const useStyles = PaginationButtonStyle

const PaginationButton = (props) => {
    const { index } = props

   

    const classes = useStyles()
    
    let contentRendered = <div className={classes.container}>{index}</div> 
    
    return contentRendered
}

PaginationButton.defaultProps = {

}

PaginationButton.propTypes = {
    pokemon: PropTypes.number, 
}

export default PaginationButton
