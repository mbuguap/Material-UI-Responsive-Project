import { useState } from 'react';
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { Notifications, Mail, Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: { display: 'block' },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: { display: 'none' },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: { display: 'none' },
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logoLg}>
          Peter Mbugua
        </Typography>
        <Typography variant='h6' className={classes.logoSm}>
          Petr
        </Typography>
        <div className={classes.search}>
          <Search />

          <InputBase placeholder='Search…' className={classes.input} />
        </div>

        <div className={classes.icons}>
          <Search className={classes.searchButton} />
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='secondary' className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt='Unsplash'
            src='https://images.unsplash.com/photo-1622495892577-2d07f607968e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
