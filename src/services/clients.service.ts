import mongoose from 'mongoose';
import { IClientBody, IClientModel } from '../interfaces/client.interface';
import { AddressesModel, PhonesModel, ClientsModel } from '../models';

class ClientsService {
  static async createClientAddressPhone(clienteBody: IClientBody) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const clienteInserir: IClientModel = {
        cliente_nome: clienteBody.cliente_nome,
        cliente_nasc: clienteBody.cliente_nasc,
        is_active: clienteBody.is_active,
        endereco_id: [],
        contatos: [],
      };

      const enderecos = await AddressesModel.create(clienteBody.endereco_id, {
        session: session,
      });
      console.log(enderecos);

      clienteInserir.endereco_id = enderecos.map((endereco) => endereco._id);

      const telefones = await PhonesModel.create(clienteBody.contatos, {
        session: session,
      });
      console.log(telefones);

      clienteInserir.contatos = telefones.map((telefone) => telefone._id);

      const cliente = await ClientsModel.create([clienteInserir], {
        session: session,
      });
      console.log(cliente);

      await session.commitTransaction();
      session.endSession();

      return cliente;
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      return err;
    }
  }

  static async getAllClients() {
    const clientes = await ClientsModel.find()
      .select({
        _id: 1,
        cliente_nome: 1,
        is_active: 1,
      })
      .populate({
        path: 'endereco_id',
        select: {
          _id: 0,
          rua: 1,
          numero: 1,
          complemento: 1,
          bairro: 1,
          cep: 1,
          cidade: 1,
        },
      })
      .populate({
        path: 'contatos',
        select: {
          _id: 0,
          ddd: 1,
          numero: 1,
          descricao: 1,
        },
      });
    return clientes;
  }
}

export default ClientsService;
