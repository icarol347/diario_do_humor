import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import Login from '../pages/Login';
const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/HomePage" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
     );
}
 
export default AppRoutes;