<template>
  <div class="p-date-picker">
    <label :for="label" class="text-sm mb-2 inline-block">{{label}}</label>
    <div>
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        :return-value.sync="fields[name]"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            label="Date of Birth"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-model="fields[name]"
            solo
            :error-messages="errors"
            @input="vFields[name].$touch()"
            @blur="vFields[name].$touch()"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          no-title
          v-model="fields[name]"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(fields[name])"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "fields", "vFields", "name", "message", "validation"],
  data() {
    return {
      menu: false,
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
}
</script>

<style>
.p-date-picker .v-text-field--solo > .v-input__control > .v-input__slot {
  box-shadow: none !important;
  border-bottom: 1px solid #5b5d66;
}

.p-date-picker .v-text-field--solo.error--text > .v-input__control > .v-input__slot {
  border-bottom: 1px solid #ff5252 !important;
  border-bottom-width: 2px !important;
}
</style>