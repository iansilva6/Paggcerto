<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div>
            <div class="field">
                <label class="label">Você é:</label>
                <div class="control">
                    <label for="fisica" class="radio">
                        <input :class="['radio', ($v.tipoPessoa.$error) ? 'is-danger' : '']" 
                        type="radio" 
                        value="fisica" 
                        v-model="tipoPessoa">
                        Pessoa Física
                    </label>
                    <label for="juridica" class="radio">
                        <input :class="['radio', ($v.tipoPessoa.$error) ? 'is-danger' : '']" 
                        type="radio" 
                        value="juridica" 
                        v-model="tipoPessoa">
                        Pessoa Jurídica
                    </label>
                </div>
                <p v-if="$v.tipoPessoa.$error" class="help is-danger">Campo obrigatório</p>
            </div>
        </div>
        <div class="panel" v-show="tipoPessoa === 'fisica'">
            <div class="columns">
                <div class="field column is-8">
                    <label class="label">Nome Completo</label>
                    <div class="control">
                        <input :class="['input', ($v.nomeCompleto.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="nomeCompleto">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">Sexo</label>
                    <div class="control">
                        <label for="masculino" class="radio">
                            <input :class="['radio', ($v.sexo.$error) ? 'is-danger' : '']" 
                            type="radio" 
                            value="masculino" 
                            v-model="sexo">
                            Masculino
                        </label>
                        <label for="feminino" class="radio">
                            <input :class="['radio', ($v.sexo.$error) ? 'is-danger' : '']" 
                            type="radio" 
                            valor="feminino" 
                            v-model="sexo">
                            Feminino
                        </label>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CPF</label>
                    <div class="control">
                        <input :class="['input', ($v.cpf.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="000.000.000-00" 
                        v-mask="'###.###.###-##'" 
                        v-model="cpf">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Data de Nascimento</label>
                    <div class="control">
                        <input :class="['input', ($v.dataNascimento.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="__/__/____" 
                        v-mask="'##/##/####'" 
                        v-model="dataNascimento">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Telefone Fixo</label>
                    <div class="control">
                        <input :class="['input', ($v.fixo.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="(99) 9999-9999" 
                        v-mask="'(##) ####-####'" 
                        v-model="fixo">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Celular</label>
                    <div class="control">
                        <input :class="['input', ($v.celular.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="(99) 99999-9999" 
                        v-mask="'(##) ####-####', '(##) #####-####'" 
                        v-model="celular">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CEP</label>
                    <div class="control">
                        <input :class="['input', ($v.cep.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="00000-000" 
                        v-mask="'#####-###'" 
                        v-model="cep">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Número</label>
                    <div class="control">
                        <input :class="['input', ($v.numero.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="numero">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Complemento</label>
                    <div class="control">
                        <input :class="['input', ($v.complemento.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="complemento">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Ramo de Atividade</label>
                    <div class="control">
                        <input :class="['input', ($v.ramo.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="ramo">
                    </div>
                </div>
            </div>
        </div>
        <div class="panel" v-show="tipoPessoa === 'juridica'">
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Razão Social</label>
                    <div class="control">
                        <input :class="['input', ($v.razaoSocial.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="razaoSocial">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Nome Fantasia</label>
                    <div class="control">
                        <input :class="['input', ($v.nomeFantasia.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="nomeFantasia">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CNPJ</label>
                    <div class="control">
                        <input :class="['input', ($v.cnpj.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="00.000.000/0000-00" 
                        v-mask="'##.###.###/##-##'" 
                        v-model="cnpj">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Tipo da Empresa</label>
                    <div class="control">
                        <input :class="['input', ($v.tipoEmpresa.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="tipoEmpresa">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Telefone Fixo</label>
                    <div class="control">
                        <input :class="['input', ($v.fixo.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="(99) 9999-9999" 
                        v-mask="'(##) ####-####'" 
                        v-model="fixo">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Celular</label>
                    <div class="control">
                        <input :class="['input', ($v.celular.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="(99) 99999-9999" 
                        v-mask="'(##) ####-####', '(##) #####-####'" 
                        v-model="celular">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CEP</label>
                    <div class="control">
                        <input :class="['input', ($v.cep.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="00000-000" 
                        v-mask="'#####-###'" 
                        v-model="cep">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Número</label>
                    <div class="control">
                        <input :class="['input', ($v.numero.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="numero">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Complemento</label>
                    <div class="control">
                        <input :class="['input', ($v.complemento.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="complemento">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Ramo de Atividade</label>
                    <div class="control">
                        <input :class="['input', ($v.ramo.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="ramo">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-8">
                    <label class="label">Nome do Administrador</label>
                    <div class="control">
                        <input :class="['input', ($v.nomeAdm.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="nomeAdm">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">Sexo</label>
                    <div class="control">
                        <label for="masculino" class="radio">
                            <input :class="['radio', ($v.sexo.$error) ? 'is-danger' : '']" 
                            type="radio" 
                            value="masculino" 
                            v-model="sexo">
                            Masculino
                        </label>
                        <label for="feminino" class="radio">
                            <input :class="['radio', ($v.sexo.$error) ? 'is-danger' : '']" 
                            type="radio" 
                            valor="feminino" 
                            v-model="sexo">
                            Feminino
                        </label>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CPF do Administrador</label>
                    <div class="control">
                        <input :class="['input', ($v.cpfAdm.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="000.000.000-00" 
                        v-mask="'###.###.###-##'" 
                        v-model="cpfAdm">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Data de Nascimento do Administrador</label>
                    <div class="control">
                        <input :class="['input', ($v.dataNascimentoAdm.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="__/__/____" 
                        v-mask="'##/##/####'" 
                        v-model="dataNascimentoAdm">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .panel {
        padding: 30px 0px;
    }
