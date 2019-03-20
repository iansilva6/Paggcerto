<template>
    <div id="app">
        <!--Example dependecies-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.1/css/bulma.min.css">

        <!--Example Elements-->
        <section class="hero">
            <div class="hero-body" style="padding: 5rem 0">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-12" style="display: flex; align-items: center;">
                            <div class="alinhar">
                                <img width="200px" class="alinhar" src="./assets/marca.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section" style="padding-top: .5rem">
            <div class="container">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <horizontal-stepper :steps="demoSteps" :locale="pt" @completed-step="completeStep" :top-buttons="true"
                                            @active-step="isStepActive" @stepper-finished="alert"></horizontal-stepper>
                    </div>
                </div>
            </div>
        </section>

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
    import HorizontalStepper from 'vue-stepper';
    import StepOne from './components/StepOne.vue';
    import StepTwo from './components/StepTwo.vue';
    const teamUrl = 'https://github.com/PygmySlowLoris';
    const repoUrl = 'https://github.com/PygmySlowLoris/vue-stepper';
    export default {
        name: 'app',
        components: {
            HorizontalStepper
        },
        data(){
            return {
                repoUrl: repoUrl,
                teamUrl: teamUrl,
                demoSteps: [
                    {
                        icon: 'stars',
                        name: 'first',
                        title: 'Informações Básicas',
                        subtitle: '',
                        component: StepOne,
                        completed: false
                    },
                    {
                        icon: 'account_circle',
                        name: 'second',
                        title: 'Dados do Usuário',
                        subtitle: '',
                        component: StepTwo,
                        completed: false
                    },
                    {
                        icon: 'announcement',
                        name: 'third',
                        title: 'Sample title 3',
                        subtitle: 'Subtitle sample',
                        component: StepOne,
                        completed: false
                    }
                ],
                activeStep: 0
            }
        },
        computed: {},
        methods: {
            completeStep(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        step.completed = true;
                    }
                })
            },
            isStepActive(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        if(step.completed === true) {
                            step.completed = false;
                        }
                    }
                })
            },
            alert(payload) {
                alert('end')
            }
        }
    }
</script>

<style scoped>
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
    i.top-left {
        position: absolute;
        left: 1.5rem;
        top: 0.8rem;
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