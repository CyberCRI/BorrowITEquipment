<template>
    <section class="hero is-info is-fullheight">
        <div class="hero-body">

            <div class="wt-cm-pt-cell-header__content-wrapper js-pt-tab-inner">
                            <h2 class="wt-cm-pt-package-name wt-cm-pt-package-name--business">
                                <strong>ERROR</strong> 
                            </h2>
                            <article class="message is-danger">
                              <div class="message-body">
                                <ul>
                                    <li>The Swipped NFC ID DOES NOT EXIST</li>
                                </ul>
                              </div>
                            </article>
            </div>
        </div>
        <div id="foot">
            <div class="logocri"></div>
            <div class="footdes">
                <b> &commat; copyright 2018</b><br>
                CRI Paris
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Fail',
        components: {

        },
        created() {

        },
        mounted() {

        }
    }
</script>

<style>
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