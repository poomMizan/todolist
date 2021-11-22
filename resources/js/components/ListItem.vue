<template>
    <div class="col-sm p-2 m-2">
      <!-- <h4 class="text-danger">{{ item.name }}</h4> -->
        <li
          :class="[ 
              (item.is_completed) 
              ? 'text-success' : 'text-warning'
          ]"
          @dblclick="log_info(
              item.id,
              item.name,
              item.created_at,
              item.completed_at
            )"
        >
          {{ item.id }}
          {{ item.name }}         
          <input 
            type="checkbox"
            :checked="item.is_completed"
            @click="update_is_completed(item.id)"    
          >
          <button class="btn btn-danger h6" @click="delete_id(item.id)">delete</button>
        </li>
    </div>
</template>

<script>
export default {
    name: "ListItem",
    data() {
        return {

        }
    }, 
    props: {
      item: Object,
    },
    methods : {
        add_item() {
            if (this.newItem.length === 0 || this.newItem === "") {   
                // console.log('no ok')
                return alert('Invalid Input Value');
            }
            if (confirm('Continue ?')) {
                // console.log('ok');
                axios.post('/api/items', {
                    name: this.newItem,
                }).then(res => {
                    if (res.status == 201) {
                        this.newItem = "";
                    }
                }).catch( err => console.log(err));
                return alert('Success');
            }
            return alert('Cancelled');
        },
        log_info(id, name, created_at, completed_at) {
            console.log(
                "id : " + id + "\n" +
                "name : " + name + "\n" +
                "created_at : " + created_at + "\n" +
                "completed_at : " + completed_at
            ); 
        },
        update_is_completed(id) {     
            axios.put('/api/items/' + id)
            .then( res => {
                if (res.status == 200) {
                    this.$emit('refresh');
                }/*this.get_data(); */
            })
            .catch( err => {
                return console.log("error naja " + err)
            });
            return this.child_method(id);
      },
      child_method(child_param) {
          this.$emit('getID', child_param);
      },
      delete_id(id) {
            if (confirm('confirm to delete ' + id + ' ?')) 
            {
                axios.delete('/api/items/' + id)
                .then( res => {
                    if (res.status == 200) {
                        this.$emit('refresh');
                        return alert('success to delete ' + id);
                    }/*this.get_data(); */
                })
                .catch( err => {
                    return console.log("error naja " + err)
                });
                return this.child_method(id);
            }
            else {
                return alert('you cancel to delete');
            }
      }
    },
    computed : {
        check() {
            return (this.newItem.length == 0); 
        }
    },
}
</script>

<style>
</style>