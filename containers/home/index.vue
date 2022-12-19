<template>
  <div>
    <box title="Profile Information" description="Your personal data">
      <template v-slot:rightContent>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 17.9999H9.24C9.37161 18.0007 9.50207 17.9755 9.62391 17.9257C9.74574 17.8759 9.85656 17.8026 9.95 17.7099L16.87 10.7799L19.71 7.99994C19.8037 7.90698 19.8781 7.79637 19.9289 7.67452C19.9797 7.55266 20.0058 7.42195 20.0058 7.28994C20.0058 7.15793 19.9797 7.02722 19.9289 6.90536C19.8781 6.7835 19.8037 6.6729 19.71 6.57994L15.47 2.28994C15.377 2.19621 15.2664 2.12182 15.1446 2.07105C15.0227 2.02028 14.892 1.99414 14.76 1.99414C14.628 1.99414 14.4973 2.02028 14.3754 2.07105C14.2536 2.12182 14.143 2.19621 14.05 2.28994L11.23 5.11994L4.29 12.0499C4.19732 12.1434 4.12399 12.2542 4.07423 12.376C4.02446 12.4979 3.99924 12.6283 4 12.7599V16.9999C4 17.2652 4.10536 17.5195 4.29289 17.707C4.48043 17.8946 4.73478 17.9999 5 17.9999ZM14.76 4.40994L17.59 7.23994L16.17 8.65994L13.34 5.82994L14.76 4.40994ZM6 13.1699L11.93 7.23994L14.76 10.0699L8.83 15.9999H6V13.1699ZM21 19.9999H3C2.73478 19.9999 2.48043 20.1053 2.29289 20.2928C2.10536 20.4804 2 20.7347 2 20.9999C2 21.2652 2.10536 21.5195 2.29289 21.707C2.48043 21.8946 2.73478 21.9999 3 21.9999H21C21.2652 21.9999 21.5196 21.8946 21.7071 21.707C21.8946 21.5195 22 21.2652 22 20.9999C22 20.7347 21.8946 20.4804 21.7071 20.2928C21.5196 20.1053 21.2652 19.9999 21 19.9999Z" fill="#54B78A"/>
        </svg>
      </template>
      <form @submit.prevent="handleSubmit">
        <div class="flex space-x-6 mt-4">
          <div class="w-1/2">
            <div>
              <div>
                <h4>Information Detail</h4>
              </div>
              <div class="mt-6">
                <p-input
                  label="Name"
                  :fields="fields"
                  :vFields="$v.fields"
                  name="name"
                  message="Tidak boleh kosong"
                  validation="required"
                />
              </div>
              <div>
                <p-select
                  label="Gender"
                  :fields="fields"
                  :vFields="$v.fields"
                  :items="items"
                  name="gender"
                  message="Tidak boleh kosong"
                  validation="required"
                />
              </div>
              <div>
                <p-datepicker
                  label="Date of Birth"
                  :fields="fields"
                  :vFields="$v.fields"
                  name="dateOfBirth"
                  message="Tidak boleh kosong"
                  validation="required"
                />
              </div>
              <div>
                <p-input
                  label="Hometown"
                  :fields="fields"
                  :vFields="$v.fields"
                  name="hometown"
                  message="Tidak boleh kosong"
                  validation="required"
                />
              </div>
              <div>
                <p-textarea
                  label="Bio"
                  :fields="fields"
                  :vFields="$v.fields"
                  name="bio"
                />
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <div>
              <div>
                <h4>Profile Picture</h4>
              </div>
              <p-photo-upload
                :fields="fields"
                :vFields="$v.fields"
                name="profilePicture"
              >
                <div class="mt-6">
                  <img class="rounded-md" :src="fields.profilePicture" alt="">
                </div>
                <template  v-slot:button>
                  <div ref="uploadButton" class="mt-6 space-y-3 text-center">
                    <v-btn
                      depressed
                      color="primary"
                      width="100%"
                      @click="handleUpload"
                    >
                      Upload Media
                    </v-btn>
                    <p class="text-xs text-gray-400 font-medium">PNG, JPG or GIF up to 2MB</p>
                  </div>
                </template>
              </p-photo-upload>
            </div>
          </div>
        </div>
        <div class="flex space-x-4">
          <div>
            <v-btn
              depressed
            >
              Discard
            </v-btn>
          </div>
          <div>
            <v-btn
              depressed
              type="submit" @click="handleSubmit"
              color="primary"
            >
              Update
            </v-btn>
          </div>
        </div>
      </form>
    </box>
  </div>
</template>

<script>
import Box from "../../components/box"
import { required } from 'vuelidate/lib/validators'
import Input from "../../components/form/input/index.vue"
import Textarea from "../../components/form/textarea/index.vue"
import Select from "../../components/form/select/index.vue"
import DatePicker from "../../components/form/date-picker/index.vue"
import PhotoUpload from "../../components/form/photo-upload/index.vue"

export default {
  data() {
    return {
      items: ['Male', 'Female'],
      fields: {
        name: "",
        gender: "",
        dateOfBirth: null,
        hometown: "",
        profilePicture: "https://images.unsplash.com/photo-1670832215724-cce6d9ee619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        bio: ""
      }
    }
  },
  validations: {
    fields: {
      name: {required},
      gender: {required},
      dateOfBirth: {required},
      hometown: {required},
      bio: {},
      profilePicture: {}
    }
  },
  components: {
    "box": Box,
    "p-input": Input,
    "p-textarea": Textarea,
    "p-select": Select,
    "p-datepicker": DatePicker,
    "p-photo-upload": PhotoUpload
  },
  methods: {
    handleUpload() {
      this.$refs.uploadButton.nextElementSibling.click()
    },
    handleSubmit() {
      this.$v.$touch()
    }
  }
}
</script>