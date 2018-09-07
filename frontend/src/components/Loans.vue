<template>
  <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <h1 class="wt-cm-header__headline--combined">
                    This equipment {{ name }} is currently in stock
                </h1>
            </div>
        <div class="wt-cm-header__bg"></div>
    </header>  
    <div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--business js-pt-tab js-pt-tab--business" id="pt-tab-business" data-pt-pane="pt-business">
                        <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">
                            <label class="label">Loan to</label>
                            <div class="control">
                              <div class="field">
                                <div class="control">
                                  <input id="myInput" class="input is-info" type="text" placeholder="Used_By" v-model="used_by" required>
                                </div>
                            </div>
                              <br />
                              <label class="label">Current condition</label>

                              <div class="select is-rounded">
                                <select v-model="selected_condition" style="width:300px;">
                                  <option v-for="option in conds" v-model="option.value">
                                    {{ option.text }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <br />
                            <label class="label">When back</label>
                            

                            <vuejs-datepicker :inline="true" @selected="set_due_return_date"></vuejs-datepicker>
                           </div>
                            <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--business ]" data-type="biz" @click="swapComponent()">
                                Loan now
                            </a>
        </div>
        <loading
            :show="show"
            :label="label"
            :overlay="overlay">
            </loading>

        <input type="hidden" id="name" v-bind:value="name" />
        <input type="hidden" id="used_by" v-bind:value="used_by" />

        <input type="hidden" id="selected_condition" v-bind:value="selected_condition" />
        <input type="hidden" id="due_return_date" v-bind:value="due_return_date" />
    </div>
</template>
<script>
    import Success_LOAN from '../components/Success_LOAN.vue'
    import Utils from '../components/Utils.vue'
    import Apercu_equip from '../components/Apercu_equip.vue'
    import loading from 'vue-full-loading'

    /* eslint-disable */
    export default {
            name: 'Loans',
            components: {
              Success_LOAN,
              Utils,
              Apercu_equip,
              vuejsDatepicker,
              loading
            },
            data() {
              return {
                  used_by: Apercu_equip.methods.getUsedBy(),
                  selected_condition: Apercu_equip.methods.getCondition(),
                  due_return_date: new Date(),
                  nfc : "",
                  name: Apercu_equip.methods.getName(),
                  conds: [
                      { text: 'Excellent', value: 'Excellent' },
                      { text: 'Good', value: 'Good' },
                      { text: 'Used', value: 'Used' },
                      { text: 'Bad Condition', value: 'Bad Condition' },
                      { text: 'Destroyed', value: 'Destroyed' }
                  ],
                  reservations: null,//Utils.methods.getComingReservations()
                  show: false,
                  label: 'Loading...',
                  timeOut: 2000,
                  overlay: true
              }
            },
            created() {
                this.nfc = Apercu_equip.methods.getTypedNfcId();
            },
            mounted() {
                Utils.methods.autocomplete(document.getElementById("myInput"), Utils.methods.getAllmails());
            },
            methods: {
                isVide(param) {
                    if(param != '') return false;
                    return true;
                },
                swapComponent() {
                  //This function send a PUT request to the webservice with the new values

                  this.show = true;
                        setTimeout(() => {
                            this.show = false;
                            var self = this;
                            var used_by_input = document.getElementById("myInput").value;
                            var date_input = this.due_return_date;
                            console.log(Utils.methods.putInfo( self.nfc,
                                                              used_by_input,
                                                              this.selected_condition,
                                                              "In Use",
                                                              date_input));
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

                            self.$router.push({ name: 'Success_LOAN' });
                        }, this.timeOut)
                },
                set_due_return_date(date) {
                    console.log(date.toISOString());
                    this.due_return_date = date.toISOString();
                },
                getUsedBy() {
                    return document.getElementById('used_by').value;
                },
                getName() {
                    return document.getElementById('name').value;
                },
                getCondition() {
                    return document.getElementById('selected_condition').value;
                },
                getDate() {
                    return document.getElementById('due_return_date').value;
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