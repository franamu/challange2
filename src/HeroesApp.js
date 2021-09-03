// import { AuthContext } from './auth/AuthContext';
// import { authReducer } from './auth/authReducer';
import { Provider as UserContext } from './context/UserContext';
import { AppRouter } from './routers/AppRouter';

// const init = () => {
//     return JSON.parse(localStorage.getItem('user')) || { logged: false };
// }
//El init le pasa la info a estado inicial que se inicializa vacio


export const HeroesApp = () => {
    return (
        <UserContext>
            <AppRouter />
        </UserContext>
    )
}