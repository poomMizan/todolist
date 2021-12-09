<template>
  <div>
    <h1 @click="get_vuex">Hello from Test Router</h1>
  </div>
</template>
<script>
  export default {
    name: "Test",
    data() {
      return {}
    },
    methods: {
      get_vuex() {
        console.log(this.$store.state.counter++);
      }
    }
  }
</script>