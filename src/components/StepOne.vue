<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Como Conheceu a Paggcerto?</label>
            <div class="control">
                <input :class="['input', ($v.form.comoConheceu.$error) ? 'is-danger' : '']" 
                type="text" 
                placeholder=""
                v-model="form.comoConheceu">
            </div>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input :class="['input', ($v.form.email.$error) ? 'is-danger' : '']"  
                type="text" 
                placeholder="" 
                v-model="form.email">
            </div>
            <p v-if="$v.form.email.$error" class="help is-danger">Seu endereço de e-mail é inválido</p>
        </div>
        <div class="field">
            <label class="label">Confirme seu E-mail</label>
            <div class="control">
                <input :class="['input', ($v.form.demoEmail.$error) ? 'is-danger' : '']"  
                type="text" 
                placeholder="" 
                v-model="form.demoEmail">
            </div>
            <p v-if="$v.form.demoEmail.$error" class="help is-danger">Seus endereços de e-mail estão diferentes</p>
        </div>
        <div class="field">
            <label class="label">Senha</label>
            <div class="control">
                <input :class="['input', ($v.form.senha.$error) ? 'is-danger' : '']"  
                type="text" 
                placeholder="" 
                v-model.lazy="form.senha">
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
                    comoConheceu: '',
                    email: '',
                    demoEmail: '',
                    senha: ''
                }
            }
        },
        validations: {
            form: {
                comoConheceu: {
                    required
                },
                email: {
                    required,
                    email
                },
                demoEmail: {
                    sameAsEmail: sameAs('email')
                },
                senha: {
                    required
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