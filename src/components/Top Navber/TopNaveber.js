import React, { useContext } from "react";
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
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              Pyra Commerce
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <MenuList className="menu">
                <MenuItem>
                  <Link className="MenuText" to="/Home">
                    <FontAwesomeIcon icon={faHome} /><br/>
                    Home
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link className="MenuText" to="/Orders">
                    <FontAwesomeIcon icon={faSortAmountUp}/><br/>
                    Orders
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link className="MenuText" to="/AddProduct">
                    <FontAwesomeIcon icon={faUserShield}/><br/>
                    Admin
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link className="MenuText" to="/Deals">
                    <FontAwesomeIcon icon={faIdBadge}/><br/>
                    Deals
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link className="MenuText" to="/Blog">
                    <FontAwesomeIcon icon={faBlog}/><br/>
                    Blog
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link className="MenuText" to="/Contact">
                    <FontAwesomeIcon icon={faIdCard}/><br/>
                    Contact
                  </Link>
                </MenuItem>
              </MenuList>
            </Typography>
            <Link className="MenuText" to="/Login_1">
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default TopNaveber;
