import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do React Router
import "./cadastro.css";

const Cadastro = () => {
  return (
    <div className="container">
      <div className="form-image">
        <img src="assets/img/undraw_forgot_password_re_hxwm.svg" alt="Imagem de cadastro" />
      </div>
      <div className="form">
        <form action="/assets/php/processar_cadastro.php" method="POST">
          <div className="form-header">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            <div className="login-button">
              <button type="button">
                <Link to="/login">Entrar</Link> {/* Usando Link para redirecionar */}
              </button>
            </div>
          </div>

          <div className="input-group">
            {/* Campos de entrada permanecem os mesmos */}
            <div className="input-box">
              <label htmlFor="firstname">Primeiro nome</label>
              <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required />
            </div>
            <div className="input-box">
              <label htmlFor="lastname">Sobrenome</label>
              <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="Digite seu email" required />
            </div>
            <div className="input-box">
              <label htmlFor="number">Telefone</label>
              <input id="number" type="tel" name="number" placeholder="(xx) xxxx-xxxx" required />
            </div>
            <div className="input-box">
              <label htmlFor="password">Senha</label>
              <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
            </div>
            <div className="input-box">
              <label htmlFor="Confirmepassword">Confirme sua senha</label>
              <input id="Confirmepassword" type="password" name="Confirmepassword" placeholder="Digite sua senha" required />
            </div>
          </div>

          <div className="gender-inputs">
            {/* Inputs de gênero */}
          </div>

          <div className="continue-button">
            <button type="submit">Continuar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
