<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div>
            <div class="field">
                <label class="label">Você é:</label>
                <div class="control">
                    <label for="fisica" class="radio">
                        <input :class="['radio', ($v.form.tipoPessoa.$error) ? 'is-danger' : '']" 
                        type="radio" 
                        value="fisica" 
                        v-model="form.tipoPessoa">
                        Pessoa Física
                    </label>
                    <label for="juridica" class="radio">
                        <input :class="['radio', ($v.form.tipoPessoa.$error) ? 'is-danger' : '']" 
                        type="radio" 
                        value="juridica" 
                        v-model="form.tipoPessoa">
                        Pessoa Jurídica
                    </label>
                </div>
            </div>
        </div>
        <div id="pessoafisica" class="panel">
            <div class="columns">
                <div class="field column is-8">
                    <label class="label">Nome Completo</label>
                    <div class="control">
                        <input :class="['input', ($v.form.nomeCompleto.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="form.nomeCompleto">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">Sexo</label>
                    <div class="control">
                        <label for="masculino" class="radio">
                            <input :class="['radio', ($v.form.sexo.$error) ? 'is-danger' : '']" 
                            type="radio" 
                            value="masculino" 
                            v-model="form.sexo">
                            Masculino
                        </label>
                        <label for="feminino" class="radio">
                            <input :class="['radio', ($v.form.sexo.$error) ? 'is-danger' : '']" 
                            type="radio" 
                            valor="feminino" 
                            v-model="form.sexo">
                            Feminino
                        </label>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CPF</label>
                    <div class="control">
                        <input :class="['input', ($v.form.cpf.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="000.000.000-00" 
                        v-mask="'###.###.###-##'" 
                        v-model="form.cpf">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Data de Nascimento</label>
                    <div class="control">
                        <input :class="['input', ($v.form.dataNascimento.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="__/__/____" 
                        v-mask="'##/##/####'" 
                        v-model="form.dataNascimento">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Telefone Fixo</label>
                    <div class="control">
                        <input :class="['input', ($v.form.fixo.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="(99) 9999-9999" 
                        v-mask="'(##) ####-####'" 
                        v-model="form.fixo">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Celular</label>
                    <div class="control">
                        <input :class="['input', ($v.form.celular.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="(99) 99999-9999" 
                        v-mask="'(##) ####-####', '(##) #####-####'" 
                        v-model="form.celular">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CEP</label>
                    <div class="control">
                        <input :class="['input', ($v.form.cep.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="00000-000" 
                        v-mask="'#####-###'" 
                        v-model="form.cep">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Número</label>
                    <div class="control">
                        <input :class="['input', ($v.form.numero.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="form.numero">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Complemento</label>
                    <div class="control">
                        <input :class="['input', ($v.form.complemento.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="form.complemento">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Ramo de Atividade</label>
                    <div class="control">
                        <input :class="['input', ($v.form.ramo.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="form.ramo">
                    </div>
                </div>
            </div>
        </div>
        <div id="pessoajuridica" class="panel">
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Razão Social</label>
                    <div class="control">
                        <input :class="['input', ($v.form.razaoSocial.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="form.razaoSocial">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Nome Fantasia</label>
                    <div class="control">
                        <input :class="['input', ($v.form.nomeFantasia.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="form.nomeFantasia">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CNPJ</label>
                    <div class="control">
                        <input :class="['input', ($v.form.cnpj.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="00.000.000/0000-00" 
                        v-mask="'##.###.###/##-##'" 
                        v-model="form.cnpj">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Tipo da Empresa</label>
                    <div class="control">
                        <input :class="['input', ($v.form.tipoEmpresa.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="form.tipoEmpresa">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Telefone Fixo</label>
                    <div class="control">
                        <input :class="['input', ($v.form.fixo.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="(99) 9999-9999" 
                        v-mask="'(##) ####-####'" 
                        v-model="form.fixo">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Celular</label>
                    <div class="control">
                        <input :class="['input', ($v.form.celular.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="(99) 99999-9999" 
                        v-mask="'(##) ####-####', '(##) #####-####'" 
                        v-model="form.celular">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CEP</label>
                    <div class="control">
                        <input :class="['input', ($v.form.cep.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="00000-000" 
                        v-mask="'#####-###'" 
                        v-model="form.cep">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Número</label>
                    <div class="control">
                        <input :class="['input', ($v.form.numero.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="form.numero">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Complemento</label>
                    <div class="control">
                        <input :class="['input', ($v.form.complemento.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="form.complemento">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Ramo de Atividade</label>
                    <div class="control">
                        <input :class="['input', ($v.form.ramo.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="" 
                        v-model="form.ramo">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-8">
                    <label class="label">Nome do Administrador</label>
                    <div class="control">
                        <input :class="['input', ($v.form.nomeAdm.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder=""
                        v-model="form.nomeAdm">
                    </div>
                </div>
                <div class="field column is-4">
                    <label class="label">Sexo</label>
                    <div class="control">
                        <label for="masculino" class="radio">
                            <input :class="['radio', ($v.form.sexo.$error) ? 'is-danger' : '']" 
                            type="radio" 
                            value="masculino" 
                            v-model="form.sexo">
                            Masculino
                        </label>
                        <label for="feminino" class="radio">
                            <input :class="['radio', ($v.form.sexo.$error) ? 'is-danger' : '']" 
                            type="radio" 
                            valor="feminino" 
                            v-model="form.sexo">
                            Feminino
                        </label>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CPF do Administrador</label>
                    <div class="control">
                        <input :class="['input', ($v.form.cpfAdm.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="000.000.000-00" 
                        v-mask="'###.###.###-##'" 
                        v-model="form.cpfAdm">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Data de Nascimento do Administrador</label>
                    <div class="control">
                        <input :class="['input', ($v.form.dataNascimentoAdm.$error) ? 'is-danger' : '']" 
                        type="text" 
                        placeholder="__/__/____" 
                        v-mask="'##/##/####'" 
                        v-model="form.dataNascimentoAdm">
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
    export default {
        directives: {mask},
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    tipoPessoa: '',
                    nomeCompleto: '',
                    cpf: '',
                    sexo: '',
                    dataNascimento: '',
                    celular: '',
                    fixo: '',
                    cep: '',
                    numero: '',
                    complemento: '',
                    ramo: '',

                    razaoSocial: '',
                    nomeFantasia: '',
                    cnpj: '',
                    tipoEmpresa: '',
                    nomeAdm: '',
                    cpfAdm: '',
                    dataNascimentoAdm: '',
                }
            }
        },
        validations: {
            form: {
                tipoPessoa: {

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
            }
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
                    this.$v.form.$touch();
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