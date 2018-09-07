<template>
  <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <h1 class="wt-cm-header__headline--combined">
                    Return an equipment
                </h1>
                <h2 class="wt-cm-header__subheadline">
                    
                </h2>
                <br />
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
        <div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--business js-pt-tab js-pt-tab--business" id="pt-tab-business" data-pt-pane="pt-business">
                <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">
                        <article class="message is-info">
                            <div class="message-body">
                                Current condition
                            </div>
                        </article>
                        <div class="select is-rounded">
                            <select v-model="selected_condition" style="width:300px;">
                                <option v-for="option in conds" v-bind:key="option.value">
                                    {{ option.text }}
                                </option>
                            </select>
                        </div>
                </div>
                <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--business ]" data-type="biz" @click="swapComponent()">
                    Return now
                </a>
        </div>
    </div>
                    
</template>
<script>
    import Success_RETURN from '../components/Success_RETURN.vue'
    import Utils from '../components/Utils.vue'
    import Apercu_equip from '../components/Apercu_equip.vue'
    //import { EventBus } from '../event-bus.js'

    /* eslint-disable */
    export default {
           name: 'ReturnEquipp',
           components: {
                Success_RETURN,
                Utils,
                Apercu_equip
           },
            created() {
                //this.$eventHub.$on('my-event', this.getName("dd"));
                //this.nfc = Apercu_equip.methods.getTypedNfcId();
            },
            data() {
                return {
                    new_name: "",
                    nfc: "",
                    selected_condition: "",
                    conds: [
                          { text: 'Excellent', value: 'Excellent' },
                          { text: 'Good', value: 'Good' },
                          { text: 'Used', value: 'Used' },
                          { text: 'Bad Condition', value: 'Bad Condition' },
                          { text: 'Destroyed', value: 'Destroyed' }
                    ]
                }
            },
            methods: {
                swapComponent() {
                    var self = this;
                    console.log(Utils.methods.putInfo( null,
                                                      null,
                                                      this.selected_condition,
                                                      "In Stock",
                                                      new Date()));

                    /*****************Envoie de notification par mail********************/
                            
                            /*
                            var nodemailer = require('nodemailer');
                            var transporter = nodemailer.createTransport({
                               service: 'gmail',
                               auth: {
                                      user: '',
                                      pass: ''
                                  }
                            });
                            const mailOptions = {
                              from: '', // sender address
                              to: '', // list of receivers
                              subject: 'NOTIFICATION', // Subject line
                              html: '<p>This is a notification mail</p>'// plain text body
                            };

                            transporter.sendMail(mailOptions, function (err, info) {
                               if(err)
                                 console.log(err)
                               else
                                 console.log(info);
                            });*/
                            
                    self.$router.push({ name: 'Success_RETURN' });
                },
                getName(data) {
                    console.log("data2 => " + data);
                }
            }
    }
</script>
<style>
  .autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
  }
  .autocomplete-items div:hover {
    background-color: #e9e9e9;
  }

</style>