<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div>
            <div class="field">
                <label class="label">Tipo de Pessoa</label>
                <div class="control">
                    <p>
                        <label class="radio">
                            <input :class="['radio', ($v.form.fisica.$error) ? 'is-danger' : '']" type="radio" name="pessoa" v-model="fisica">
                            Pessoa Física
                        </label>
                        <label class="radio">
                            <input :class="['radio', ($v.form.juridica.$error) ? 'is-danger' : '']" type="radio" name="pessoa" v-model="juridica">
                            Pessoa Jurídica
                        </label>
                    </p>
                </div>
            </div>
        </div>
        <div class="pessoafisica-panel">
            <div class="field">
                <label class="label">Nome Completo</label>
                <div class="control">
                    <input :class="['input', ($v.form.nomeCompleto.$error) ? 'is-danger' : '']" type="text" placeholder=""
                       v-model="form.nomeCompleto">
                </div>
            </div>
            <div class="field">
                <label class="label">Sexo</label>
                <div class="control">
                    <label class="radio">
                        <input :class="['radio', ($v.form.masculino.$error) ? 'is-danger' : '']" type="radio" name="sexo" v-model="masculino">
                        Masculino
                    </label>
                    <label class="radio">
                        <input :class="['radio', ($v.form.feminino.$error) ? 'is-danger' : '']" type="radio" name="sexo" v-model="feminino">
                        Feminino
                    </label>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CPF</label>
                    <div class="control">
                        <input :class="['input', ($v.form.cpf.$error) ? 'is-danger' : '']" type="text" placeholder="000.000.000-00" v-mask="'###.###.###-##'" v-model="form.cpf">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Data de Nascimento</label>
                    <div class="control">
                        <input :class="['input', ($v.form.dataNascimento.$error) ? 'is-danger' : '']" type="text" placeholder="__/__/____" v-mask="'##/##/####'" v-model="form.dataNascimento">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Telefone Fixo</label>
                    <div class="control">
                        <input :class="['input', ($v.form.fixo.$error) ? 'is-danger' : '']" type="text" placeholder="(99) 9999-9999" v-mask="'(##) ####-####'" v-model="form.fixo">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Celular</label>
                    <div class="control">
                        <input :class="['input', ($v.form.celular.$error) ? 'is-danger' : '']" type="text" placeholder="(99) 99999-9999" v-mask="'(##) ####-####', '(##) #####-####'" v-model="form.celular">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">CEP</label>
                    <div class="control">
                        <input :class="['input', ($v.form.cep.$error) ? 'is-danger' : '']" type="text" placeholder="00000-000" v-mask="'#####-###'" v-model="form.cep">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Número</label>
                    <div class="control">
                        <input :class="['input', ($v.form.numero.$error) ? 'is-danger' : '']" type="text" placeholder="" v-model="form.numero">
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="field column is-6">
                    <label class="label">Complemento</label>
                    <div class="control">
                        <input :class="['input', ($v.form.complemento.$error) ? 'is-danger' : '']" type="text" placeholder="" v-model="form.complemento">
                    </div>
                </div>
                <div class="field column is-6">
                    <label class="label">Ramo de Atividade</label>
                    <div class="control">
                        <input :class="['input', ($v.form.ramo.$error) ? 'is-danger' : '']" type="text" placeholder="" v-model="form.ramo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .pessoafisica-panel {
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
                    fisica: '',
                    juridica: '',
                    nomeCompleto: '',
                    cpf: '',
                    masculino: '',
                    feminino: '',
                    dataNascimento: '',
                    celular: '',
                    fixo: '',
                    cep: '',
                    numero: '',
                    complemento: '',
                    ramo: '',
                }
            }
        },
        validations: {
            form: {
                fisica: {

                },
                juridica: {

                },
                nomeCompleto: {
                    required
                },
                cpf: {
                    required
                },
                masculino: {
                },
                feminino: {
                },
                dataNascimento: {
                    required
                },
                celular: {
                    required
                },
                fixo: {
                },
                cep: {
                    required,
                },
                numero: {
                    required,
                },
                complemento: {
                    required,
                },
                ramo: {
                    required,
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