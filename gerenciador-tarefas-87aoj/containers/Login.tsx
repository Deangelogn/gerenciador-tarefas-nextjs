import React, {useState, ChangeEvent} from "react";

export const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const doLogin = (evento: ChangeEvent) => {
        try {
            evento.preventDefault();
            if (!login || !password){
                return setError('Favor informar usuário e senha');
            }
            setError('Dados validados com sucesso!')
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <div className="container-login">
            <img className="logo" src="/logo.svg" alt="Logo Fiap"/>
            <form>
                <p classname="error">{error}</p>
                <div className="input">
                    <img src="/mail.svg" alt="Informe seu login"/>
                    <input type="text" placeholder="login" 
                        value={login}
                        onChange={evento => setLogin(evento.target.value)}
                    />
                </div>
                <div className="input">
                    <img src="/lock.svg" alt="Informe sua senha"/>
                    <input type="password" placeholder="senha"
                        value={password}
                        onChange={evento => setPassword(evento.target.value)}
                    />
                </div>
                <button onClick={doLogin}>Login</button>
            </form>
        </div>
    );
}