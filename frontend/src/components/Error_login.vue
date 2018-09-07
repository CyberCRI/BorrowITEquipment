<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <br /><br />
               
                <h1 class="wt-cm-header__headline--combined">
                    Failed to Login
                </h1>
              
                <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent()">
                    Back to home
                </a>
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
    <br /><br /><br /><br />
    </div>
</template>

<script>
    import Redirect from '../components/Redirect.vue'
    export default {
        name: 'Error',
        components: {
            Redirect
        },
        methods: {
            swapComponent() {
                this.$router.push({ name: 'Redirect' });
            }
        }
    }
</script>