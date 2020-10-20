import { createMuiTheme } from '@material-ui/core/styles';
import  colors  from './constants/colors';
import  breakpoints  from './constants/breakpoints';
import grids from './constants/grids';
// Create a theme instance.
const theme = createMuiTheme({
  grids:{...grids},
  color:{...colors},
  breakpoints:{...breakpoints},
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary:{
      main:colors.secondary
    },
  },
});

export default theme;