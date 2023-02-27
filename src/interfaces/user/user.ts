export interface ICreateUser{
    name: string;
    email: string;
    cpf:string;
    cell_phone: string;
    birthdate: Date;
    description: string;
    password: string;
    type_account: 'buyer' | 'advertiser';
    address: IAddress
}

interface IAddress{
    cep: string;
    state: string;
    city: string;
    road: string;
    number: number;
    complement?: string;
}