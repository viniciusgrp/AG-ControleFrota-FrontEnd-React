import { ModalDeleteStyle } from "./style"

interface IProps {
    item: string;
    handleClose: () => void;
    handleDelete: () => void;
}

export const ModalDelete = ({item, handleClose, handleDelete}: IProps) => {
    return (
        <ModalDeleteStyle onClick={() => handleClose()}>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                    <h2>Deseja realmente excluir esse {item}?</h2>
                    <div className="buttons">
                        <button className="cancel" onClick={() => handleClose()}>Cancelar</button>
                        <button className="delete" onClick={() => handleDelete()}>Excluir</button>
                    </div>
            </div>
        </ModalDeleteStyle>
    )
}