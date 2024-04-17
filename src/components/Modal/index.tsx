import { X } from "@phosphor-icons/react";
import {  Motorista } from "../../interfaces";
import { ModalStyle } from "./style";

interface IProps {
  motorista: Motorista | undefined;
  closeModal: () => void;
}

export const Modal = ({ motorista, closeModal }: IProps) => {
  return (
    <ModalStyle onClick={() => closeModal()}>
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <header>
          <h2>Motorista</h2>
          <button onClick={() => closeModal()}>
            <X color="red" size={22} />
          </button>
        </header>
        <ul>
          <li>Nome: {motorista?.nome}</li>
          <li>Código motorista: {motorista?.cod_motorista}</li>
          <li>Telefone: {motorista?.telefone}</li>
          <li>CNH: {motorista?.cnh}</li>
        </ul>
      </div>
    </ModalStyle>
  );
};
