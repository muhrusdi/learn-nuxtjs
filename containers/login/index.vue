<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <box title="Login Account">
        <div>
          <div class="mt-6 space-y-2">
            <div>
              <p-input
                label="Phone Number"
                :fields="fields"
                :vFields="$v.fields"
                name="phone"
                message="Tidak boleh kosong"
                validation="required"
              />
            </div>
            <div>
              <p-input
                label="Password"
                :fields="fields"
                :vFields="$v.fields"
                name="password"
                type="password"
                append-icon="mdi-eye"
                message="Tidak boleh kosong"
                validation="required"
              />
            </div>
          </div>
        </div>
      </box>
      <div class="flex space-x-4 mt-6">
        <div>
          <v-btn
            depressed
          >
            Reset
          </v-btn>
        </div>
        <div>
          <v-btn
            depressed
            type="submit"
            color="primary"
          >
            Login
          </v-btn>
        </div>
      </div>
      <v-snackbar
        v-model="isLoggedFailed"
      >
        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            {{message}}
          </v-btn>
        </template>
      </v-snackbar>
    </form>
  </div>
</template>

<script>
import Box from "../../components/box/index.vue"
import { required } from 'vuelidate/lib/validators'
import Input from "../../components/form/input"
import { setToken } from '../../utils'

export default {
  data() {
    return {
      fields: {
        phone: "",
        password: ""
      },
      message: ""
    }
  },
  validations: {
    fields: {
      phone: {required},
      password: {required}
    }
  },
  computed: {
    isLoggedFailed() {
      return Boolean(this.message)
    }
  },
  components: {
    "box": Box,
    "p-input": Input
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$error) {
        this.$store.dispatch("profile/postLogin", {
          latlong: "",
          device_token: "",
          device_type: 2, 
          ...this.fields
        })
        .then(data => {
          setToken(data.data.data.user.access_token)
          window.location.href = "/"
        })
        .catch(err => {
          const data = err.response.data
          if (err.response.status === 401) {
            this.$store.dispatch("profile/postOTPRequest", {phone: this.fields.phone}).then(() => {
              window.location.href = '/auth/verification' + "?id=" + data.error.errors[0].user_id
            })
          } else if (err.response.status === 422) {
            if (data.error.errors.length) {
              const message = data.error.errors[0]
              this.message = message
            }
          }
        })
      }
    }
  }
}
</script>