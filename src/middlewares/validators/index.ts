import clientsValidator from './schemas/clients.schema.validator';
import usuariosValidator from './schemas/usuarios.schema.validator';
import addressesValidator from './schemas/addresses.schema.validator';
import phonesValidator from './schemas/phones.schema.validator';

const schemas = {
  clientsValidator: clientsValidator,
  usuariosValidator: usuariosValidator,
  enderecosValidator: addressesValidator,
  telefonesValidator: phonesValidator,
};

export default schemas;
