import { Skeleton } from "@mui/material";
import { ControlTableLine } from "./Line";
import { ControlTableStyle } from "./style";
import { Controle } from "../../interfaces";

interface IProps {
  isLoading: boolean;
  controle: Controle[] | null;
  setSelectedControle: (id: number) => void;
  selectedControle: number | null;
  handleOpenModal: () => void;
  handleEdit: (controle: Controle) => void;
}

export const ControlTable = ({
  isLoading,
  controle,
  setSelectedControle,
  handleOpenModal,
  handleEdit
}: IProps) => {
  if (isLoading) {
    return (
      <ControlTableStyle>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Veículo</th>
            <th>Motorista</th>
            <th>Data Saída</th>
            <th>Hora Saída</th>
            <th>Destino</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px", borderBottom: "1px solid gray" }}
          />
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px", borderBottom: "1px solid gray" }}
          />
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px", borderBottom: "1px solid gray" }}
          />
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px", borderBottom: "1px solid gray" }}
          />
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px", borderBottom: "1px solid gray" }}
          />
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px", borderBottom: "1px solid gray" }}
          />
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px", borderBottom: "1px solid gray" }}
          />
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px", borderBottom: "1px solid gray" }}
          />
          <Skeleton
            variant="rectangular"
            height={"30px"}
            style={{ marginTop: "4px" }}
          />
        </tbody>
      </ControlTableStyle>
    );
  }
  return (
    <ControlTableStyle>
      <thead>
        <tr>
          <th>Placa</th>
          <th>Marca</th>
          <th>Veículo</th>
          <th>Motorista</th>
          <th>Data Saída</th>
          <th>Hora Saída</th>
          <th>KM Saída</th>
          <th>Destino</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {controle?.map((c) => (
          <ControlTableLine
            controle={c}
            setSelectedControle={setSelectedControle}
            handleOpenModal={handleOpenModal}
            handleEdit={handleEdit}
          />
        ))}

      </tbody>
    </ControlTableStyle>
  );
};
