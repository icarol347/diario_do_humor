import React from 'react'
import {NavLink, Route, Routes} from  "react-router-dom"
import styled from "styled-components";
import Footer from '../components/Footer';

import Header from '../components/Header';
const HomePage = () => {
    return ( 
        <div>
            <Header />
            <h1>Página Inicial</h1>
            <Footer />
        </div>
     );
}
 
export default HomePage;