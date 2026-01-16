import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthForm(isRegister = false) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !senha || (isRegister && !confirmar)) {
      setErro("Preencha todos os campos");
      return;
    }
    if (isRegister && senha !== confirmar) {
      setErro("As senhas não coincidem");
      return;
    }
    alert(isRegister ? "Cadastro realizado" : "Login realizado com sucesso");
    if (isRegister) navigate("/");
  };

  return {
    email, setEmail,
    senha, setSenha,
    confirmar, setConfirmar,
    erro, setErro,
    handleSubmit
  };
}