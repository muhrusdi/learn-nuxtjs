<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <box title="Login Account">
        <div>
          <div class="mt-6">
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
            type="submit" @click="handleSubmit"
            color="primary"
          >
            Login
          </v-btn>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Box from "../../components/box/index.vue"
import { required } from 'vuelidate/lib/validators'
import Input from "../../components/form/input"
import { postLogin } from "../../hooks/api"

export default {
  data() {
    return {
      fields: {
        phone: "",
        password: ""
      }
    }
  },
  validations: {
    fields: {
      phone: {required},
      password: {required}
    }
  },
  components: {
    "box": Box,
    "p-input": Input
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.error) {
        postLogin({
          latlong: "",
          device_token: "",
          device_type: 2, 
          ...this.fields
        })
        .then(data => {
          console.log("--res", data)
        })
        .catch(err => {
          console.log("--err", err.response)
        })
      }
    }
  }
}
</script>