<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
    <header class="wt-cm-header" id="wt-cm-header">
            <div class="wt-cm-header__content">
                <br /><br />
                <div class="wt-cm-pt-cell-header wt-cm-pt-cell-header--business js-pt-tab js-pt-tab--business" id="pt-tab-business" data-pt-pane="pt-business">

                        <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">
                <p class="wt-cm-header__topic">
                    Loan an equipment
                </p>
                <h1 class="wt-cm-header__headline--combined">
                    Scan the tag of the equipment
                </h1>
                <h2 class="wt-cm-header__subheadline">
                    MATERIALS.EQUIPMENTS.MACHINES
                </h2>
                <br /><br />
                <input id="nfc_id" v-model="nfc_id" class="input is-rounded" type="text" placeholder="NFC_ID Swapped (.....)">
                <br /><br />
                <div id="error_msg" name="error_msg" style="color: red;">
                 
                </div>
                <a class="wt-cm-pt-signup js-wt-cm-cta [ js-track-cta ga-cta--pro ]" data-type="pro" @click="swapComponent();">
                        OK
                </a>
            </div>
        </div>
            </div>
            
                <loading
                :show="show"
                :label="label"
                :overlay="overlay">
                </loading>

                <input type="hidden" id="name" v-bind:value="name" />
                <input type="hidden" id="used_by" v-bind:value="used_by" />
                <input type="hidden" id="condition" v-bind:value="condition" />
                <input type="hidden" id="link" v-bind:value="link" />
                <input type="hidden" id="type" v-bind:value="type" />
                <input type="hidden" id="status" v-bind:value="status" />

        <div class="wt-cm-header__bg"></div>
    </header>  
    <br /><br /><br /><br />
    </div>
</template>

<script>
    import Apercu_equip from '../components/Apercu_equip.vue'
    import Utils from '../components/Utils.vue'
    import loading from 'vue-full-loading'

    export default {
        name: 'Swipe_equip',
        data() {
            return {
                nfc_id: "",
                show: false,
                label: 'Loading...',
                timeOut1: 5000,
                timeOut2: 2000,
                overlay: true,
                items: [],
                name: "",
                type: "",
                link: "",
                used_by: "",
                status: "",
                condition: ""
            }
        },
        components: {
            Apercu_equip,
            Utils,
            loading
        },
        created(){
            var xhr = new XMLHttpRequest();
            var tmp = [];
            var jsonObjectReturns = [];
            var i = 1;
            while(tmp.length === 0){
                            xhr.open("GET", "https://cri-paris.freshservice.com/cmdb/items.json?page="+i, false);
                            xhr.setRequestHeader('Authorization','Basic ' + btoa("CJM4CoCBi0iy4Qu7bOS"));
                            xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
                            xhr.send();
                            
                            tmp = JSON.parse(xhr.response);
                            jsonObjectReturns = jsonObjectReturns.concat(tmp);
                            //console.log(jsonObjectReturns[i]);
                            i = i + 1;
            }
            this.$data.items = jsonObjectReturns;
        },
        mounted() {
            var dis1 = document.getElementById("nfc_id");
            dis1.onchange = function () {
                //validate directement
                if (this.value != "" || this.value.length > 0) {
                    document.getElementById("nfc_id").disabled = true;
                }
            }
        },
        methods: {
            getTypedNfcId(){
                return document.getElementById("nfc_id").value;
            },
            showMe() {
                this.show = true;
                setTimeout(() => {
                    this.show = false;
                }, this.timeOut1)
            },
            swapComponent() {
                var self = this;
                if (document.getElementById("nfc_id").value === ""){
                    console.log("vide");
                    document.getElementById("error_msg").innerHTML  = "Emty NFC ID ! Please Retry";
                    document.getElementById("nfc_id").disabled = false;
                }
                else {
                    this.show = true;
                    setTimeout(() => {
                            this.show = false;
                            var obj = Utils.methods.getNameTypebyNFC(this.$data.items, document.getElementById("nfc_id").value);
                            if (obj != null) {
                                this.name = obj[0];
                                document.getElementById('name').value = this.name;
                                this.type = obj[1];
                                document.getElementById('type').value = this.type;
                                this.link = obj[2];
                                document.getElementById('link').value = this.link;
                                this.used_by = obj[3];
                                document.getElementById('used_by').value = this.used_by;
                                this.status = obj[4];
                                document.getElementById('status').value = this.status;
                                this.condition = obj[5];
                                document.getElementById('condition').value = this.condition;

                                if (typeof this.name != 'undefined') {
                                    this.show = false;

                                    self.$router.push({ name: 'Apercu_equip' });
                                }
                                else {
                                    this.show = false;
                                    document.getElementById("error_msg").innerHTML  = "Unfound NFC ID ! Please Retry";
                                    document.getElementById("nfc_id").disabled = false;
                                }
                            }
                            else {
                                this.show = false;
                                    document.getElementById("error_msg").innerHTML  = "Unfound NFC ID ! Please Retry";
                                    document.getElementById("nfc_id").disabled = false;
                            }
                    }, this.timeOut1);
                }
            },
            getName() {
                console.log(document.getElementById('name').value);
                return document.getElementById('name').value;
            },
            getType() {
                console.log("2");
                return document.getElementById('type').value;
            },
            getLink() {
                return document.getElementById('link').value;
            },
            getUsedBy() {
                return document.getElementById('used_by').value;
            },
            getStatus() {
                return document.getElementById('status').value;
            },
            getCondition() {
                return document.getElementById('condition').value;
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