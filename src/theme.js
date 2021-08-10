import { createTheme } from '@material-ui/core';
import { grey, blue } from '@material-ui/core/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
  myButton: {
    backgroundColor: grey[50],
    color: blue[50],
    border: '1px solid black',
  },
});
