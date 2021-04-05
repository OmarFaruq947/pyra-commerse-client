import React from "react";
import "./EiteProduct.css";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faPlus,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
const EditProduct = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={2}>
            <Paper className={classes.paper} id="leftColumn">
              <div>
                <FontAwesomeIcon icon={faTasks} />{" "}
                <Link className="adminLink" to="/ManegeProduct">
                  Manage Product
                </Link>
              </div>
              <div>
                <FontAwesomeIcon icon={faPlus} />{" "}
                <Link className="adminLink" to="/AddProduct">
                  AddProduct
                </Link>
              </div>
              <div>
                <FontAwesomeIcon icon={faPencilAlt} />{" "}
                <Link className="adminLink" to="/EditProduct">
                  Edit Product
                </Link>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9}>
          <h3 className="addProductHeading">Edit Product</h3>
         <div className="hr"></div>
            <Paper className={classes.paper} id="rightColumn">
              Eit product feture is comming sooooonnnn.........
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditProduct;
