<template>
  <div class="container text-warning">
    <div class="card text-dark">
      <div class="card-header">
        Upload File
      </div>
      <div class="card-body">
        <form class="form" enctype="multipart/form-data">
          <input @change="onFileChange" name="file" type="file" accept="image/*">
          <input @click="reset" type="reset" value="Reset" class="btn btn-warning btn-sm">
          <input @click="upload" type="submit" value="Uploaad" class="btn btn-primary btn-sm">
          <input type="hidden" name="_token" :value="csrf">
        </form>
      </div>
      <img :src="previewImage" :alt="alt" style="width:50%;">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: '',
      showMessage: false,
      message: '',
      previewImage: '',
      alt: '',
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    }
  },
  methods: {
    onFileChange(e) {
      this.reset();
      this.file = e.target.files[0];
      // [this.file] = e.target.files;
      if (this.file !== "" && this.isImage(this.file)) {
        this.previewImage = URL.createObjectURL(this.file);
      } else {
        this.alt = "Upload file is not an image type";
      }
    },
    isImage(file) {
      const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      return file && acceptedImageTypes.includes(file['type']);
    },
    upload(e) {
      e.preventDefault();
      if (this.isImage(this.file)) {
        console.log('image type');
        const config_header = { headers:{'content-type': 'multipart/form-data'}};
        const formData = new FormData();
        formData.append('photo', this.file);
        formData.append('name', "photoname_1");
        axios
          .post('/api/upload', formData, config_header)
          .then(res => {
            this.showMessage = true;
            this.message = res.data.message;
            console.log(res.data.message);
          })
          .catch(err => {
            this.showMessage = true;
            console.log(err);
          });   
        this.file = '';
        return;
      }
      console.log('Not image type');
      return;
    },
    reset() {
      this.file = '';
      this.showMessage = false;
      this.message = '';
      this.previewImage = "";
      this.alt = "";
    }
  }
}
</script>