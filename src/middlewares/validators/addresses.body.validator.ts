import Joi from 'joi';

export default Joi.object({
    rua: Joi.string().required().min(2).messages({
      "any.required": "o campo 'rua' é obrigatório",
      "string.min": "o campo 'rua' deve ter no mínimo 2 caracteres",
      "string.empty": "o campo 'rua' não pode estar vazio",
    }),
    numero: Joi.string().required().min(2).messages({
      "any.required": "o campo 'numero' é obrigatório",
      "string.min": "o campo 'numero' deve ter no mínimo 2 caracteres",
      "string.empty": "o campo 'numero' não pode estar vazio",
    }),
    complemento: Joi.string(),
    bairro: Joi.string(),
    cep: Joi.string(),
    cidade: Joi.string(),
});