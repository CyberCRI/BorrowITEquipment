<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <p class="wt-cm-header__topic">
                    Scanned equipment
                </p>
                <h1 class="wt-cm-header__headline--combined">
                    {{ name }} . {{ type }}
                </h1>
                <img src="../assets/equips/apercu_hardware.png" width="200" height="200" />

                <span v-if="used_by">
                    <h5 class="wt-cm-header__subheadline">
                        The equipment is currently used by <br /> <b>{{used_by}}</b>  <br />
                        You must return the equipment before loaning it to someone else.
                    </h5>
                    
                    <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent2()">
                        Return the equipment now
                    </a>
                </span>
                <span v-else>
                    <h5 class="wt-cm-header__subheadline">
                        <span v-if="condition">The condition is {{ condition }} </span>
                    </h5>
                    <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent1()">
                        Validate
                    </a>
                </span>
                <br />
                <input type="hidden" id="nfc" v-bind:value="nfc_id" />
                <input type="hidden" id="used_by" v-bind:value="used_by" />
                <input type="hidden" id="condition" v-bind:value="condition" />
                <input type="hidden" id="name" v-bind:value="name" />
                <loading
                :show="show"
                :label="label"
                :overlay="overlay">
                </loading>
            </div>
            <div class="wt-cm-header__bg"></div>
    </header>  
    <br /><br /><br /><br />
    </div>
</template>

<script>
    import Loans from '../components/Loans.vue'
    import Utils from '../components/Utils.vue'
    import Swipe_equip from '../components/Swipe_equip.vue'
    import loading from 'vue-full-loading'

    export default {
        name: 'Apercu_equip',
        data() {
            return {
                name: Swipe_equip.methods.getName(),
                type: Swipe_equip.methods.getType(),
                link: Swipe_equip.methods.getLink(),
                used_by: Swipe_equip.methods.getUsedBy(),
                status: Swipe_equip.methods.getStatus(),
                condition: Swipe_equip.methods.getCondition(),
                nfc_id: Swipe_equip.methods.getTypedNfcId(),
                show: false,
                  label: 'Loading...',
                  timeOut: 2000,
                  overlay: true
            }
        },
        components: {
            Loans,
            Swipe_equip,
            Utils,
            loading
        },
        mounted() {
            var self = this;
            if(this.used_by === "") {

            }
        },
        methods: {
            swapComponent1() {
                this.show = true;
                setTimeout(() => {
                        this.show = false;
                        this.$router.push({ name: 'Loans' });
                }, this.timeOut)
            },
            swapComponent2() {
                var self = this;
                self.$router.push({ name: 'ReturnEquip' });
            },
            getTypedNfcId() {
                return document.getElementById('nfc').value;
            },
            getUsedBy() {
                return document.getElementById('used_by').value;
            },
            getCondition() {
                return document.getElementById('condition').value;
            },
            getName() {
                return document.getElementById('name').value;
            }   
        }
    }
</script>

<style type="text/css">
    html,
    body {
        font-family: 'Open Sans';
    }
    img {
        padding: 5px;
        border: 1px solid #ccc;
    }
    #foot {
        color: #FFF;
        text-align: center;
        margin-top: -5px;
        padding-top: 40px;
        position: relative;
        z-index: 2;
    }
    .logocri {
        height: 57px;
        width: 70px;
        display: inline-block;
        vertical-align: middle;
        background-size: cover;
        background-image: url("../assets/cri-logo.png");
    }
    .footdes {
        display: inline-block;
        line-height: 24px;
        font-size: 12px;
        text-align: left;
        height: 46px;
        vertical-align: middle;
        padding-top: 0px;
        border-left: 1px solid rgba(255, 255, 255, 0.17);
        padding-left: 15px;
    }
</style>