import { makeStyles } from '@material-ui/styles';
import colors from '../../constants/colors';
import shadows from '../../constants/shadows';
import borders from '../../constants/borders';
import grids from '../../constants/grids';
import animations from '../../constants/animations';


const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const PaginationButtonStyle = makeStyles(theme => ({
    container: {
        height: '23px',
        width: '100%',
        borderRadius: borders.softSquare,
        boxShadow: shadows.rightShadow,
        backgroundColor: colors.secondary,
        color: colors.lightest,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover':animations.hovers.grow,
    },
    
}))

export default PaginationButtonStyle