<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <br /><br />
                <h1 class="wt-cm-header__topic">
                    <b>&#9785;&#9785; Oops &#9785;&#9785;</b>
                </h1>
                <br />
                <h1 class="wt-cm-header__headline--combined">
                    The status of the equipement is <i>IN USE</i> and not currently affected
                </h1>
                <h5 class="wt-cm-header__subheadline">
                    You may want to return the equipement.
                </h5>
                <br /><br />
                
                <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent()">
                    Return the Equipement Now
                </a>
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
    <br /><br /><br /><br />
    </div>
</template>

<script>
    import ReturnEquip from '../components/ReturnEquip.vue'
    export default {
        name: 'Success',
        components: {
            ReturnEquip
        },
        methods: {
            swapComponent() {
                this.$router.push({ name: 'ReturnEquip' });
            }
        }
    }
</script>