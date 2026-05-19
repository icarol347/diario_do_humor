import React from 'react'
import {NavLink, Route, Routes} from  "react-router-dom"
import styled from "styled-components";
import Footer from '../components/Footer';
const Login = () => {
    return ( 
        <div className='h-screen w-screen'>
            <div className='flex justify-center items-center h-screen texto bg-linear-to-tl from-teal-200 to-teal-100'>
                <div className='shadow-xl shadow-gray-500 rounded-[4rem] flex justify-center bg-white'>
                    <div className='bg-linear-to-br from-teal-700 to-teal-400 flex items-center justify-center py-65 px-20 rounded-[4rem]'>
                        <h1 className='font-bold text-6xl text-white '>Diário do humor</h1>
                    </div>
                    <div className='flex-col items-center py-50 px-50 space-y-8 justify-items-center'>
                        <h2 className='text-2xl'>Digite seu nome</h2>
                        <input type="text" id='nome' className='border-2 rounded-full w-80 py-2' placeholder="Seu nome aqui!" />
                        <div className='pt-20'>
                            <NavLink to="/HomePage" className='bg-linear-to-br from-teal-700 to-teal-500 duration-300 ease-out hover:py-4 hover:px-6 text-white font-bold py-2 px-4 rounded-[4rem]'>Entrar</NavLink>
                        </div>
                    </div>
                </div>

            </div>
            <footer>
                <Footer />
            </footer>
        </div>
        
     );
}
 
export default Login;