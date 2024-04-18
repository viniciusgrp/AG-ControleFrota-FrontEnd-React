import { useEffect, useState } from "react";
import { api } from "../../services";
import { MotoristasStyle } from "./style";
import { Header } from "../../components/Header";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Motorista } from "../../interfaces";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ModalDelete } from "../../components/ModalDelete";

export const Motoristas = () => {
  const [motoristasOptions, setMotoristasOptions] = useState<Motorista[] | []>(
    []
  );
  const [selectedMotorista, setSelectedMotorista] = useState<
    number | null | unknown
  >(null);
  const [editar, setEditar] = useState(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  const getDrivers = async () => {
    try {
      const { data } = await api.get("/motoristas/get/");
      setMotoristasOptions([
        { id: -1, nome: "Cadastrar novo motorista" },
        ...data,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
        await api.delete(`/motoristas/${selectedMotorista}/`)
        getDrivers()
        setSelectedMotorista(motoristasOptions[0].id)
        toast.success("Motorista excluído com sucesso!")
        setModalDelete(false)
    } catch (error) {
        console.error(error)
        toast.error("Erro!")
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (body: any) => {
    try {
        if (editar) {
            const {data} = await api.patch(`/motoristas/${selectedMotorista}/`, body)
            toast.success("Motorista editado com sucesso!")
            getDrivers()
            setEditar(false)
            setSelectedMotorista(motoristasOptions[0].id)
        } else {
            const {data} = await api.post(`/motoristas/`, body)
            toast.success("Motorista cadastrado com sucesso!")
            getDrivers()
            setSelectedMotorista(motoristasOptions[0].id)
        }
    } catch (error) {
        console.error(error)
        toast.error("Erro!")
    }
  };

  useEffect(() => {
    getDrivers();
  }, []);

  useEffect(() => {
    const motorista = motoristasOptions.find((e) => e.id === selectedMotorista);
    if (motorista) {
      setEditar(true);
      setValue("telefone", motorista.telefone);
      setValue("cnh", motorista.cnh);
      setValue("cod_motorista", motorista.cod_motorista);
      if (motorista.nome === "Cadastrar novo motorista") {
        setValue("nome", "");
        setEditar(false);
      } else {
        setValue("nome", motorista.nome);
      }
    }
  }, [motoristasOptions, selectedMotorista, setValue]);

  return (
    <MotoristasStyle>
      <Header />
      <div className="container">
        <h1>Motoristas</h1>
        <FormControl
          style={{
            width: "90%",
            maxWidth: "500px",
            marginLeft: "5%",
            marginTop: "16px",
          }}
        >
          <InputLabel id="label-motorista">
            Para editar selecione um motorista
          </InputLabel>
          <Select
            onChange={(e) => setSelectedMotorista(e.target.value)}
            labelId="label-motorista"
            label="Para editar selecione um motorista"
            value={selectedMotorista}
          >
            {motoristasOptions?.map((e) => (
              <MenuItem value={e.id}>{e.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Nome"
            {...register("nome")}
            value={watch("nome")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Telefone (99) 99999-9999"
            {...register("telefone")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="CNH"
            {...register("cnh")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Código do Motorista"
            {...register("cod_motorista")}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button type="submit">
            {editar ? "Salvar alterações" : "Cadastrar"}
          </button>
          {editar && <button type="button" onClick={() => setModalDelete(true)} className="delete">Excluir</button>}
        </form>
      </div>
      {modalDelete && <ModalDelete item="Motorista" handleClose={() => setModalDelete(false)} handleDelete={() => handleDelete()}/>}
    </MotoristasStyle>
  );
};
