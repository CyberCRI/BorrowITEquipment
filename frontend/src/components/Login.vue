<template>
    <div class="wt-cm-pricing-page" id="wt-cm-pricing-page">
        <header class="wt-cm-header" id="wt-cm-header">
                <div class="wt-cm-header__content">
                    <br /><br />
                    <p class="wt-cm-header__topic">
                        CRI Inventory
                    </p>
                    <br />
                    <h2 class="wt-cm-header__subheadline">
                        MATERIALS.EQUIPEMENTS.MACHINES
                    </h2>
                    <br />
                    <center>
                        <div id="gSignInWrapper">
                            <div id="customBtn" class="customGPlusSignIn">

                                <a title="Inscription via Google" class="ua-social-link js-social-provider-signup jui-buttonSocialConnect-buttonSocialConnect jui-buttonSocialConnect-noGutter jui-buttonSocialConnect-buttonSocialConnectGoogle" >
                            
                                <span class="jui-icon-icon jui-buttonSocialConnect-buttonSocialConnectIcon jui-buttonSocialConnect-buttonSocialConnectIconGoogle">
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#000" fill-rule="evenodd">
                                        <path d="M10 4.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C14.46 1.89 12.43 1 10 1 6.48 1 3.44 3.02 1.96 5.96l2.91 2.26C5.6 6.05 7.62 4.48 10 4.48z" fill="#EA4335"></path>
                                        <path d="M18.64 10.2c0-.74-.06-1.28-.19-1.84H10v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path>
                                        <path d="M4.88 11.78a5.54 5.54 0 0 1-.3-1.78c0-.62.11-1.22.29-1.78L1.96 5.96A9.008 9.008 0 0 0 1 10c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path>
                                        <path d="M10 19c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74l-2.91 2.26C3.45 16.98 6.48 19 10 19z" fill="#34A853"></path>
                                        <path fill="none" d="M1 1h18v18H1z"></path>
                                    </g>
                                </svg>
                                </span>
                                <div  style="visibility: visible; opacity: 1; color: black;">
                                        &nbsp;&nbsp;Log In with your CRI Account
                                </div>
                                </a>
                            </div>
                        </div>
                    </center>
                </div>
            <div class="wt-cm-header__bg"></div>
        </header>  
        <br /><br /><br /><br /><br />

    </div>
</template>
    
<script>
    export default {
        name: 'Login',
        components: {
        },
        created() {
                var self = this;
                gapi.load('auth2', function(){
                    var auth2 = gapi.auth2.init({
                        client_id: '595857243252-shatt8nvidsmm95j9gvoddsr6bs4n68m.apps.googleusercontent.com',
                        cookiepolicy: 'single_host_origin',
                        apiKey: '_r9_yP1syCmGkvm2MH2PGYfI',
                        redirect_uri: '/success',
                        hosted_domain: 'cri-paris.org',
                        expires_in: 3600 * 48
                    });
                    auth2.attachClickHandler(document.getElementById('customBtn'), {},
                            function(googleUser) {
                                var profile = googleUser.getBasicProfile();
                                self.$router.push({ name: 'Redirect' });
                            }, function(error) {
                                self.$router.push({ name: 'Error_login' });
                            });
                });
        }
    }
</script>

<style>
    #customBtn:hover {
        cursor: pointer;
    }
    .jui-buttonSocialConnect-buttonSocialConnect:enabled {
        cursor: pointer;
    }
    .jui-buttonSocialConnect-buttonSocialConnectGoogle {
        border-color: #e6e7f0;
    }
    .jui-buttonSocialConnect-noGutter {
        margin-bottom: 0;
    }
    .jui-buttonSocialConnect-buttonSocialConnect {
        display: flex;
        align-items: center;
        max-width: 278px;
        line-height: 24px;
        font-family: inherit;
        font-size: 16px;
        font-weight: bold;
        border-radius: 22px;
        border-width: 2px;
        border-style: solid;
        margin-bottom: 16px;
        padding: 8px 20px 8px 12px;
        color: inherit;
        background: white;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        transition: background-color 0.2s;
    }
    .ua-social-link {
        text-decoration: none;
    }
    .jui-buttonSocialConnect-buttonSocialConnectText{overflow:hidden;text-overflow:ellipsis}

    .title{
        color: rgb(109, 181, 83);
        display: block;
        font-family:"Brandon Text", sans-serif;
        font-size:25.5001px;
        font-weight:700;
        height:152px;
        line-height:38.2501px;
        text-size-adjust:100%;
        width:204px;
    }
    .topic {
        color:rgb(105, 108, 118);
        display:block;
        font-family:"Brandon Text", sans-serif;
        font-size:12.4999px;
        font-weight:700;
        height:19px;
        letter-spacing:0.624996px;
        line-height:19.9999px;
        margin-bottom:18px;
    }
</style>