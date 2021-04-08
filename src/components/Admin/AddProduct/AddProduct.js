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

  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      wight: data.wight,
      price: data.price,
      description:data.description,
      imageURL: imageURL,
    };
    const url = `http://localhost:5000/AddProduct`;
    // console.log('data...',data);

    // console.log('Product data..',productData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("server side response ok", res)); //................................................(1)
  };

  // ............Imag BB upload file section start.............
  const handleImageUpload = (Commerce) => {
    // console.log("problem...", Commerce.target.files);
    const imageData = new FormData();
    imageData.set("key", "dfb313aeb94c3a9ea3817ab2ab1642b9");
    imageData.append("image", Commerce.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url); // img dynamic url
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // ............Imag BB upload file section END.............

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
                <div className="add_product_form">
                  <div className="ProductName_wight">
                    Product name:
                    <input
                      className="input_box_addProduct"
                      type="text"
                      required
                      placeholder="Product name"
                      name="name"
                      ref={register}
                    />
                    <span className="Product_wight">
                      Product Wight:
                      <input
                        className="input_box_addProduct"
                        type="number"
                        required
                        placeholder="Product Wight"
                        name="wight"
                        ref={register}
                      />
                    </span>
                  </div>
                  <br />
                  <br />
                  <div className="add_product_upload_product">
                    Product Price:
                    <input
                      className="input_box_addProduct"
                      type="number"
                      required
                      placeholder="Product Price"
                      name="price"
                      ref={register}
                    />
                    <span className="product_pic">
                      Upload file:
                      <input type="file" onChange={handleImageUpload} />
                    </span>
                  </div>
                  <br/><br/>
                  <span>
                    <textarea
                      className="textarea"
                      rows="5"
                      cols="110"
                      name="comment"
                      form="usrform"
                      name="description"
                      ref={register}
                      placeholder="Write product description...(Optional)"
                    >
                    </textarea>
                  </span>
                  <br />
                  <br />
                  Submit:
                  <button className="submit_button" type="submit">
                    Submit
                  </button>
                  <button className="reset_button" type="reset">
                    Reset
                  </button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddProduct;
