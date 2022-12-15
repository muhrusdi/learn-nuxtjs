<template>
  <div>
    <v-otp-input
      :label="label"
      outlined
      v-model="fields[name]"
      length="4"
      type="number"
      plain
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

<style >
.v-otp-input .v-input__slot {
    margin-bottom: 0;
    border-radius: 4px;
    overflow: hidden;
}

.v-otp-input .v-input__slot .v-text-field input {
  max-height: 3rem;
  line-height: 1.28rem;
}
</style>