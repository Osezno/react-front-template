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

const ContentStyle = makeStyles(theme => ({
    container: {
        ...grids.twoColumnGrid
    },
    searchContent: {
        ...grids.thirdsGrid,
    },
    searchDisplay: {
        height: '100%',
    },
    pokemonQuery: {
        height: '50%',
        overflowX: 'auto',
        borderBottom: "#fff solid",
        '&::-webkit-scrollbar': {
            width: '0 !important'
        },
    },
    pokemonGrid: {
        ...grids.fourColumnGrid,

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
        width: '280px',
        height: '200px',
        margin: '0  auto',
        marginTop: theme.spacing(1),
        margin: '0  auto',
        display: 'block',
        boxShadow: shadows.leftShadow,
        borderRadius: borders.polygon,
        backgroundColor: colors.light,
    },
    buttonsWrapper: {
        width: '100%',
        ...centeredBox,
    },
    bigButton: {
        float: 'right',
        margin: '5px',
        '&:hover': animations.hovers.grow,
        cursor:'pointer'
    },
    moveGrid: {
        ...grids.pentaGrid,
        height: '90px',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
            width: '0 !important'
        },
        padding: '0px',

    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: colors.primaryLight,
        color: colors.contrastDarker,
        border: `2px solid ${colors.contrastDarker}`,
        padding: theme.spacing(2, 4, 3),
    },
    active: {
        cursor: 'pointer',
        '&:hover': animations.hovers.grow,
    }
}))

export default ContentStyle