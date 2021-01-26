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
    container: {
        width: "100vw",
        height: "100vh",
    },
    wrapper:{
        overflow:'auto',
        height: "calc(100vh - 60px)",
    },
    titleWrapper:{
        ...centeredBox,
        justifyContent:"left",
    },
    title:{
        color: theme.color.secoundary,
        ...theme.typography.title
    },
    dashboard:{
        ...theme.grids.dashboardGrid
    },
    dashboard2:{
        ...theme.grids.dashboardGrid2
    },
    twoGrid:{
        ...theme.grids.twoColumnGrid
    },

}))

export default ContentStyle