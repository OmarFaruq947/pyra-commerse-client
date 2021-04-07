import React from "react";
import "./CheckOut.css";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  })
);

const CheckOut = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="checkout_card  effect1  checkout_page">
        <h2 className="checkout_hading">Checkout</h2>
        <div className="checkout_hr"></div>
        <div className="">
          <div>
            <div className="checkout_card_content">
              <h4>description</h4>
              <h4>Quality</h4>
              <h4>Price</h4>
            </div>
            <hr className="hr_checkout" />
            <div className="checkout_card_content">
              <span>description</span>
              <span>Q</span>
              <span>$ </span>
            </div>

            <div className="checkout_card_content">
              <span>description</span>
              <span>Q</span>
              <span>$ </span>
            </div>
            <hr className="hr_checkout2" />
            <div className="checkout_card_content">
              <span>Total</span>
              <span>---</span>
              <span>$ </span>
            </div>
          </div>
        </div>
        <Link className="OrdersLink" to="/Orders">
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<AddShoppingCartIcon />}
        >
          Checkout
        </Button>
        </Link>
       
      </div>
    </div>
  );
};

export default CheckOut;
