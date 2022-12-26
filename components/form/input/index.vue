<template>
  <div>
    <label :for="label" class="text-sm mb-2 inline-block">{{label}}</label>
    <v-text-field
      :label="label"
      outlined
      :id="label"
      v-model="fields[name]"
      :error-messages="errors"
      @input="vFields[name].$touch()"
      @blur="vFields[name].$touch()"
      :type="inputType"
      solo
      depressed
      v-bind="$attrs"
      :append-icon="type === 'password' ? (visiblePass ? 'mdi-eye-off' : 'mdi-eye') : ''"
      @click:append="type === 'password' ? handleSwitch() : null"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "fields", "vFields", "name", "message", "validation", "type", "editable"],
  data() {
    return {
      inputType: this.type,
      visiblePass: false
    }
  },
  computed: {
    // vModel: {
    //   get() {
    //     return this.fields[this.name]
    //   },
    //   set(val) {
    //     this.$emit("input", val)
    //   }
    // },
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

<style>
.theme--dark.v-text-field--solo > .v-input__control > .v-input__slot {
  background-color: transparent;
}
</style>