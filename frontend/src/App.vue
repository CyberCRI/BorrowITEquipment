<template>
  <div id="app">
    <!--
    <nav>
      <router-link to="/loans">Loans</router-link>
      <router-link to="/returns">Returns</router-link>
      <router-link to="/logout">End</router-link>
    </nav>
    -->
    <router-view />
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
      Login
  }
}
</script>