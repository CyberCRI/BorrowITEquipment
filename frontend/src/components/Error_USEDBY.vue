<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <br /><br />
               
                <h1 class="wt-cm-header__headline--combined">
                    The equipement is currently used by @used_by
                </h1>
                <h5 class="wt-cm-header__subheadline">
                    You must return the equipment before loaning it to someone else
                </h5>
              
                
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