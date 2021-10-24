class objetoDeResposta {
  /**
   * Esta função recebe dados e insere num objeto de resposta padrão.
   * @param {boolean} hasError recebe true ou false.
   * @param {string} err recebe ou não um erro.
   * @param {*} dados recebe ou não os dados da resposta.
   * @returns retorna o objeto de resposta padronizado.
   */
  static formataObjeto(hasError: boolean, err: any, dados: any) {
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

export default objetoDeResposta;