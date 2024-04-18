import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { VeiculosStyle } from "./style";
import { Veiculo } from "../../interfaces";
import { useForm } from "react-hook-form";
import { api } from "../../services";
import { toast } from "react-toastify";
import { ModalDelete } from "../../components/ModalDelete";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export const Veiculos = () => {
  const [veiculosOptions, setVeiculosOptions] = useState<Veiculo[] | []>([]);
  const [selectedVeiculo, setSelectedVeiculo] = useState<
    number | unknown | null
  >(null);
  const [editar, setEditar] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);

  const { register, handleSubmit, setValue, watch } = useForm();

  const getVeiculos = async () => {
    try {
      const { data } = await api.get("/veiculos/get/");
      setVeiculosOptions([{ id: -1, placa: "Cadastrar novo veículo" }, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/veiculos/${selectedVeiculo}/`);
      getVeiculos();
      setSelectedVeiculo(veiculosOptions[0].id);
      toast.success("Veículo excluído com sucesso!");
      setModalDelete(false);
    } catch (error) {
      console.error(error);
      toast.error("Erro!");
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (body: any) => {
    try {
      if (editar) {
        const { data } = await api.patch(`/veiculos/${selectedVeiculo}/`, body);
        toast.success("Veículo editado com sucesso!");
        getVeiculos();
        setEditar(false);
        setSelectedVeiculo(veiculosOptions[0].id);
      } else {
        const { data } = await api.post(`/veiculos/`, body);
        toast.success("Veículo cadastrado com sucesso!");
        getVeiculos();
        setSelectedVeiculo(veiculosOptions[0].id);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro!");
    }
  };

  useEffect(() => {
    getVeiculos();
  }, []);

  useEffect(() => {
    const veiculo = veiculosOptions.find((e) => e.id === selectedVeiculo);
    if (veiculo) {
        setEditar(true)
        setValue("marca", veiculo.marca)
        setValue("veiculo", veiculo.veiculo)
        setValue("km_troca_oleo", veiculo.km_troca_oleo)
        if (veiculo.placa === "Cadastrar novo veículo") {
          setValue("placa", "");
          setEditar(false);
        } else {
          setValue("placa", veiculo.placa);
        }
    }
  },[veiculosOptions, setValue, selectedVeiculo])

  return (
    <VeiculosStyle>
      <Header />
      <div className="container">
        <h1>Veíclos</h1>
        <FormControl
          style={{
            width: "90%",
            maxWidth: "500px",
            marginLeft: "5%",
            marginTop: "16px",
          }}
        >
          <InputLabel id="label-veiculo">
            Para editar selecione um veículo
          </InputLabel>
          <Select
            onChange={(e) => setSelectedVeiculo(e.target.value)}
            labelId="label-veiculo"
            label="Para editar selecione um veículo"
            value={selectedVeiculo}
          >
            {veiculosOptions?.map((e) => (
              <MenuItem value={e.id}>{e.placa}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Placa"
            {...register("placa")}
            value={watch("placa")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Marca"
            {...register("marca")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Veiculo"
            {...register("veiculo")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="KM troca de óleo"
            {...register("km_troca_oleo")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button type="submit">
            {editar ? "Salvar alterações" : "Cadastrar"}
          </button>
          {editar && (
            <button
              type="button"
              onClick={() => setModalDelete(true)}
              className="delete"
            >
              Excluir
            </button>
          )}
        </form>
      </div>
      {modalDelete && (
        <ModalDelete
          item="Veículo"
          handleClose={() => setModalDelete(false)}
          handleDelete={() => handleDelete()}
        />
      )}
    </VeiculosStyle>
  );
};
