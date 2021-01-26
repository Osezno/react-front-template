import { makeStyles } from '@material-ui/styles';
import shadows from '../../constants/shadows';
import borders from '../../constants/borders';

const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const box = {
    width: '100%',
    padding: '7px',
    borderRadius: '4px'
}
const logo = {
    height: '26px',
    zIndex: 1,
    margin: 2
}
const LayoutStyle = makeStyles(theme => ({
    ...theme.animations,
    root: {
        position: 'relative',
        display: 'block',
        textAlign: 'center',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
        marginBottom: 0,
        height: '100%',
        [theme.breakpoints.largeTablet]: {
            overflowX: 'auto',
        }
    },
    header: {
        width: '100%',
        color: theme.color.white,
        backgroundColor: theme.color.white,
        display: 'flex',
        alignItems: 'center',
        height: '30px',
        justifyContent: 'justify-content: left;',
        borderBottom: `${theme.color.contrastDark} 1px solid`,
    },
    footer: {
        ...theme.grids.octaGrid,
        backgroundColor: theme.color.primary,
        color: theme.color.contrastLight,
        position: 'absolute',
        bottom: '30px',
        height: '26px',
        zIndex: 1,
        [theme.breakpoints.largeTablet]: {
            position: 'static',
        }
    },
    logoContainer: {
        height: 30,
        marginLeft: 30
    },
    logout: {
        color: theme.color.dark,
        float: "left",
        position: "absolute",
        right: "30px"
    },
    toggle: {
        color: theme.color.dark,
    },
    logo: {
        ...logo
    },
    success: {
        backgroundColor: theme.color.success,
        ...box
    },
    error: {
        backgroundColor: theme.color.error,
        ...box
    },
    whitelogo: {
        ...logo,
        filter: 'grayscale(1)'
    },
    inverseLogo: {
        ...logo
    },
    container: {
        ...theme.grids.twoColumnGrid,
    },
    unavailable: {
        overflow: 'auto',
        height: "100vh",
        ...centeredBox
    },
    letrero: {
        animation:`$fadeUp ease-in  3s `,
        border: 'solid',
        padding: '20px',
        borderRadius: '10px',
    },
    title: {
        ...theme.typography.title,
        color: theme.color.secondary
    },
    subtitle: {
        ...theme.typography.subtitle,
        color: theme.color.primary
    },
    // searchContent: {
    //     ...theme.grids.thirdsGrid,
    // },
    // pokemonQuery: {
    //     height: '50%',
    //     overflowX: 'auto',
    //     borderBottom: "#fff solid",
    // },
    // pokemonGrid: {
    //     ...theme.grids.fourColumnGrid
    // },
    // iconContainer: {
    //     display: 'flex',
    //     marginLeft: theme.spacing(3),
    // },
    // blackScreen: {
    //     width: '75%',
    //     height: '75%',
    //     margin: '0  auto',
    //     borderRadius: borders.softSquare,
    //     backgroundColor: theme.color.contrastDark,
    //     ...centeredBox,
    // },
    // ScreenContainer: {
    //     width: '230px',
    //     height: '200px',
    //     margin: '0  auto',
    //     marginTop: theme.spacing(1),
    //     ...centeredBox,
    //     boxShadow: shadows.leftShadow,
    //     borderRadius: borders.polygon,
    //     backgroundColor: theme.color.light,
    // }
}))

export default LayoutStyle