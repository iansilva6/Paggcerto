<template>
    <div style="padding: 2rem 3rem; text-align: left;">
        <div class="field">
            <label class="label">Como Conheceu a Paggcerto?</label>
            <div class="control">
                <input :class="['input', ($v.comoConheceu.$error) ? 'is-danger' : '']" 
                type="text" 
                placeholder=""
                v-model="comoConheceu">
            </div>
            <p v-if="$v.comoConheceu.$error" class="help is-danger">Campo obrigatório</p>
        </div>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input :class="['input', ($v.email.$error) ? 'is-danger' : '']"  
                type="text" 
                placeholder="" 
                v-model="email">
            </div>
            <p v-if="$v.email.$error" class="help is-danger">Seu endereço de e-mail é inválido</p>
        </div>
        <div class="field">
            <label class="label">Confirme seu E-mail</label>
            <div class="control">
                <input :class="['input', ($v.demoEmail.$error) ? 'is-danger' : '']"  
                type="text" 
                placeholder="" 
                v-model="demoEmail">
            </div>
            <p v-if="$v.demoEmail.$error" class="help is-danger">Seus endereços de e-mail estão diferentes</p>
        </div>
        <div class="field">
            <label class="label">Senha</label>
            <div class="control">
                <input :class="['input', ($v.senha.$error) ? 'is-danger' : '']"  
                type="text" 
                placeholder="" 
                v-model="senha">
            </div>
            <p v-if="$v.senha.$error" class="help is-danger">Campo obrigatório</p>
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
        store,
        directives: {mask},
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {}
        },
        //Pegar os valores dos inputs e atualiza no store
        computed: {
            ...mapFields({
              comoConheceu: 'user.comoConheceu',
              email: 'user.email',
              demoEmail: 'user.demoEmail',
              senha: 'user.password',
            }),
        },
        //Define os campos obrigatórios
        validations: {
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
        },
        methods: {},
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