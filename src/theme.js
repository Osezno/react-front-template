import { createMuiTheme } from '@material-ui/core/styles';
import  colors  from './constants/colors';
import  breakpoints  from './constants/breakpoints';
import grids from './constants/grids';
import typography from './constants/typography';
import shadows from './constants/shadows';
import animations from './constants/animations';
// Create a theme instance.
const theme = createMuiTheme({
  grids:{...grids},
  color:{...colors},
  breakpoints:{...breakpoints},
  typography:{...typography},
  //shadows:{...shadows},
  padding:'10px',
  bigPadding:'30px',
  margin:'10px',
  bigMargin:'30px',
  animations:{...animations},
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