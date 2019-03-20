<template>
    <div style="padding: 2rem 3rem; text-align: left;">
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
                    demoEmail: '',
                    message: ''
                }
            }
        },
        validations: {
            form: {
                username: {
                    required
                },
                demoEmail: {
                    required,
                    email
                },
                message: {
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