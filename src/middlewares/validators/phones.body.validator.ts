import Joi from 'joi';

export default Joi.object({
    ddd: Joi.string().required().messages({
      "any.required": "o campo 'ddd' é obrigatório",
      "string.empty": "o campo 'ddd' não pode estar vazio",
    }),
    numero: Joi.string().required().min(1).messages({
      "any.required": "o campo 'numero' é obrigatório",
      "string.min": "o campo 'numero' deve ter no mínimo 1 caractere",
      "string.empty": "o campo 'numero' não pode estar vazio",
    }),
    descricao: Joi.string().required().min(2).messages({
      "any.required": "o campo 'descricao' é obrigatório",
      "string.min": "o campo 'descricao' deve ter no mínimo 2 caracteres",
      "string.empty": "o campo 'descricao' não pode estar vazio",
    }),
});