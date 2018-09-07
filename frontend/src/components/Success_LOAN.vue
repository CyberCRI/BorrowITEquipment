<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <br /><br />
                
                <h1 class="wt-cm-header__headline--combined">
                    The equipment {{ name }} is loaned
                </h1>
                <h2 class="wt-cm-header__subheadline">
                    Lended on <i> {{ date }} </i> , the condition was {{ condition }}
                </h2>
                <h5 class="wt-cm-header__subheadline">
                    An email has been sent to {{ used_by }} to confirm the loan  of the equipment.
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
    import Loans from '../components/Loans.vue'
    export default {
        name: 'Success_LOAN',
        components: {
            Loans
        },
        data() {
              return {
                  used_by: Loans.methods.getUsedBy(),
                  name: Loans.methods.getName(),
                  condition: Loans.methods.getCondition(),
                  date: Loans.methods.getDate()
              }
            },
        methods: {
            swapComponent() {
                this.$router.push({ name: 'Redirect' });
            }
        }
    }
</script>