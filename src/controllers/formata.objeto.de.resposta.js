class objetoDeResposta {
  /**
   * Esta função recebe dados e insere num objeto de resposta padrão.
   * @param {boolean} hasError recebe true ou false.
   * @param {string} err recebe ou não um erro.
   * @param {*} dados recebe ou não os dados da resposta.
   * @returns retorna o objeto de resposta padronizado.
   */
  static formataObjeto(hasError, err, dados) {
    if (hasError) {
      return {
        hasError,
        error: err.message,
        data: [],
      };
    }

    return {
      hasError,
      error: null,
      data: dados,
    };
  }
}

module.exports = objetoDeResposta;
