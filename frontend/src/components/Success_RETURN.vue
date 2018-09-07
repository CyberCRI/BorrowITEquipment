<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <br /><br />
                
                <h1 class="wt-cm-header__headline--combined">
                    The equipment 
                    <div v-if="typeof name != 'undefined'">
                        {{ name }}
                    </div>
                    is back in stock
                </h1>
                <h2 class="wt-cm-header__subheadline">
                    The condition when loaned was <i> {{ condition }} </i>
                </h2>
                <h5 class="wt-cm-header__subheadline">
                    An email has been sent
                    <div v-if="typeof used_by != 'undefined'">
                        to {{ used_by }}
                    </div>
                    to confirm the return  of the equipment.
                </h5>
                <br />
                
                <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent()">
                    OK
                </a>
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
    <br /><br /><br /><br />
    </div>
</template>

<script>
    import Redirect from '../components/Redirect.vue'
    import ReturnEquip from '../components/ReturnEquip.vue'

    export default {
        name: 'Success_RETURN',
        components: {
            Redirect,
            ReturnEquip
        },
        data() {
            return {
                name: ReturnEquip.methods.getName(),
                used_by: ReturnEquip.methods.getUsedBy(),
                condition: ReturnEquip.methods.getCondition()
            }
        },
        methods: {
            swapComponent() {
                this.$router.push({ name: 'Redirect' });
            }
        }
    }
</script>