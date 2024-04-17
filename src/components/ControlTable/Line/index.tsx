import { PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { Controle } from "../../../interfaces";
import { useState } from "react";
import { Modal } from "../../Modal";

interface IProps {
  controle: Controle | null;
  setSelectedControle: (id: number) => void;
  handleOpenModal: () => void;
  handleEdit: (controle: Controle) => void;
}

interface IModal {
  showModal: boolean;
  id: number | null;
}

export const ControlTableLine = ({
  controle,
  setSelectedControle,
  handleOpenModal,
  handleEdit,
}: IProps) => {
  const [modal, setModal] = useState<IModal>({
    showModal: false,
    id: null,
  });

  const handCloseModal = () => setModal({ showModal: false, id: null });
  return (
    <tr>
      <td>{controle?.veiculo?.placa}</td>
      <td>{controle?.veiculo?.marca}</td>
      <td>{controle?.veiculo?.veiculo}</td>
      <td
        onClick={() =>
          setModal({ showModal: true, id: controle?.motorista.id || null })
        }
      >
        {controle?.motorista?.nome}
      </td>
      <td>{controle?.data_saida}</td>
      <td>{controle?.hora_saida}</td>
      <td>{controle?.km_saida.toLocaleString("pt-BR")}</td>
      <td>{controle?.km_retorno?.toLocaleString("pt-BR") ?? "-"}</td>
      <td>{controle?.data_retorno}</td>
      <td>{controle?.hora_retorno}</td>
      <td>
        {controle?.veiculo?.km_troca_oleo?.toLocaleString("pt-BR") ?? "-"}
      </td>
      <td>{controle?.destino}</td>
      <td className="actions">
        <button>
          <PencilSimple
            onClick={() => {
                controle?.id && setSelectedControle(controle.id)
                handleEdit(controle!);
            }}
            color="blue"
            size={20}
          />
        </button>
        <button>
          <TrashSimple
            onClick={() => {
              controle?.id && setSelectedControle(controle.id);
              handleOpenModal();
            }}
            color="red"
            size={20}
          />
        </button>
      </td>
      {modal.showModal && (
        <Modal closeModal={handCloseModal} motorista={controle?.motorista} />
      )}
    </tr>
  );
};
