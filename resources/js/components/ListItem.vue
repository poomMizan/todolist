<template>
    <tr class="col-sm p-2 m-2 align-middle" >
      <!-- <h4 class="text-danger">{{ item.name }}</h4> -->
      <td :class="item.is_completed ? 'text-success' : 'text-warning'">
           {{ item.created_at }}
        </td>
        <td :class="item.is_completed ? 'text-success' : 'text-warning'">
            <span v-if="!showEditBox">{{ item.name }}</span>
            <div v-else>
                <input class="text-center align-middle" type="text" v-model="name">
                <button class="btn btn-sm btn-outline-warning align-middle m-1">
                    Edit Name
                </button>
            </div>           
        </td>
        <td>
            <span
                @click="showEditBox = !showEditBox"
                class="btn btn-sm" 
                :class="color_for_edit_btn"
            >
                {{ text_for_edit_btn }}
            </span>
        </td>
        <td>
          <input 
            type="checkbox" :checked="item.is_completed" @click="update_is_completed(item.id)"    
          >
        </td>
        <td :class="item.is_completed ? 'text-success' : 'text-warning'">
            {{ item.completed_at | is_job_completed }}
        </td>
        <td>
          <button 
            @click="delete_id(item.id)"
            class="btn btn-sm"
            :class="item.is_completed ? 'btn-outline-danger' : 'btn-outline-dark disabled'"
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
        return {
            name: this.item.name,
            is_complete: this.item.is_completed,
            showEditBox: false,
        }
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
    computed : {
        text_for_edit_btn() {
           return !this.is_complete && !this.showEditBox ? 'Edit' : "Cancel Edit";
        },
        color_for_edit_btn() {
            return this.is_complete ? 'disabled' : 'btn-outline-danger';
        }
    },
    filters: {
        is_job_completed(value) {
            if (value === null) return "";
            else return value;
        }
    }
}
</script>

<style>
</style>