import React, { useState } from "react";
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
import axios from "axios";
import { useForm } from "react-hook-form";

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

  const {register, handleSubmit, watch, errors} = useForm()
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = data => {
    const productData = {
      name: data.name,
      imageURL:imageURL
    };
    const url = `http://localhost:5000/addEvent`
    console.log('data',data);
    console.log(productData);

    fetch(url, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => console.log('server side response ok'))

  };
// const handleSubmit = formSubmit => {

//   console.log('form submit')
// }

  const handleImageUpload = (Commerce) => {
    console.log("problem...", Commerce.target.files);
    const imageData = new FormData();
    imageData.set("key", "dfb313aeb94c3a9ea3817ab2ab1642b9");
    imageData.append("image", Commerce.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {

        console.log(error);
      });
  };

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
            <h3 className="addProductHeading">Add Product</h3>
            <div className="hr"></div>
            <Paper className={classes.paper} id="rightColumn">
              
              <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  Product name: <br/>
                  <input type="text" required  defaultValue="Product Name" name="name" ref={register}/> <br/><br/>
                  Product Wight: <br/>
                  <input type="number" required  defaultValue="Wight"/> <br/><br/>
                </div>

                <div className="add_product_button">
                  Product Price: <br/>
                  <input type="number" required defaultValue="Price"/> <br/><br/>
                  Upload product pic: <br/>
                  <input type="file"  onChange={handleImageUpload} />
                </div>

                Submit: <br/>
                <input type="submit"/>

              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddProduct;
