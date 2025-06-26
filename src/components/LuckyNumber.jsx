import style from "./LuckyNumber.module.css";
import { useState } from "react";

export function LuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [sorteados, setSorteados] = useState([]);
  const [mensagem, setMensagem] = useState("");

  function handleClick() {
    const novoNumero = Math.ceil(Math.random() * 31) + 1;
    if (sorteados.includes(novoNumero)) {
      setMensagem(`O número ${novoNumero} já foi sorteado!`);
    } else {
      setSorteados([...sorteados, novoNumero]);
      setLuckyNumber(novoNumero);
      setMensagem("");
    }
  }

  function handleReiniciar() {
    setLuckyNumber(0);
    setSorteados([]);
    setMensagem("");
  }

  return (
    <div className={style.luckyNumber}>
      <h1 className={style.title}>Lucky Number 🎲</h1>
      <button className={style.button} onClick={handleClick}>Clique!</button>
      <button
        className={style.button}
        onClick={handleReiniciar}
        style={{ marginLeft: "10px", color: "#fff", background: "hotpink", border: "none" }}
      >
        <span role="img" aria-label="Reiniciar">🔄</span> Reiniciar
      </button>
      <div>
        Número sorteado: {mensagem ? "Repetido!" : luckyNumber > 0 ? luckyNumber : "Nenhum ainda"}
      </div>
      {mensagem && <div style={{ color: "red" }}>{mensagem}</div>}
      <div>
        Números já sorteados: {sorteados.join(", ")}
      </div>
    </div>
  );
}