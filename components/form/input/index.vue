<template>
  <div>
    <v-text-field
      :label="label"
      outlined
      v-model="fields[name]"
      :error-messages="errors"
      @input="vFields[name].$touch()"
      @blur="vFields[name].$touch()"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "fields", "vFields", "name", "message", "validation"],
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