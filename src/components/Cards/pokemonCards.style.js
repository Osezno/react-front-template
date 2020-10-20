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


const LayoutStyle = makeStyles(theme => ({
    container: {
        height: '80px',
        borderRadius: borders.softSquare,
        boxShadow: shadows.rightShadow,
        backgroundColor: colors.contrastDarker,
        ...centeredBox,
        '&:hover':animations.hovers.grow,
        
    },
    containerSelected: {
        borderRadius: borders.softSquare,
        backgroundColor: colors.contrastDarker,
        ...centeredBox
    },
    pokemonImage:{
        width: '80px',
        maxWidth: '80px',
        '&:hover':{
            transform:' scale(1)',
          }
    },
    pokemonSelected:{
        width: '120px',
        maxWidth: '120px'
    }
}))

export default LayoutStyle