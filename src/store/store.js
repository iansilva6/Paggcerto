import Vue from 'vue'
import Vuex from 'vuex'

import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export const store = new Vuex.Store({
  /*
    Criando o state para armazenar os dados enquanto o usuário vai preenchendo o formulário.
  */

  state: {
    user: { 
      //Dados do Usuário
      comoConheceu: '',
      email: '',
      demoEmail: '',
      password: '', 

      //Pessoa Física
      nomeCompleto: '',
      tipoPessoa: '',
      cpf: '',
      sexo: '',
      dataNascimento: '',
      celular: '',
      fixo: '',
      cep: '',
      numero: '',
      complemento: '',
      ramo: '',

      //Pessoa Jurídica
      razaoSocial: '',
      nomeFantasia: '',
      cnpj: '',
      tipoEmpresa: '',

      //Dados Bancários
      repasse: '',
      banco: '',
      tipoConta: '',
      agencia: '',
      conta: '',
      titular: '',
      cadastroTitular: '',
    }
  },
  getters: {
    getField,
  },
  mutations: {
    updateField,
  },
})