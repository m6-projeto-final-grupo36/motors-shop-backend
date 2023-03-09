export interface ICreateUser {
  name: string;
  email: string;
  cpf: string;
  cell_phone: string;
  birthdate: Date;
  description: string;
  password: string;
  type_account: "buyer" | "advertiser";
  address: IAddress;
}

interface IAddress {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: number;
  complement?: string;
}

export interface IAddressUpdate {
  cep?: string;
  state?: string;
  city?: string;
  road?: string;
  number?: number;
  complement?: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  cell_phone?: string;
  birthdate?: Date;
  description?: string;
  type_account?: "buyer" | "advertiser";
  password?: string;
}

export interface IForgotPassword {
  name: string;
  email: string;
}

export interface IResetPassword {
  password: string;
}
