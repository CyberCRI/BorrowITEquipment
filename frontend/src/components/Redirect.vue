<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
           
                
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  

    <div data-container="navigation">
        <div class="j-nav-variant-nested">
            
            <div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--business js-pt-tab js-pt-tab--business" id="pt-tab-business" data-pt-pane="pt-business">

                        <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">

                            <h2 class="wt-cm-pt-package-name wt-cm-pt-package-name--business">
                                CRI Inventory
                            </h2>
                            
                            <div class="lc-tp-subnav__item lc-tp-subnav__item--dolphin">

                                <div class="lc-tp-subnav__link js-sub-nav-link" data-tracking="Dolphin" @click="swipe1()" style="cursor: pointer;">
                                    <div class="lc-tp-subnav__content">
                                        <span class="lc-tp-subnav__title">Loan</span>
                                        <span class="lc-tp-subnav__caption">Make a new loan for a user</span>
                                    </div>
                                </div>
                            </div>
                            <div class="lc-tp-subnav__item lc-tp-subnav__item--creator">
                                    <div class="lc-tp-subnav__link js-sub-nav-link" data-tracking="Creator" @click="swipe2()" style="cursor: pointer;">
                                        <div class="lc-tp-subnav__content">
                                            <span class="lc-tp-subnav__title">Return</span>
                                            <span class="lc-tp-subnav__caption">Register a return by a user</span>
                                        </div>
                                    </div>
                            </div>
                    </div>
            </div>
    <br />
    <br />
    <br />
     <loading
                :show="show"
                :label="label"
                :overlay="overlay">
                </loading>
</div>
</div>
    </div>
</template>

<script>
    import Swipe_equip from '../components/Swipe_equip.vue'
    import Swipe_user_card from '../components/Swipe_user_card.vue'
    import loading from 'vue-full-loading'

    export default {
        name: "Redirect",
        components: {
            Swipe_equip,
            Swipe_user_card,
            loading
        },
         data() {
            return {
                show: false,
                label: 'Loading...',
                timeOut: 2000,
                overlay: true
            }
        },
        methods: {
            swipe1() {
                this.show = true;
                setTimeout(() => {
                    this.show = false;
                    var self = this;
                    self.$router.push({ name: 'Swipe_equip' });
                }, this.timeOut)

            },
            swipe2() {
                var self = this;
                self.$router.push({ name: 'Swipe_user_card' });
            }
        }
    }
</script>

<style scoped>

</style>