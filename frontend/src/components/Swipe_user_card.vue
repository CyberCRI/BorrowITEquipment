<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">

    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <br /><br />
                <div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--business js-pt-tab js-pt-tab--business" id="pt-tab-business" data-pt-pane="pt-business">

                        <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">
                <br />
                <h2 class="wt-cm-pt-package-name wt-cm-pt-package-name--business">
                    Swipe User's NFC Card 
                </h2>
                <input id="user_id" class="input is-rounded" type="text" placeholder="ID (.....)" value="10000315365" readonly>
                
                <br /><br />

                <div class="ua-divider">
                    <p class="ua-divider__text">OR</p>
                </div>
                <br />
                <h2 class="wt-cm-pt-package-name wt-cm-pt-package-name--business">
                    Tape the User's Email
                </h2>
                
                <input id="myInput" v-model="email" class="input is-rounded" type="text" placeholder="example@cri-paris.org">

                <br /><br />

                <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent()">
                    Validate
                </a>
                </div>
            </div>



            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
    <br /><br /><br /><br />
    </div>
</template>

<script>
    import Returns from '../components/Returns.vue'
    import Utils from '../components/Utils.vue'

    export default {
        name: 'Swipe_user_card',
        data() {
            return {
                nfc_id: "",
                email: ""
            }
        },
        mounted() {
            Utils.methods.autocomplete(document.getElementById("myInput"), Utils.methods.getAllmails());
        },
        components: {
            Returns,
            Utils
        },
        methods: {
            getTypedEmail() {
                return document.getElementById("myInput").value;
            },
            swapComponent() {
                //this.$emit('myInput', this.email)
                var self = this;
                self.$router.push({ name: 'Returns' });
                //, params: {email: this.email} });
            }
        }
    }
</script>
