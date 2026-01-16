import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useAuthForm } from "../hooks/useAuthForm";

export default function Register() {
  const { email, setEmail, senha, setSenha, confirmar, setConfirmar, erro, setErro, handleSubmit } = useAuthForm(true);

  const navigate = useNavigate();

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold text-center mb-6">
        Cadastro
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
        <input
          type="password"
          placeholder="Confirmar senha"
          className="input"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
        />
        {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}
        <button type="submit" className="btn-primary">
          Cadastrar
        </button>
      </form>
      <p className="link" onClick={() => navigate("/")}>
        Já tem conta? Entrar
      </p>
    </AuthLayout>
  );
}
