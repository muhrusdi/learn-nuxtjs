<template>
  <div>
    <box title="Career Information" description="Information about your career">
      <div class="mt-4">
        <div>
          <div>
            <div>
              <h4>Information Detail</h4>
            </div>
            <div class="mt-6">
              <v-text-field
                label="Company Name"
                required
                outlined
              ></v-text-field>
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
                    label="Start From"
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
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    label="Ending End"
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
            <div class="mt-4">
              <div class="flex space-x-2">
                <div>
                  <v-btn depressed>
                    Discard
                  </v-btn>
                </div>
                <div>
                  <v-btn depressed color="primary">
                    Add Career
                  </v-btn>
                </div>
              </div>
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