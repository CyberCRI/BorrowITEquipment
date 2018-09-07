<template>
  <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <h1 class="wt-cm-header__headline--combined">
                    Return an equipment
                </h1>
                <h2 class="wt-cm-header__subheadline">
                    {{ name }}
                </h2>
                <h2 class="wt-cm-header__subheadline">
                    Lended to <i> {{ used_by }} </i>
                </h2>
                <h2 class="wt-cm-header__subheadline">
                    The condition when loaned was <i> {{ selected_condition }} </i>
                </h2>
                <br />
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
        <div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--business js-pt-tab js-pt-tab--business" id="pt-tab-business" data-pt-pane="pt-business">
                <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">
                        <article class="message is-info">
                            <div class="message-body">
                                Condition when back
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

                <input type="hidden" id="used_by" v-bind:value="used_by" />
                <input type="hidden" id="name" v-bind:value="name" />
                <input type="hidden" id="selected_condition" v-bind:value="selected_condition" />
            <loading
            :show="show"
            :label="label"
            :overlay="overlay">
            </loading>
    </div>
                    
</template>
<script>
    import Success_RETURN from '../components/Success_RETURN.vue'
    import Utils from '../components/Utils.vue'
    import Returns from '../components/Returns.vue'
    import Apercu_equip from '../components/Apercu_equip.vue'
    import loading from 'vue-full-loading'
    //import { EventBus } from '../event-bus.js'

    /* eslint-disable */
    export default {
           name: 'ReturnEquip',
           components: {
                Success_RETURN,
                Utils,
                Returns,
                Apercu_equip,
                loading
           },
            created() {
                console.log("> created method");
                this.$eventHub.$on('my-event', this.getName("dd"));
                console.log("> new_name : " + this.new_name);
                this.nfc = Apercu_equip.methods.getTypedNfcId();
            },
            beforeDestroy(){
                //this.$eventHub.$off('my-event');
            },
            data() {
                return {
                    new_name: "",
                    nfc: "",
                    used_by: Apercu_equip.methods.getUsedBy(),
                    selected_condition: Apercu_equip.methods.getCondition(),
                    name: Apercu_equip.methods.getName(),
                    conds: [
                          { text: 'Excellent', value: 'Excellent' },
                          { text: 'Good', value: 'Good' },
                          { text: 'Used', value: 'Used' },
                          { text: 'Bad Condition', value: 'Bad Condition' },
                          { text: 'Destroyed', value: 'Destroyed' }
                    ],
                    show: false,
                      label: 'Loading...',
                      timeOut: 5000,
                      overlay: true
                }
            },
            methods: {
                swapComponent() {
                    var self = this;
                    this.show = true;
                    setTimeout(() => {
                        this.show = false;
                        console.log(Utils.methods.putInfo( self.nfc,
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
                    }, this.timeOut)
                    
                },
                getName(data) {
                    console.log("data2 => " + data);
                },
                getUsedBy() {
                    return document.getElementById('used_by').value;
                },
                getName() {
                    return document.getElementById('name').value;
                },
                getCondition() {
                    return document.getElementById('selected_condition').value;
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