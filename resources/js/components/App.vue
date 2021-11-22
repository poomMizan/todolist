<template>
  <div>
    <h3>Todo-App</h3>
    <AddItemForm />
    <ListView />
  </div>
</template>

<script>
import AddItemForm from "./AddItemForm";
import ListView from "./ListView";

export default {
  components : {
    AddItemForm,
    ListView,
  },
  data() {
    return {
      
    };
  },
  methods: {

  },
  mounted() {
    
  }
}
</script>

<style>
</style>