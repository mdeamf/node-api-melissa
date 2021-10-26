import Joi from 'joi';

export default Joi.object({
  usuario_nome: Joi.string().required().min(2).messages({
    'any.required': "o campo 'usuario_nome' é obrigatório",
    'string.min': "o campo 'usuario_nome' deve ter no mínimo 2 caracteres",
    'string.empty': "o campo 'usuario_nome' não pode estar vazio",
  }),
  usuario_senha: Joi.string().required().min(2).messages({
    'any.required': "o campo 'usuario_senha' é obrigatório",
    'string.min': "o campo 'usuario_senha' deve ter no mínimo 2 caracteres",
    'string.empty': "o campo 'usuario_senha' não pode estar vazio",
  }),
  is_active: Joi.boolean().required().messages({
    'any.required': "o campo 'is_active' é obrigatório",
    'string.empty': "o campo 'is_active' não pode estar vazio",
  }),
});
