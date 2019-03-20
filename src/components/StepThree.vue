<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Quantos dias você deseja receber o repasse?</label>
            <div class="control">
                <p>
                    <label class="radio">
                        <input :class="['radio', ($v.form.doisdias.$error) ? 'is-danger' : '']" type="radio" name="repasse" v-model="doisdias">
                        2 dias
                    </label>
                    <label class="radio">
                        <input :class="['radio', ($v.form.trintaedoisdias.$error) ? 'is-danger' : '']" type="radio" name="repasse" v-model="trintaedoisdias">
                        32 dias
                    </label>
                </p>
            </div>
        </div>
        <div class="columns">
            <div class="field column is-6">
                <label class="label">Banco</label>
                <div class="control">
                    <input :class="['input', ($v.form.banco.$error) ? 'is-danger' : '']" type="text" placeholder=""
                       v-model="form.banco">
                </div>
            </div>
            <div class="field column is-6">
                <label class="label">Tipo de Conta</label>
                <div class="control">
                    <label class="radio">
                        <input :class="['radio', ($v.form.corrente.$error) ? 'is-danger' : '']" type="radio" name="sexo" v-model="corrente">
                        Conta Corrente
                    </label>
                    <label class="radio">
                        <input :class="['radio', ($v.form.poupanca.$error) ? 'is-danger' : '']" type="radio" name="sexo" v-model="poupanca">
                        Conta Poupança
                    </label>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="field column is-6">
                <label class="label">Agência</label>
                <div class="control">
                    <input :class="['input', ($v.form.agencia.$error) ? 'is-danger' : '']" type="text" placeholder="" v-mask="['###-#', '####-#', '#####-#', '######-#']" v-model="form.agencia">
                </div>
            </div>
            <div class="field column is-6">
                <label class="label">N. da Conta</label>
                <div class="control">
                    <input :class="['input', ($v.form.conta.$error) ? 'is-danger' : '']" type="text" placeholder="" v-mask="['###-#', '####-#', '#####-#', '######-#']" v-model="form.conta">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, sameAs, email} from 'vuelidate/lib/validators'
    import {mask} from 'vue-the-mask'

    export default {
        directives: {mask},
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    doisdias: '',
                    trintadias: '',
                    banco: '',
                    corrente: '',
                    poupanca: '',
                    agencia: '',
                    conta: '',
                }
            }
        },
        validations: {
            form: {
                doisdias: {
                    //required,
                },
                trintaedoisdias: {
                    //required,
                },
                banco: {
                    //required,
                },
                corrente: {
                    //required,
                },
                poupanca: {
                    //required,
                },
                agencia: {
                    //required,
                },
                conta: {
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