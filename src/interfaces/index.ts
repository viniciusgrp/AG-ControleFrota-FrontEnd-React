export interface Controle {
  veiculo: Veiculo;
  motorista: Motorista;
  data_saida: string;
  hora_saida: string;
  km_saida: number;
  destino: string;
  id?: number;
  data_retorno: string;
  hora_retorno: string;
  km_retorno: number;
  km_percorrido: number;
}

export interface Veiculo {
  placa: string;
  marca: string;
  veiculo: string;
  km_troca_oleo: number;
  id?: number;
}

export interface Motorista {
  cod_motorista: string;
  nome: string;
  telefone: string;
  cnh: string;
  id?: number;
}
