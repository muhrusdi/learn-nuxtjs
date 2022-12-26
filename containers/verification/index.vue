<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <box title="OTP Verification" description="Insert OTP code sent to your phone">
        <div>
          <div class="mt-6">
            <div class="flex items-center space-x-3">
              <div>
                <p-otp-input
                  label="OTP"
                  :fields="fields"
                  :vFields="$v.fields"
                  name="otp"
                  message="Tidak boleh kosong"
                  validation="required"
                />
              </div>
              <div>
                <v-btn
                  type="submit" @click="handleSubmit"
                  depressed
                  color="primary"
                >
                  Verify
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </box>
      <div class="flex space-x-4 mt-6">
        <div>
          <v-btn
            depressed
            outlined
            color="primary"
          >
            <v-icon
              right
              dark
              class="mr-2"
            >
            mdi-restart
            </v-icon>
            Resend OTP Code
          </v-btn>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Box from "../../components/box/index.vue"
import { required } from 'vuelidate/lib/validators'
import OTPInput from "../../components/form/otp-input"
import { setToken } from '../../utils'

export default {
  data() {
    return {
      fields: {
        otp: "",
      }
    }
  },
  validations: {
    fields: {
      otp: {required},
    }
  },
  components: {
    "box": Box,
    "p-otp-input": OTPInput
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.error) {
        this.$store.dispatch("profile/postVerification",{
          user_id: this.$route.query.id,
          otp_code: this.fields.otp
        })
        .then((data) => {
          const token = data.data.data.user.access_token
          setToken(token)
          window.location.href = "/auth/login"
        })
      }
    }
  }
}
</script>