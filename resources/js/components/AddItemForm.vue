<template>
    <div class="col-sm p-3 m-3">
        <label for="newItem">Add new item</label>
        <input type="text" name="newItem" v-model="newItem">
        <button
            :class="[ check ? 'btn-danger' : 'btn-success']"
            @click="add_item"
            :disabled="check"
        >
            <!-- Button text is below here --> 
            +
        </button>
    </div>
</template>

<script>
export default {
    name: "AddItemForm",
    data() {
        return { 
            newItem: "",
            items: [],
        }
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
                this.$emit('refresh');
                return alert('Success');
            }
            return alert('Cancelled');
        },
    },
    computed : {
        check() {
            return this.newItem.length === 0; 
        }
    },
}
</script>

<style>

</style>