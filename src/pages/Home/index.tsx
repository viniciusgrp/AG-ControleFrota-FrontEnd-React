import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { HomeStyle } from "./style";
import { api } from "../../services";
import {
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { ControlTable } from "../../components/ControlTable";
import { Controle, Motorista, Veiculo } from "../../interfaces";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ModalDelete } from "../../components/ModalDelete";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { CardMobile } from "../../components/CardMobile";

export const Home = () => {
  const [data, setData] = useState<Controle[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [module, setModule] = useState<string>("listagem");
  const [editar, setEditar] = useState<boolean>(false);
  const [selectedControle, setSelectedControle] = useState<number | null>(null);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [motoristasOptions, setMotoristasOptions] = useState<Motorista[] | []>(
    []
  );
  const [selectedMotorista, setSelectedMotorista] = useState<
    number | null | unknown
  >(-1);
  const [veiculosOptions, setVeiculosOptions] = useState<Veiculo[] | []>([]);
  const [selectedVeiculo, setSelectedVeiculo] = useState<
    number | unknown | null
  >(-1);
  const [bodyState, setBody] = useState({
    data_saida: "",
    data_retorno: "",
  });
  const [searchDate, setSearchDate] = useState<Date | null>(null);

  const { register, handleSubmit, setValue, watch } = useForm();

  useEffect(() => {
    setValue("km_saida", "0");
    setValue("km_retorno", "0");
  }, []);

  const getDrivers = async () => {
    try {
      const { data } = await api.get("/motoristas/get/");
      setMotoristasOptions([
        {
          id: -1,
          nome: "Selecione um motorista",
        },
        ...data,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const { data } = await api.get("/controle/get");
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getVeiculos = async () => {
    try {
      const { data } = await api.get("/veiculos/get/");
      setVeiculosOptions([{ id: -1, placa: "Selecione um veículo" }, ...data]);
    } catch (error) {
      console.error(error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (body: any) => {
    try {
      if (editar) {
        await api.patch(`/controle/${selectedControle}/`, {
          ...body,
          ...bodyState,
          veiculo: selectedVeiculo,
          motorista: selectedMotorista,
          km_percorrido:
            Number(watch("km_retorno")) - Number(watch("km_saida")) <= 0
              ? "0"
              : Number(watch("km_retorno")) - Number(watch("km_saida")),
        });
        toast.success("Veículo editado com sucesso!");
        getData();
        setEditar(false);
        setModule("listagem");
      } else {
        await api.post(`/controle/`, {
          ...body,
          ...bodyState,
          veiculo: selectedVeiculo,
          motorista: selectedMotorista,
          km_percorrido:
            Number(watch("km_retorno")) - Number(watch("km_saida")) <= 0
              ? "0"
              : Number(watch("km_retorno")) - Number(watch("km_saida")),
        });
        toast.success("Veículo cadastrado com sucesso!");
        getData();
        setModule("listagem");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro!");
    }
  };

  const handleCloseModal = () => setDeleteModal(false);

  const handleOpenModal = () => setDeleteModal(true);

  const handleDeleteControle = async () => {
    try {
      await api.delete(`/controle/${selectedControle}/`);
      getData();
      handleCloseModal();
      toast.success("Controle excluído com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro!");
    }
  };

  useEffect(() => {
    getData();
    getDrivers();
    getVeiculos();
  }, []);

  const handleSelectControle = (id: number) => setSelectedControle(id);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleEdit = (controle: Controle) => {
    setValue("km_saida", controle.km_saida);
    setValue("km_retorno", controle.km_retorno);
    setValue("hora_saida", controle.hora_saida);
    setValue("hora_retorno", controle.hora_retorno);
    setValue("destino", controle.destino);
    setSelectedVeiculo(controle.veiculo.id);
    setSelectedMotorista(controle.motorista.id);
    setBody({
      data_saida: controle.data_saida,
      data_retorno: controle.data_retorno ?? "",
    });
    setEditar(true);
    setModule("criacao");
  };

  const handleClear = () => {
    setValue("km_saida", "");
    setValue("km_retorno", "");
    setValue("hora_saida", "");
    setValue("hora_retorno", "");
    setValue("destino", "");
    setSelectedVeiculo("");
    setSelectedMotorista("");
    setBody({
      data_saida: "",
      data_retorno: "" ?? "",
    });
    setModule("criacao");
  };

  const getControleDate = async () => {
    if (searchDate === null) {
      getData();
      return;
    }
    try {
      const { data } = await api.get("/controle/date/", {
        params: {
          data_pesquisa: format(new Date(searchDate), "yyyy-MM-dd"),
        },
      });
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    data?.forEach((e) => {
      (e.veiculo.km_troca_oleo - e.km_saida <= 1000 ||
        e.veiculo.km_troca_oleo - (e.km_retorno || 0) <= 1000) &&
        toast.error(
          `Veículo de placa ${e.veiculo.placa} está próximo à troca de óleo.`
        );
    });
  }, [data]);

  return (
    <HomeStyle>
      <Header changePages={() => setModule("listagem")} />
      <div className="infos">
        <h1>Controle de Frota</h1>
        {module === "listagem" ? (
          <button onClick={() => handleClear()}>Criar Controle</button>
        ) : (
          <button onClick={() => setModule("listagem")}>
            Listar Controles
          </button>
        )}
      </div>
      {module === "listagem" && (
        <>
          <h3 className="filterTitle">Pesquisa por data de saída</h3>
          <div className="filter">
            <DatePicker
              value={searchDate}
              onChange={(date) => setSearchDate(date)}
            />
            <button className="clean" onClick={() => setSearchDate(null)}>
              Limpar
            </button>
            <button className="search" onClick={() => getControleDate()}>
              Pesquisar
            </button>
          </div>
        </>
      )}
      {module === "listagem" ? (
        isMobile ? (
          data?.map((c) => (
            <CardMobile
              setSelectedControle={handleSelectControle}
              handleOpenModal={handleOpenModal}
              handleEdit={handleEdit}
              controle={c}
            />
          ))
        ) : (
          <ControlTable
            controle={data}
            selectedControle={selectedControle}
            isLoading={isLoading}
            setSelectedControle={handleSelectControle}
            handleOpenModal={handleOpenModal}
            handleEdit={handleEdit}
          />
        )
      ) : (
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel id="label-motorista">Selecione um motorista</InputLabel>
            <Select
              onChange={(e) => {
                setSelectedMotorista(e.target.value);
              }}
              labelId="label-motorista"
              label="Para editar selecione um motorista"
              value={selectedMotorista}
            >
              {motoristasOptions?.map((e) => (
                <MenuItem key={e.cod_motorista} value={e.id}>
                  {e.nome}
                </MenuItem>
              ))}
            </Select>
            <InputLabel id="label-veiculo">Selecione um veículo</InputLabel>
            <Select
              onChange={(e) => setSelectedVeiculo(e.target.value)}
              labelId="label-veiculo"
              label="Para editar selecione um veículo"
              value={selectedVeiculo}
            >
              {veiculosOptions?.map((e) => (
                <MenuItem key={e.placa} value={e.id}>
                  {e.placa}
                </MenuItem>
              ))}
            </Select>
            Data Saída
            <DatePicker
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(date: any) =>
                setBody((state) => {
                  return { ...state, data_saida: format(date, "yyyy-MM-dd") };
                })
              }
              value={bodyState.data_saida}
            />
            <label className="timeLabel">
              Hora Saída
              <input
                className="timeInput"
                type="time"
                {...register("hora_saida")}
                value={watch("hora_saida")}
              />
            </label>
            Data Retorno
            <DatePicker
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(date: any) =>
                setBody((state) => {
                  return { ...state, data_retorno: format(date, "yyyy-MM-dd") };
                })
              }
              value={bodyState.data_retorno}
            />
            <label className="timeLabel">
              Hora Retorno
              <input
                className="timeInput"
                type="time"
                {...register("hora_retorno")}
                value={watch("hora_retorno")}
              />
            </label>
            <TextField
              label="Destino"
              {...register("destino")}
              value={watch("destino")}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="KM Saida"
              {...register("km_saida")}
              value={watch("km_saida")}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="KM Retorno"
              {...register("km_retorno")}
              value={watch("km_retorno")}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="KM Percorrido"
              disabled
              {...register("km_percorrido")}
              value={
                Number(watch("km_retorno")) - Number(watch("km_saida")) <= 0
                  ? "0"
                  : Number(watch("km_retorno")) - Number(watch("km_saida"))
              }
              InputLabelProps={{
                shrink: true,
              }}
            />
            <button className="confirm button">
              {editar ? "Editar" : "Enviar"}
            </button>
            <button
              onClick={() => setModule("listagem")}
              className="cancel button"
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
      {deleteModal && (
        <ModalDelete
          item="controle"
          handleClose={() => handleCloseModal()}
          handleDelete={() => handleDeleteControle()}
        />
      )}
    </HomeStyle>
  );
};
