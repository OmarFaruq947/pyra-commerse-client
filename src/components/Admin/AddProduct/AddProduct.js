import React from "react";
import "./AddPdoduct.css";

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
import { Col, Form, Row } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from '@material-ui/icons/Save';

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
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const AddProduct = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={2}>
            <Paper className={classes.paper} id="leftColumn">
              <div>
                <FontAwesomeIcon icon={faTasks}/> <Link className="adminLink" to="/ManegeProduct">
                 Manage Product
                </Link>
              </div>
              <div>
                <FontAwesomeIcon icon={faPlus}/> <Link className="adminLink" to="/AddProduct">
                  AddProduct
                </Link>
              </div>
              <div>
                <FontAwesomeIcon icon={faPencilAlt}/> <Link className="adminLink" to="/EditProduct">
                  Edit Product
                </Link>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={9}>
         <h3 className="addProductHeading">Add Product</h3>
         <div className="hr"></div>
            <Paper className={classes.paper} id="rightColumn">
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Product Name"
                  />
                  <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Product Wight"
                  />
                </div>

                <div className="add_product_button">
                  <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Product Price"
                  />
                
                  <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                  >
                    Add Product
                  </Button>
                </div>
                <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddProduct;
