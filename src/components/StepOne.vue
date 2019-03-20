<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Como Conheceu a Paggcerto?</label>
            <div class="control">
                <p>
                    <input :class="['input', ($v.form.comoconheceu.$error) ? 'is-danger' : '']" type="text" placeholder=""
                       v-model="form.comoconheceu">
                </p>
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <p>
                    <input :class="['input', ($v.form.email.$error) ? 'is-danger' : '']"  type="text" placeholder="" v-model="form.email">
                </p>
            </div>
            <p v-if="$v.form.email.$error" class="help is-danger">Seu endereço de e-mail é inválido</p>
        </div>
        <div class="field">
            <label class="label">Confirme seu E-mail</label>
            <div class="control">
                <p>
                    <input :class="['input', ($v.form.demoEmail.$error) ? 'is-danger' : '']"  type="text" placeholder="" v-model="form.demoEmail">
                </p>
            </div>
            <p v-if="$v.form.demoEmail.$error" class="help is-danger">Seu endereço de e-mail é inválido</p>
        </div>
        <div class="field">
            <label class="label">Senha</label>
            <div class="control">
                <p>
                    <input :class="['input', ($v.form.senha.$error) ? 'is-danger' : '']"  type="text" placeholder="" v-model="form.senha">
                </p>
            </div>
        </div>
        <div class="field">
            <label class="label">Tipo de Pessoa</label>
            <div class="control">
                <p>
                    <label class="radio">
                        <input type="radio" name="pessoa">
                        Pessoa Física
                    </label>
                    <label class="radio">
                        <input type="radio" name="pessoa">
                        Pessoa Jurídica
                    </label>
                </p>
            </div>
        </div>
        
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, email} from 'vuelidate/lib/validators'
    export default {
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    comoconheceu: '',
                    email: '',
                    demoEmail: '',
                    senha: ''
                }
            }
        },
        validations: {
            form: {
                comoconheceu: {
                    required
                },
                email: {
                    required,
                    email
                },
                demoEmail: {
                    required,
                    email
                },
                senha: {
                    required,
                }
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