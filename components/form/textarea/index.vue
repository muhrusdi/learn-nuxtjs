<template>
  <div>
    <label :for="label" class="text-sm mb-2 inline-block">{{label}}</label>
    <v-textarea
      :label="label"
      :id="label"
      outlined
      solo
      v-model="vModel"
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
    vModel: {
      get() {
        return this.fields[this.name]
      },
      set(val) {
        this.$emit("input", val)
      }
    },
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