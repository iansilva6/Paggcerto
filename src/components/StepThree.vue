<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Quantos dias você deseja receber o repasse?</label>
            <div class="control">
                <label for="2dias" class="radio">
                    <input :class="['radio', ($v.repasse.$error) ? 'is-danger' : '']" 
                    type="radio" 
                    value="2dias" 
                    v-model="repasse">
                    2 dias
                </label>
                <label for="32dias" class="radio">
                    <input :class="['radio', ($v.repasse.$error) ? 'is-danger' : '']" 
                    type="radio" 
                    value="32dias" 
                    v-model="repasse">
                    32 dias
                </label>
            </div>
            <p v-if="$v.repasse.$error" class="help is-danger">Campo obrigatório</p>
        </div>
        <div class="columns">
            <div class="field column is-6">
                <label class="label">Banco</label>
                <div class="control">
                    <input :class="['input', ($v.banco.$error) ? 'is-danger' : '']" 
                    type="text" 
                    placeholder=""
                    v-model="banco">
                </div>
                <p v-if="$v.banco.$error" class="help is-danger">Campo obrigatório</p>
            </div>
            <div class="field column is-6">
                <label class="label">Tipo de Conta</label>
                <div class="control">
                    <label class="radio">
                        <input :class="['radio', ($v.tipoConta.$error) ? 'is-danger' : '']" 
                        type="radio" 
                        value="corrente" 
                        v-model="tipoConta">
                        Conta Corrente
                    </label>
                    <label class="radio">
                        <input :class="['radio', ($v.tipoConta.$error) ? 'is-danger' : '']" 
                        type="radio" 
                        value="poupanca" 
                        v-model="tipoConta">
                        Conta Poupança
                    </label>
                </div>
                <p v-if="$v.tipoConta.$error" class="help is-danger">Campo obrigatório</p>
            </div>
        </div>
        <div class="columns">
            <div class="field column is-6">
                <label class="label">Agência</label>
                <div class="control">
                    <input :class="['input', ($v.agencia.$error) ? 'is-danger' : '']" 
                    type="text" 
                    placeholder="" 
                    v-mask="['###-#', '####-#', '#####-#', '######-#']" 
                    v-model="agencia">
                </div>
                <p v-if="$v.agencia.$error" class="help is-danger">Campo obrigatório</p>
            </div>
            <div class="field column is-6">
                <label class="label">N. da Conta</label>
                <div class="control">
                    <input :class="['input', ($v.conta.$error) ? 'is-danger' : '']" 
                    type="text" 
                    placeholder="" 
                    v-mask="['###-#', '####-#', '#####-#', '######-#']" 
                    v-model="conta">
                </div>
                <p v-if="$v.conta.$error" class="help is-danger">Campo obrigatório</p>
            </div>
        </div>
        <div class="columns">
            <div class="field column is-6">
                <label class="label">Titular</label>
                <div class="control">
                    <input :class="['input', ($v.titular.$error) ? 'is-danger' : '']" 
                    type="text" 
                    placeholder=""
                    v-model="titular">
                </div>
            </div>
            <div class="field column is-6">
                <label class="label">CPF/CNPJ</label>
                <div class="control">
                    <input :class="['input', ($v.cadastroTitular.$error) ? 'is-danger' : '']" 
                    type="text" 
                    placeholder=""  
                    v-model="cadastroTitular">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, sameAs, email} from 'vuelidate/lib/validators'
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
        //Pegar os valores dos inputs e atualiza no store
        computed: {
            ...mapFields({
              repasse: 'user.repasse',
              banco: 'user.banco',
              tipoConta: 'user.tipoConta',
              agencia: 'user.agencia',
              conta: 'user.conta',
              titular: 'user.nomeCompleto',
              cadastroTitular: 'user.cadastroTitular',
            }),
        },
        //Define os campos obrigatórios
        validations: {
            repasse: {
                required,
            },
            banco: {
                required,
            },
            tipoConta: {
                required,
            },
            agencia: {
                required,
            },
            conta: {
                required,
            },
            titular: {
                //required,
            },
            cadastroTitular: {
                //required,
            },
        },
        //Confere se os dados obrigatórios estão preenchidos
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