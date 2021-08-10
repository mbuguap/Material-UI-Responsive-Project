import {  makeStyles } from '@material-ui/core';
import Navbar from './components/Navbar';

const useStyles = makeStyles((theme) => ({

}));

const App = () => {
  const classes = useStyles();

  return (
    <>
    <Navbar/>
    </>
  );
};

export default App;
