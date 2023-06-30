import axios from "axios";
import { useEffect, useState } from "react";


function ListarDespesas() {
    const [despesas, setDespesas] = useState([]);
  

  function carregarDados() {
    axios
      .get("http://localhost:3333")
      .then((resposta) => {
        console.log(resposta.data);
        setDespesas(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }


  useEffect(() => {
    carregarDados();
  }, []);




  return (
    <div>
      <h1>Listagem de Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa: any) => (
            <tr key={despesa.id}>
                <td>{despesa.id}</td>
              <td>{despesa.descricao}</td>
              <td>{despesa.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




export default ListarDespesas;

