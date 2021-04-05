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


    return (
        <Container>
            <div className="cards">
            {
                data.map(info => <HomePageContent Data={info}>{info.productName}</HomePageContent>)
            }
            </div>
            </Container>
    );
};

export default Home;