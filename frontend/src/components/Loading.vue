<template>
    <div>
        <div id="app">
            <vue-element-loading :active="show" spinner="bar-fade-scale" color="#FF6700"/>
            <span>
                This is my content.
            </span>
            <div class="btn-toggle">
              <button @click="show = !show">Toggle</button>
            </div>
        </div>
    </div>
</template>
<script>
    import VueElementLoading from 'vue-element-loading'

    export default {
  name: 'Loading',
  data () {
    return {
      show: true
    }
  },
  created () {
    setTimeout(() => { this.show = false }, 9000)
  },
  components: { VueElementLoading }
}
</script>

<style scoped>
#app {
  float: left;
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
}
.btn-toggle {
  float: left;
  margin: 20px;
}
</style>