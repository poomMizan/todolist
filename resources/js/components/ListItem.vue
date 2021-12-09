<template>
    <tr class="col-sm p-2 m-2" >
      <!-- <h4 class="text-danger">{{ item.name }}</h4> -->
        <td :class="[ item.is_completed ? 'text-success' : 'text-warning' ]"
>
          {{ item.id }}
        <td :class="[ item.is_completed ? 'text-success' : 'text-warning' ]">
            {{ item.name }}
        </td>
        <td :class="[ item.is_completed ? 'text-success' : 'text-warning' ]">
            {{ item.created_at }}
        </td>
        <td>
          <input 
            type="checkbox" :checked="item.is_completed" @click="update_is_completed(item.id)"    
          >
        </td>
        <td :class="[item.is_completed ? 'text-success' : 'text-warning']">
            {{ item.completed_at | is_job_completed /*filter*/ }}
        </td>
        <td>
            <span
                class="btn btn-sm" 
                :class="[item.is_completed ? 'btn-outline-dark disabled' : 'btn-outline-primary']">
                Edit
            </span>
        </td>
        <td>
          <button 
            @click="delete_id(item.id)"
            class="btn btn-sm"
            :class="[item.is_completed ? 'btn-outline-danger' : 'btn-outline-dark disabled']"
          >
            Delete
          </button>
        </td>
    </tr>
</template>
<script>
export default {
    name: "ListItem",
    data() {
        return {}
    }, 
    props: {
      item: Object,
    },
    methods : {
        log_info(id, name, created_at, completed_at) {
            console.log(
                "id : " + id + "\n" +
                "name : " + name + "\n" +
                "created_at : " + created_at + "\n" +
                "completed_at : " + completed_at
            ); 
        },
        update_is_completed(id) {     
            console.log('updateiscomplete')
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
    computed : {},
    filters: {
        is_job_completed(value) {
            if (value === null) return "on process...";
            else return value;
        }
    }
}
</script>

<style>
</style>