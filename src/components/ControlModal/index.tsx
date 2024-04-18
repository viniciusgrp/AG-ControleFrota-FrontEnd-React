import { X } from "@phosphor-icons/react";
import { Controle } from "../../interfaces";
import { ControlModalStyle } from "./style";

interface IProps {
  controle: Controle;
  handleModal: () => void;
}

export const ControlModal = ({ controle, handleModal }: IProps) => {
  return (
    <ControlModalStyle onClick={() => handleModal()}>
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <header>
          <h2>Veículo</h2>
          <button onClick={() => handleModal()}><X/></button>
        </header>
        <ul>
          <li>
            <p>Placa:</p>
            <p>{controle.veiculo.placa}</p>
          </li>
          <li>
            <p>Marca:</p>
            <p>{controle.veiculo.marca}</p>
          </li>
          <li>
            <p>Modelo:</p>
            <p>{controle.veiculo.veiculo}</p>
          </li>
          <li>
            <p>Troca de óleo::</p>
            <p>{controle.veiculo.km_troca_oleo}</p>
          </li>
        </ul>
        <h2>Motorista</h2>
        <ul>
          <li>
            <p>Código:</p>
            <p>{controle.motorista.cod_motorista}</p>
          </li>
          <li>
            <p>Nome:</p>
            <p>{controle.motorista.nome}</p>
          </li>
          <li>
            <p>Telefone:</p>
            <p>{controle.motorista.telefone}</p>
          </li>
          <li>
            <p>CNH:</p>
            <p>{controle.motorista.cnh}</p>
          </li>
        </ul>
        <h2>Controle</h2>
        <ul>
          <li>
            <p>Data de saída:</p>
            <p>{controle.data_saida}</p>
          </li>
          <li>
            <p>Hora de saída:</p>
            <p>{controle.hora_saida}</p>
          </li>
          <li>
            <p>Destino:</p>
            <p>{controle.destino}</p>
          </li>
          <li>
            <p>KM de saída:</p>
            <p>{controle.km_saida}</p>
          </li>
          <li>
            <p>Data de retorno:</p>
            <p>{controle.data_retorno}</p>
          </li>
          <li>
            <p>Hora de retorno:</p>
            <p>{controle.hora_retorno}</p>
          </li>
          <li>
            <p>KM de retorno:</p>
            <p>{controle.km_retorno}</p>
          </li>
          <li>
            <p>KM percorrido:</p>
            <p>{controle.km_percorrido}</p>
          </li>
        </ul>
      </div>
    </ControlModalStyle>
  );
};
// "data_saida": "2024-04-01",
// "hora_saida": "10:00:00",
// "km_saida": 100000,
// "destino": "São Carlos",
// "data_retorno": "2024-04-03",
// "hora_retorno": "12:00:00",
// "km_retorno": 110000,
// "km_percorrido": 10000
