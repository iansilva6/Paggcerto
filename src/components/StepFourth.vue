<template>
    <div class="card" style="margin: 3rem">
        <div class="card-content">
			 <div class="content is-small">
			    <h1>Termos de Uso</h1>
			    <p class="has-text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu tristique urna. Maecenas efficitur sit amet arcu et sodales. Pellentesque nec molestie nulla. Quisque faucibus volutpat purus et aliquet. Aenean at imperdiet massa. Duis fermentum, massa nec scelerisque pretium, lectus quam eleifend mi, in rutrum erat magna sit amet velit. Aenean posuere sed turpis eget egestas. Mauris tortor nisi, finibus et accumsan nec, auctor eget risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer vel efficitur enim.</p>
			    <p class="has-text-left">Morbi ut neque non augue viverra ornare sed non massa. Integer tempor ligula interdum, ultrices lectus sit amet, accumsan augue. Etiam ut viverra augue, id iaculis augue. In aliquet efficitur dolor, vitae dictum elit commodo at. Nullam sit amet felis nec odio egestas congue sed sit amet turpis. Morbi consectetur lacus et quam molestie, ac porta massa semper. Donec dapibus varius erat, quis ultricies libero consectetur sed. Nam eu ullamcorper enim. Phasellus nec elit auctor, iaculis sem id, sollicitudin urna.</p>
			  </div>
        </div>
        <footer class="card-footer">
            <div class="card-footer-item"><input id="switch" type="checkbox" name="switchExample" class="switch" ref="rolesSelected" @click="canContinue"> Li e Aceito os Termos de Uso</div>
        </footer>
    </div>
</template>

<style type="text/css">
    #switch {
        margin-right: 10px;
    }
</style>

<script>
    export default {
        props: ['currentStep'],
        methods: {
          canContinue() {
            if(this.$refs.rolesSelected.checked == true) {
                this.$emit('can-continue', {value: true});
            } else {
                this.$emit('can-continue', {value: false});
            }
          }
        },
        mounted() {
//            this.$emit('can-continue', {value: true})
        }
    }
</script>