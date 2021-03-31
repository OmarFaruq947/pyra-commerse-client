import React from "react";
import "./TopNavber.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSortAmountUp,
  faUserShield,
  faIdBadge,
  faBlog,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuItem, MenuList } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const TopNaveber = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Pyra Commerce
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <MenuList className="menu">
                <MenuItem>
                
                  <FontAwesomeIcon icon={faHome} href="/Home" />
                  Home
                 
                </MenuItem>
                <MenuItem>
                  <FontAwesomeIcon icon={faSortAmountUp} href="/Orders"/>
                  Orders
                </MenuItem>
                <MenuItem>
                  <FontAwesomeIcon icon={faUserShield} href="/Admin" />
                  Admin
                </MenuItem>
                <MenuItem>
                  <FontAwesomeIcon icon={faIdBadge} href="/Deals" />
                  Deals
                </MenuItem>
                <MenuItem>
                  <FontAwesomeIcon icon={faBlog}  href="/Blog"/>
                  Blog
                </MenuItem>
                <MenuItem>
                  <FontAwesomeIcon icon={faIdCard} href="/Contact"/>
                  Contact
                </MenuItem>
              </MenuList>
            </Typography>
            <Button color="inherit" href="/Login" >Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default TopNaveber;
