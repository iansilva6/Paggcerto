<template>
    <div id="app">
        <!--Bulma CSS-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css">

        <!--Header da Aplicação-->
        <section class="hero">
            <div class="hero-body" style="padding: 3rem 0">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-12" style="display: flex; align-items: center;">
                            <div class="alinhar">
                                <img width="260px" class="alinhar" src="./assets/marca.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!--Step by Step - Onde passará os componentes de cada passo do formulário-->
        <section class="section" style="padding-top: .5rem">
            <div class="container">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <horizontal-stepper 
                        :steps="demoSteps" 
                        :locale="'pt'" 
                        @completed-step="completeStep" 
                        :top-buttons="true"
                        @active-step="isStepActive" 
                        @stepper-finished="submit"></horizontal-stepper>
                    </div>
                </div>
            </div>
        </section>
        
        <!--Footer da Aplicação-->
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        <small>COPYRIGHT © 2019 <a href="https://www.paggcerto.com.br/">PAGGCERTO</a>. TODOS OS DIREITOS RESERVADOS.</small>
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import { store } from './store/store';
    import HorizontalStepper from 'vue-stepper';
    import StepOne from './components/StepOne.vue';
    import StepTwo from './components/StepTwo.vue';
    import StepThree from './components/StepThree.vue';
    import StepFourth from './components/StepFourth.vue';

    export default {
        name: 'app',
        store,
        components: {
            HorizontalStepper
        },
        data(){
            return {
                //Config do framework para criar o Step by Step
                demoSteps: [
                    {
                        icon: 'account_circle',
                        name: 'first',
                        title: 'Criar Conta',
                        subtitle: '',
                        component: StepOne,
                        completed: false
                    },
                    {
                        icon: 'business_center',
                        name: 'second',
                        title: 'Dados do Usuário',
                        subtitle: '',
                        component: StepTwo,
                        completed: false
                    },
                    {
                        icon: 'attach_money',
                        name: 'third',
                        title: 'Informações de Pagamento',
                        subtitle: '',
                        component: StepThree,
                        completed: false
                    },
                    {
                        icon: 'border_color',
                        name: 'fourth',
                        title: 'Termos de Uso',
                        subtitle: '',
                        component: StepFourth,
                        completed: false
                    }
                ],
                activeStep: 0
            }
        },
        computed: {},
        methods: {
            //Checa se os campos obrigatórios estão preenchidos antes de avançar
            completeStep(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        step.completed = true;
                    }
                })
            },
            //Consulta o step atual
            isStepActive(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        if(step.completed === true) {
                            step.completed = false;
                        }
                    }
                })
            },
            /*Imprime o objeto user no console, com todos os dados armazenados durante o preenchimento do fomrmulário.*/
            submit(payload) {
                console.log(store.state.user);
                alert('Verificar o console para ler os dados que foram armazenados');
            }
        }
    }
</script>

<style lang="scss">
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .pointer {
        cursor: pointer;
    }
    h1, h2 {
        font-weight: normal;
    }
    hr {
        background-color: transparent;
        border: none;
        display: block;
        height: inherit;
        margin: 1.5rem 0;
        border-top: dashed 1px;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #0b99b9;
        text-decoration: underline;
    }
    .text-medium-grey {
        color: #333;
    }
    .text-light-grey {
        color: #888;
    }
    .box.formated {
        position: relative;
        padding: 0;
    }
    .box.formated .heading {
        font-size: 1rem;
        text-transform: capitalize;
        padding: .8rem 1.5rem;
        background-color: #fafafa;
    }
    .box.formated .content {
        padding: 1rem 2rem;
    }
    i {
        .top-left {
            position: absolute;
            left: 1.5rem;
            top: 0.8rem;
        }
    }
    .vertical-separator {
        display: flex;
        justify-content: space-around;
    }
    .vertical-separator .line {
        border-right: 1px solid #cccccc;
    }
    .alinhar {
      margin: 0 auto;
      display: block;
    }
</style>