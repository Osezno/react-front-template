import { makeStyles } from '@material-ui/styles';



const centeredBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}


const ContentStyle = makeStyles(theme => ({
    menu:{
        backgroundColor:theme.color.secondary
    },
    mItem:{
        color:theme.color.lightest,
        '& > .MuiIconButton-root':{
            color:theme.color.lightest
        }
      //  backgroundColor:theme.color.secondary
    },
    mItemActive:{
        color:theme.color.lightest,
        backgroundColor:theme.color.secondaryLigth,
        '& > .MuiIconButton-root':{
            color:theme.color.lightest
        }
    },
    container: {
        width: "100vw",
        height: "100vh",
    },
    wrapper:{
        overflow:'auto',
        height: "calc(100vh - 60px)",
        padding:theme.padding,
    },
    titleWrapper:{
        ...centeredBox,
        justifyContent:"center",
        marginLeft: theme.margin
    },
    title:{
        color: theme.color.secoundary,
        ...theme.typography.title
    },
    subtitle:{
        color: theme.color.primary,
        ...theme.typography.subtitle
    },
    dashboard:{
        ...theme.grids.dashboardGrid
    },
    dashboard2:{
        ...theme.grids.dashboardGrid2,
    },
    twoGrid:{
        ...theme.grids.twoColumnGrid
    },

}))

export default ContentStyle