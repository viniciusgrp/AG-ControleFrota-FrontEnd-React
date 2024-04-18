import { useState } from "react";
import { Controle } from "../../interfaces";
import { ControlModal } from "../ControlModal";
import { CardMobileStyle } from "./style";

interface IProps {
  controle: Controle;
  setSelectedControle: (id: number) => void;
  handleOpenModal: () => void;
  handleEdit: (controle: Controle) => void;
}

export const CardMobile = ({
  controle,
  setSelectedControle,
  handleOpenModal,
  handleEdit,
}: IProps) => {
  const [controleModal, setControleModal] = useState<boolean>(false);

  const handleModal = () => {
    setControleModal(!controleModal);
  };
  return (
    <CardMobileStyle>
      <ul>
        <li>
          <p>Placa</p>
          <p>{controle.veiculo.placa}</p>
        </li>
        <li>
          <p>Motorista</p>
          <p>{controle.motorista.nome}</p>
        </li>
        <li>
          <p>Data Saída</p>
          <p>{controle.data_saida}</p>
        </li>
        <li>
          <p>KM Saída</p>
          <p>{controle.km_saida.toLocaleString("pt-br")}</p>
        </li>
        <li>
          <p>Destino</p>
          <p>{controle.destino}</p>
        </li>
        <li>
          <p>Data Retorno</p>
          <p>{controle.data_retorno}</p>
        </li>
        <li>
          <p>KM Retorno</p>
          <p>{controle.km_retorno?.toLocaleString("pt-br")}</p>
        </li>
        <div className="actions">
          <button className="see">Visualizar</button>
          <button
            className="edit"
            onClick={() => {
              setSelectedControle(controle.id!);
              handleEdit(controle);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              setSelectedControle(controle.id!);
              handleOpenModal();
            }}
            className="delete"
          >
            Excluir
          </button>
        </div>
      </ul>
      {controleModal && (
        <ControlModal handleModal={handleModal} controle={controle!} />
      )}
    </CardMobileStyle>
  );
};
