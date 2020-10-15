import { makeStyles } from '@material-ui/styles';
import colors from '../../constants/colors';
import shadows from '../../constants/shadows';
import borders from '../../constants/borders';
import grids from '../../constants/grids';
import breakpoints from '../../constants/breakpoints';



const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const logo = {
    height: '26px',
    zIndex: 1,
    margin:2
}
const LayoutStyle = makeStyles(theme => ({
    root: {
        position: 'relative',
        display: 'block',
        textAlign: 'center',
        background: '#000',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 0,
        background: colors.primary,
        height: '100%',
        [breakpoints.largeTablet]: {
            overflowX: 'auto',
        }
    },
    header: {
        width: '100%',
        color: colors.white,
        backgroundColor: colors.white,
        display: 'flex',
        alignItems: 'center',
        height: '30px',
        justifyContent: 'justify-content: left;',
        borderBottom: `${colors.contrastDark} 1px solid`,


    },
    footer: {
        ...grids.octaGrid,
        backgroundColor: colors.primary,
        color: colors.contrastLight,
        position: 'absolute',
        bottom: '30px',
        height: '26px',
        zIndex: 1,
        [breakpoints.largeTablet]: {
            position: 'static',
        }
    },
    logoContainer:{
        height:30,
        marginLeft: 30
    },
    logo: {
        ...logo
    },
    whitelogo: {
        ...logo,
        filter: 'grayscale(1)'
    },
    inverseLogo: {
        ...logo
    },
    container: {
        ...grids.twoColumnGrid
    },
    searchContent: {
        ...grids.thirdsGrid,
    },
    pokemonQuery: {
        height: '50%',
        overflowX: 'auto',
        borderBottom: "#fff solid",
    },
    pokemonGrid: {
        ...grids.fourColumnGrid
    },
    iconContainer: {
        display: 'flex',
        marginLeft: theme.spacing(3),
    },
    blackScreen: {
        width: '75%',
        height: '75%',
        margin: '0  auto',
        borderRadius: borders.softSquare,
        backgroundColor: colors.contrastDark,
        ...centeredBox,
    },
    ScreenContainer: {
        width: '230px',
        height: '200px',
        margin: '0  auto',
        marginTop: theme.spacing(1),
        margin: '0  auto',
        ...centeredBox,
        boxShadow: shadows.leftShadow,
        borderRadius: borders.polygon,
        backgroundColor: colors.light,
    }
}))

export default LayoutStyle