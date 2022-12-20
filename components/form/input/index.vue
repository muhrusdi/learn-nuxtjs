<template>
  <div>
    <v-text-field
      :label="label"
      outlined
      v-model="fields[name]"
      :error-messages="errors"
      @input="vFields[name].$touch()"
      @blur="vFields[name].$touch()"
      :type="inputType"
      v-bind="$attrs"
      :append-icon="type === 'password' ? (visiblePass ? 'mdi-eye-off' : 'mdi-eye') : ''"
      @click:append="type === 'password' ? handleSwitch() : null"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "fields", "vFields", "name", "message", "validation", "type"],
  data() {
    return {
      inputType: this.type,
      visiblePass: false
    }
  },
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
  methods: {
    handleSwitch() {
      this.visiblePass = !this.visiblePass
      this.inputType = this.visiblePass ? "text" : "password"
    }
  }
}
</script>