<template>
  <div class="container">

    <div class="row-md-6">
      <h2 class='text-info'>Todolist-App</h2>
      <router-view></router-view>
      <!-- <ListView /> -->
    </div>
  </div>
</template>
<script>
import ListView from "./ListView";
export default {
  name: "App",
  components : {
    ListView,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$store.state.msg);
  }
}
</script>
<style></style>