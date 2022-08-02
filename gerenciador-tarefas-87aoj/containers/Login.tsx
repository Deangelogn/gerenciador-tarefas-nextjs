import React from "react";

export const Login = () => {
    return (
        <div className="container-login">
            <img className="logo" src="/logo.svg" alt="Logo Fiap"/>
            <form>
                <div className="input">
                    <img src="/mail.svg" alt="Informe seu login"/>
                    <input type="text" placeholder="login"/>
                </div>
                <div className="input">
                    <img src="/lock.svg" alt="Informe sua senha"/>
                    <input type="password" placeholder="senha"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}