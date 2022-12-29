<template>
  <div>
    <slot/>
    <slot name="button"/>
    <input
      type="file"
      hidden
      @change="handleChange"
    >
  </div>
</template>

<script>
export default {
  props: ["fields", "name"],
  methods: {
    handleUpload(img) {
      const formData = new FormData();
      formData.append("image", img);
      return this.$store.dispatch("profile/postProfilePictureUpdate", formData)
    },
    handleChange(e) {
      const reader = new FileReader();

      if (e.target.files.length) {
        const file = e.target.files[0];

        this.handleUpload(file)
        .then(data => {
          console.log(data)
            this.fields[this.name] = data.data.data.user_picture.picture.url
        })
  
        // reader.onloadend = () => {
        //   this.fields[this.name] = reader.result
        // };
  
        reader.readAsDataURL(file);
      }
    }
  }
}
</script>