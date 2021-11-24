<template>
  <div>
    <h3>Todolist-App</h3>
    <ListView />
  </div>
</template>

<script>

import ListView from "./ListView";

export default {
  components : {

    ListView,
  },
  data() {
    return {
      
    };
  },
  methods: {

  },
  mounted() {
    // console.log(this.$store.state.msg);
  }
}
</script>

<style>
</style>