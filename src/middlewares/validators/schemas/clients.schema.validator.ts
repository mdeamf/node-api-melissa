import Joi from 'joi';

export default Joi.object({
  cliente_nome: Joi.string().required().min(2).messages({
    'any.required': "o campo 'cliente_nome' é obrigatório",
    'string.min': "o campo 'cliente_nome' deve ter no mínimo 2 caracteres",
    'string.empty': "o campo 'cliente_nome' não pode estar vazio",
  }),
  cliente_nasc: Joi.date().max('now').required().messages({
    'any.required': "o campo 'cliente_nasc' é obrigatório.",
    'date.max': "o campo 'cliente_nasc' não pode ser igual a data de hoje.",
    'date.empty': 'o campo "cliente_nasc" não pode estar vazio.',
  }),
  is_active: Joi.boolean().required().messages({
    'any.required': "o campo 'is_active' é obrigatório",
    'string.empty': "o campo 'is_active' não pode estar vazio",
  }),
  endereco_id: Joi.number().required().messages({
    'any.required': "o campo 'endereco_id' é obrigatório",
    'string.empty': "o campo 'endereco_id' não pode estar vazio",
  }),
  contatos: Joi.array().items(Joi.string()).required().messages({
    'any.required': "o campo 'contatos' é obrigatório",
    'array.base': "o campo 'contatos' deve ser um array de strings",
  }),
});
