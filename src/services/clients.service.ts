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
}

export default ClientsService;
