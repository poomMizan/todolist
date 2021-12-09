<template>
  <div class="p-2 m-2">      
      <AddItemForm @refresh="get_data" />
     <h4 class="text-primary">
    List of things to do
      </h4>
    <table class="table borderless">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Created at</th>
          <th>Is completed ?</th>
          <th>Completed at</th>
          <th>Edit</th>
          <th>Delete</th>
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
    <span class="btn btn-sm" :class="[(dataItem.length==0)?'btn-success':'btn-info']" @click="get_data">
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
        dateObjectFromUTC(s) {
          s = s.split(/\D/);
          return new Date(Date.UTC(+s[0], --s[1], +s[2], +s[3], +s[4], +s[5], 0));
        },
        get_data() { 
          this.dataItem = [];
          console.log('getting new data ...');
          axios.get('/api/items').then( res => {
            // console.log(res.data.length);
            this.dataItem = res.data;
            this.dataItem.forEach( item => {
              item.created_at = item.created_at.substring(0, 10)
              if (item.completed_at !== null) {
                item.completed_at = item.completed_at.substring(0, 10)
              } 
            });
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