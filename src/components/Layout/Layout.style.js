import { makeStyles } from '@material-ui/styles';

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
    mItem:{
        [theme.breakpoints.largeTablet]: {
            minHeight: "30px !important",
        }
    },
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
            ...theme.grids.oneColumnGrid,
        }
      
    },
    footerLink: {
        [theme.breakpoints.largeTablet]: {
            display: 'none',
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
        animation: `$fadeUp ease-in  3s `,
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
  
}))

export default LayoutStyle