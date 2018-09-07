<template>
    <div class="about">
        <h1>Logout {{ their_name }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'UserDetails',
        data() {
            return {
                their_name: this.$route.params.name,
                isLogouting: false
            }
        },
        method: {
            logout(){
                this.isLogouting = true;
                this.$router.push('/');
            }
        }
    }
</script>