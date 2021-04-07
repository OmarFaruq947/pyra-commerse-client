import React, { useEffect, useState } from 'react';
import './Home.css';
import FackData from '../../FackData.json';
import HomePageContent from './HomePageContent';
import { Container } from 'react-bootstrap';



const Home = () => {

const [data, setData] = useState([]);
useEffect(() => {
    setData(FackData);
    console.log('fack data',FackData);
})


// const [commerce, setCommerce] = useState([]);
// useEffect(()=> {
//     fetch('http://localhost:5000/Commerce')
//     .then(res => res.json())
//     .then(data => setCommerce(data))
// }, [])


    return (
        <Container value={data}>
            <div className="cards">
            {
                data.map(info => <HomePageContent Data={info}>{info.productName}</HomePageContent>)
            }
            </div>


            {/* {
            <div className="col-md-3">
                <img style={{height:'300px'}} src={commerce.imageURL} alt=""/>

            </div>
            } */}


        </Container>
    );
};

export default Home;