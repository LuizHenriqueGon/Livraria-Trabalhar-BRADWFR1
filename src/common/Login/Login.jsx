import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do React Router
import "./login.css";

function Login() {
  return (
    <div className="page">
      <form method="POST" action="./processar_login.php" className="formLogin">
        <h1>Login</h1>
        <p>Digite os seus dados de acesso no campo abaixo.</p>

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          required
          autoFocus
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          required
        />

        <a href="/Esqueci_Senha.html">Esqueci minha senha</a>
        <p>
          Ainda não tem uma conta?{" "}
          <Link to="">Crie uma.</Link> {/* Usando Link para redirecionar */}
        </p>

        <input type="submit" value="Acessar" className="btn" />
      </form>
    </div>
  );
}

export default Login;