</style>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, email} from 'vuelidate/lib/validators'
    import {mask} from 'vue-the-mask'
    import { store } from './../store/store'
    import { mapFields } from 'vuex-map-fields'

    export default {
        directives: {mask},
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {}
        },
        computed: {
            ...mapFields({
              tipoPessoa: 'user.tipoPessoa',
              nomeCompleto: 'user.nomeCompleto',
              cpf: 'user.cpf',
              sexo: 'user.sexo',
              dataNascimento: 'user.dataNascimento',
              celular: 'user.celular',
              fixo: 'user.fixo',
              cep: 'user.cep',
              numero: 'user.numero',
              complemento: 'user.complemento',
              ramo: 'user.ramo',

              razaoSocial: 'user.razaoSocial',
              nomeFantasia: 'user.nomeFantasia',
              cnpj: 'user.cnpj',
              tipoEmpresa: 'user.tipoEmpresa',
              nomeAdm: 'user.nomeCompleto',
              cpfAdm: 'user.cpf',
              dataNascimentoAdm: 'user.dataNascimento',
            }),
        },
        validations: {
            tipoPessoa: {
                required
            },
            nomeCompleto: {
                //required
            },
            cpf: {
                //required
            },
            sexo: {
            },
            dataNascimento: {
                //required
            },
            celular: {
                //required
            },
            fixo: {
            },
            cep: {
                //required,
            },
            numero: {
                //required,
            },
            complemento: {
                //required,
            },
            ramo: {
                //required,
            },
            razaoSocial: {
                //required,
            },
            nomeFantasia: {
                //required,
            },
            cnpj: {
                //required,
            },
            tipoEmpresa: {
                //required,
            },
            nomeAdm: {
                //required,
            },
            cpfAdm: {
                //required,
            },
            dataNascimentoAdm: {
                //required,
            },
        },

        watch: {
            $v: {
                handler: function (val) {
                    if(!val.$invalid) {
                        this.$emit('can-continue', {value: true});
                    } else {
                        this.$emit('can-continue', {value: false});
                        setTimeout(()=> {
                            this.$emit('change-next', {nextBtnValue: false});
                        }, 3000)
                    }
                },
                deep: true
            },
            clickedNext(val) {
                console.log(val);
                if(val === true) {
                    this.$v.$touch();
                }
            }
        },
        mounted() {
            if(!this.$v.$invalid) {
                this.$emit('can-continue', {value: true});
            } else {
                this.$emit('can-continue', {value: false});
            }
        }
    }
</script>