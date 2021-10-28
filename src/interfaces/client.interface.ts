import { IPhone } from './phone.interface';
import { IAddress } from './address.interface';

export interface IClient {
  cliente_nome: string;
  cliente_nasc: Date;
  is_active: boolean;
}

export interface IClientBody extends IClient {
  endereco_id: IAddress[];
  contatos: IPhone[];
}

export interface IClientModel extends IClient {
  endereco_id: string[];
  contatos: string[];
}
