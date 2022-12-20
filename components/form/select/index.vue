<template>
  <div>
    <label :for="label" class="text-sm mb-2 inline-block">{{label}}</label>
    <v-combobox
      :items="items"
      :id="label"
      :label="label"
      solo
      v-model="fields[name]"
      :error-messages="errors"
      @input="vFields[name].$touch()"
      @blur="vFields[name].$touch()"
    />
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

<style>
.v-text-field--solo > .v-input__control > [role=combobox].v-input__slot {
  box-shadow: none !important;
  border-bottom: 1px solid #5b5d66;
}

.v-text-field--solo.error--text > .v-input__control > [role=combobox].v-input__slot {
  border-bottom: 1px solid #ff5252 !important;
}
</style>