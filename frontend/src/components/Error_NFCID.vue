<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
            <div id="space">
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <br /><br /><br /><br />
            </div>

            <vue-element-loading :active="show" spinner="spinner" color="#DAF7A6"/>

            <div id="message" style="display:none;">
                <header class="wt-cm-header" id="wt-cm-header">
                        <div class="wt-cm-header__content">
                            <br /><br />
                            <div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--business js-pt-tab js-pt-tab--business" id="pt-tab-business" data-pt-pane="pt-business">
                            <h1 class="wt-cm-pt-package-name wt-cm-pt-package-name--business">
                                <h1 class="wt-cm-header__headline--combined">
                                    Sorry !
                                </h1>
                                <br />
                                The Equipement does not exist in the Inventory
                            </h1>
                            
                            <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent()">
                                Return to Home
                            </a>
                        </div>
                        </div>
                    <div class="wt-cm-header__bg"></div>

                    <div id="loading"></div>

                </header>  
                <br /><br /><br /><br />
            </div>
    </div>
</template>
<script>
    import Swipe_equip from '../components/Swipe_equip.vue'
    import Redirect from '../components/Redirect.vue'
    import VueElementLoading from 'vue-element-loading'

    export default {
        name: 'Success',
        data () {
            return {
              show: true
            }
        },
        created () {
            setTimeout(() => { this.show = false; document.getElementById('message').style.display = "block"; }, 3000);
        },
        components: {
            VueElementLoading,
            Swipe_equip,
            Redirect
        },
        methods: {
                swapComponent() {
                    var self = this;
                    self.$router.push({ name: 'Redirect' });
                }
        }
    }
</script>
<style scoped>
    #app {
      float: left;
      width: 500px;
      height: 500px;
      border: 1px solid #ccc;
    }
    .btn-toggle {
      float: left;
      margin: 20px;
    }
</style>