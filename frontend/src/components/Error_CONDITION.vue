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
                    The equipement's condition is <i>BAD</i>.
                </h1>
                <h5 class="wt-cm-header__subheadline">
                    You may want to  change the swipped equipement.
                </h5>
                <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent1()">
                    Swipe another equipement
                </a>

                
                <h2 class="wt-cm-pt-package-name wt-cm-pt-package-name--business">
                    OR
                </h2>

                <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent()">
                    Continue anyway
                </a>
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
    <br /><br /><br /><br />
    </div>
</template>

<script>
    import ReturnEquip from '../components/ReturnEquip.vue'
    import Swipe_equip from '../components/Swipe_equip.vue'

    export default {
        name: 'Success',
        components: {
            ReturnEquip
        },
        methods: {
            swapComponent() {
                this.$router.push({ name: 'ReturnEquip' });
            },
            swapComponent1() {
                this.$router.push({ name: 'Swipe_equip' });
            }
        }
    }
</script>