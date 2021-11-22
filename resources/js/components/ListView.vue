<template>
  <div class="p-2 m-2">      
      <AddItemForm @refresh="get_data" />
     <h4 class="text-primary">
    List of things to do
      </h4>
    <table class="table borderless">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>created_at</th>
          <th>complete ?</th>
          <th>completed_at</th>
          <th>delete</th>
        </tr>
      </thead>
      <br>
      <tbody v-for="item in dataItem" :key="item.index">
        <ListItem :item="item"
          @refresh="get_data"
        />
      </tbody>
    </table>
    <br>
    <span 
      :class="[ (dataItem.length==0) ? 'btn btn-success h6' : 'btn btn-info h6' ]" 
      @click="get_data"
    >
      {{ get_data_btn }}
    </span>
  </div>
</template>

<script>
  import AddItemForm from "./AddItemForm";
  import ListItem from './ListItem';
  export default {
    name: "ListView",
    components: {
      ListItem,
      AddItemForm,
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
th {
  color: white;
}
</style>