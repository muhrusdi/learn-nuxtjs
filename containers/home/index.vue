<template>
  <div>
    <box title="Profile Information" description="Your personal data">
      <div class="flex space-x-6 mt-4">
        <div class="w-1/2">
          <div>
            <div>
              <h4>Information Detail</h4>
            </div>
            <div class="mt-6">
              <v-text-field
                label="Name"
                required
                outlined
              ></v-text-field>
            </div>
            <div>
              <v-select
                :items="items"
                label="Gender"
              ></v-select>
            </div>
            <div>
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Date of Birth"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  no-title
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
                    @click="$refs.menu.save(date)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <div>
              <v-text-field
                label="Hometown"
                required
                outlined
              ></v-text-field>
            </div>
            <div>
              <v-textarea
                name="input-7-1"
                label="Bio"
                outlined
              ></v-textarea>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div>
            <div>
              <h4>Profile Picture</h4>
            </div>
            <div class="mt-6">
              <img class="rounded-md" src="https://images.unsplash.com/photo-1670832215724-cce6d9ee619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="">
            </div>
            <div class="mt-4 space-y-3 text-center">
              <v-btn
                depressed
                color="primary"
                width="100%"
              >
                Upload Media
              </v-btn>
              <p class="text-xs text-gray-400 font-medium">PNG, JPG or GIF up to 2MB</p>
            </div>
          </div>
        </div>
      </div>
    </box>
  </div>
</template>

<script>
import Box from "../../components/box"

export default {
  data() {
    return {
      items: ['Male', 'Female'],
    }
  },  
  components: {
    box: Box
  }
}
</script>