<template>
  <div>
    <v-select
      :items="items"
      :label="label"
      v-model="fields[name]"
      :error-messages="errors"
      @input="vFields[name].$touch()"
      @blur="vFields[name].$touch()"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: ["label", "fields", "vFields", "name", "message", "validation", "items"],
  computed: {
    errors() {
        const errors = []
        if (!this.vFields[this.name].$dirty) return errors
        if (this.validation && !this.vFields[this.name][this.validation]) {
          errors.push(this.message)
        }
        return errors
      },
  },
}
</script>