import React, { useContext, useEffect, useState } from 'react';
import './Home.css';

import HomePageContent from './HomePageContent';
import { Container } from 'react-bootstrap';
import { userContext } from '../../App';



const Home = () => {

    const {productInfo, setProductInfo} = useContext(userContext);
console.log('product info......',productInfo)

const [commerce, setCommerce] = useState([]);
useEffect(()=> {
    fetch('http://localhost:5000/Commerce')
    .then(res => res.json())
    .then(data => setProductInfo(data))
}, [])





    return (
        <Container value={commerce}>
            <div className="cards">
            {
                productInfo.map(info => <HomePageContent Data={info}>{info.productName}</HomePageContent>)
            }
            </div>
        </Container>
    );
};

export default Home;