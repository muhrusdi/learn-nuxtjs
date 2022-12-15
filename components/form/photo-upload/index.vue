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
    handleChange(e) {
      const reader = new FileReader();

      if (e.target.files.length) {
        const file = e.target.files[0];
  
        reader.onloadend = () => {
          this.fields[this.name] = reader.result
        };
  
        reader.readAsDataURL(file);
      }
    }
  }
}
</script>