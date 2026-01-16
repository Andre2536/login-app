import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useAuthForm } from "../hooks/useAuthForm";

export default function Login() {
  const { email, setEmail, senha, setSenha, erro, setErro, handleSubmit } = useAuthForm(false);

  const navigate = useNavigate();

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center mb-6">
        Login
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erro && (
          <p className="text-red-500 text-sm mb-4">
            {erro}
          </p>
        )}
        <button type="submit" className="btn-primary">
          Entrar
        </button>
      </form>
      <p
        className="link"
        onClick={() => navigate("/register")}
      >
        Não tem conta? Cadastre-se
      </p>
    </AuthLayout>
  );
}
