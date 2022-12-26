<template>
  <div>
    
    <form @submit.prevent="handleSubmit">
      <box title="Create New Account" description="Before you can join here, please create new account">
        <div>
          <div class="mt-6 space-y-2">
            <div>
              <p-select
                label="Select Country"
                :fields="fields"
                :vFields="$v.fields"
                :items="getPhoneNumbers"
                name="country"
                message="Tidak boleh kosong"
                validation="required"
              />
            </div>
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
            Register
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
import Select from "../../components/form/select"

export default {
  data() {
    return {
      fields: {
        phone: "",
        password: "",
        country: ""
      },
      countryCodes: {},
      countryNames: {}
    }
  },
  validations: {
    fields: {
      phone: {required},
      password: {required},
      country: {required}
    }
  },
  mounted() {
    this.$store.dispatch("profile/getCountryCode").then(d => {
      this.countryCodes = d
    })

    this.$store.dispatch("profile/getCountryName").then(d => {
      this.countryNames = d
    })
  },
  computed: {
    getPhoneNumbers() {
      return this.countryCodes && this.countryNames
        ? Object.keys(this.countryCodes)
            .filter((key) => this.countryCodes[key])
            .map(
              (key) =>
                this.countryNames[key] && {
                  text: `${this.countryNames[key]} (${
                    this.countryCodes[key].includes("+")
                      ? this.countryCodes[key]
                      : `+${this.countryCodes[key]}`
                  })`,
                  value: this.countryCodes[key],
                }
            )
        : []
    }
  },
  components: {
    "box": Box,
    "p-input": Input,
    "p-select": Select
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$error) {
        console.log( this.fields)
        this.$store.dispatch("profile/postRegister", {
          ...this.fields,
          phone: this.fields.country.value + this.fields.phone,
          country: this.fields.country.value,
          latlong: "",
          device_token: "",
          device_type: 2, 
        })
        .then(() => {
          window.location.href = "/auth/login"
        })
      }
    }
  }
}
</script>