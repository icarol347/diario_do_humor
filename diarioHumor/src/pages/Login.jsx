import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
const Login = () => {
    return ( 
        <div className='flex justify-center items-center h-screen'>
            <div className='shadow-lg shadow-black rounded-2xl flex justify-center p-10'>
                <div className='bg-orange-400 flex items-center'>
                    <h1 className='bold'>DIÁRIO DO HUMOR</h1>
                </div>
                <div className='flex-col items-center'>
                    <h3>Digite seu nome</h3>
                    <input type="text" className='border-2 rounded-4xl' placeholder="Seu nome aqui!"/>
                    <Button label="Entrar"/>
                </div>     
            </div>
        </div>
     );
}
 
export default Login;