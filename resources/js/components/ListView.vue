<template>
  <div class="p-2 m-2">
     <h4 class="text-primary">
      List of things to do
      <span 
        :class="[ (dataItem.length==0) ? 'btn btn-success h6' : 'btn btn-info h6' ]" 
        @click="get_data"
      >
        {{ get_data_btn }}
      </span>
    </h4>
    <div v-for="item in dataItem" :key="item.index">
      <ListItem
        :item="item"
        @getID="parentMethod"
        @refresh="get_data"
      />
    </div>
  </div>
</template>

<script>
  import ListItem from './ListItem';
  export default {
    name: "ListView",
    components: {
      ListItem,
    },
      name: "ListView",
      data() {
          return { 
            dataItem: [],
          }
      },
      methods : {
        get_data() { 
          this.dataItem = [];
          console.log('getting new data ...');
          axios.get('/api/items').then( res => {
            console.log(res.data.length);
            this.dataItem = res.data;
            // this.dataItem.forEach(item => console.log(item));
          }).catch( err => console.log(err));
        },
        parentMethod(parent_param) {
          console.log(parent_param);
        }
      },
      mounted() {
        this.get_data();
      },
      computed: {
        get_data_btn() {
          if (this.dataItem.length === 0) return 'Get Data';
          return 'Refresh';
        }
      }
  }
</script>

<style>
</style>