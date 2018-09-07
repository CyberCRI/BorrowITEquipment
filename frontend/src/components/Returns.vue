<template>
  <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <br />
                <h2 class="wt-cm-header__headline--combined">
                    These are the current loans 
                    <br />
                    of {{ used_by }}
                </h2>
                <br /><br />
                

<div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--business js-pt-tab js-pt-tab--business" id="pt-tab-business" data-pt-pane="pt-business">

                        <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">
                <ul>
                  <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                    <li v-for="(data, index) in returns" :key='index'>

                      <div class="wt-cm-pt-cell wt-cm-pt-cell--free js-pt-cell">
                          <div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--free js-pt-tab" id="pt-tab-free" data-pt-pane="pt-free">
                              <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">
                                  <h2 class="wt-cm-pt-package-name wt-cm-pt-package-name--free">
                                      Loan
                                  </h2>
                                  <div class="wt-cm-pt-price wt-cm-pt-price--free">
                                      <span class="wt-cm-pt-price__inner">
                                          <span class="wt-cm-pt-price__number" id="jimdo-free-pricing">
                                            <span class="cc-currency-eur">
                                                <div @click="returnEquip(data); fillNFC()">{{ data }}</div>
                                            </span>
                                          </span>
                                          <span class="wt-cm-pt-price__term">
                                              {{ index + 1 }}
                                          </span>
                                      </span>
                                      <span class="wt-cm-pt-price__time">
                                        <br />
                                        The condition was Excellent
                                      </span>
                                  </div>
                                      <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" @click="returnEquip(data)">
                                          Return Item
                                      </a>
                              </div>
                          </div>
                      </div>
                    </li>
                  </transition-group>
                </ul>
                <br /><br />
              </div>
            </div>
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
    <br /><br /><br /><br /><br /><br /><br />
    </div>
</template>

<script>
    import Utils from '../components/Utils.vue';
    import Swipe_user_card from '../components/Swipe_user_card.vue';
    import ReturnEquipp from '../components/ReturnEquipp.vue';
    //import { EventBus } from '../event-bus.js';

    /* eslint-disable */
    export default {
        name: 'Returns',
        components: {
            Utils,
            Swipe_user_card,
            ReturnEquipp
        },
        data() {
            return {
                returns: Utils.methods.getReturnsByEmail(Swipe_user_card.methods.getTypedEmail()),
                used_by: Swipe_user_card.methods.getTypedEmail()
            }
        },
        methods: {
            returnEquip(data) {
                console.log("data1 => " + data);
                this.name = data;
                //this.$eventHub.$emit('my-event', this.data);
                this.$router.push({ name: 'ReturnEquipp' });
            }
        }
    }
</script>

<style scoped>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

  .holder {
    background: #fff;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float:right;
    cursor:pointer;
  }
</style>