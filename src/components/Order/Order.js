import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Order.css';

const Order = () => {
    const {loggedInUser , productInfo}=useContext(userContext);
    // const {productInfo} = useContext(userContext);

    console.log('loggedin user...', loggedInUser);
    console.log('product info', productInfo);
    return (
        <div>

            {/* product information  */}
            <h1> price: {productInfo.price}  </h1> 



            {/* user information */}
            <h3>email: {loggedInUser.email}</h3>
            <img src={loggedInUser.photoURL} alt="" />

        </div>
    );
};

export default Order;