import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Context as UserContext } from "../../context/UserContext";
import { useForm } from "../../hooks/useForm";
// import { useDispatch } from 'react-redux';
import { User } from '../../servicios/User';
import './login.css';
export const LoginScreen = ({ history }) => {
    const { login, logout } = useContext(UserContext);
    const [ loading, setLoading] = useState(true)

    // const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        email: 'challenge@alkemy.org',
        password: 'react'
    });

    const { email, password } = formLoginValues;

    const handleLogin = async (e) => {
        e.preventDefault();
        const data = await User.login(email, password);
        if (!data) {
            Swal.fire('Error', 'Hubo un error', 'error');
            return;
        }
        console.log(data.token);
        login(data.token);
        localStorage.setItem('token', data.token);
        //history.replace('/heroes');  // Al apretar el btn redirecciono a otro componente / history.push('/') redirecciona tambien
        // await User.test();
        //setear el context User

    }

    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (token) {
            login(token);
        }
        setLoading(false);
    }, []);

    // este metodo no debería estar aca pero lo dejo para q lo copies y pegues
    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
    }


    return (

        <div className="container login-container">
            <div className="login-padre row">
                <div className="col-md-6 login-form-1">
                    <h3>Iniciar Sesión</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                value={email}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}