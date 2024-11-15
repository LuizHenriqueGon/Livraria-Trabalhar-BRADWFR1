import React from "react";
import "./login.css"; // Certifique-se de que o caminho para o CSS está correto

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
          <a href="Cadastro.html">Crie uma.</a>
        </p>

        <input type="submit" value="Acessar" className="btn" />
      </form>
    </div>
  );
}

export default Login;
