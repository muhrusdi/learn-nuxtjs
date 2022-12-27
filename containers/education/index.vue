<template>
  <div>
    <box title="Education Information" description="Information about your Education">
      <template v-slot:rightContent>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="#54B78A"/>
        </svg>
      </template>
      <div class="mt-4">
        <form @submit.prevent="handleSubmit">
        
          <div>
            <div>
              <div>
                <h4>Information Detail</h4>
              </div>
              <div class="mt-6">
                <p-input
                    label="Education Name"
                    :fields="fields"
                    :vFields="$v.fields"
                    name="school_name"
                    message="Tidak boleh kosong"
                    validation="required"
                  />
              </div>
              <div>
                <p-datepicker
                    label="Graduation Time"
                    :fields="fields"
                    :vFields="$v.fields"
                    name="graduation_time"
                    message="Tidak boleh kosong"
                    validation="required"
                  />
              </div>
              
              <div class="mt-6">
                <div class="flex space-x-2">
                  <div>
                    <v-btn depressed>
                      Discard
                    </v-btn>
                  </div>
                  <div>
                    <v-btn depressed type="submit" color="primary">
                      Add Education
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div v-if="isEducationExist" class="mt-12">
          <ul class="p-0" style="padding: 0">
            <li>
              <div>
                <h4>{{ education.school_name }}</h4>
                <p class="text-gray-400">{{education.graduation_time}}</p>
              </div>
            </li> 
          </ul>
        </div>
      </div>
    </box>
  </div>
</template>

<script>
import Box from "../../components/box"
import Input from "../../components/form/input/index.vue"
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from "vuex"
import DatePicker from "../../components/form/date-picker/index.vue"

export default {
  data() {
    return {
      items: ['Male', 'Female'],
      education: {},
      fields: {
        school_name: "",
        graduation_time: ""
      }
    }
  },
  validations: {
    fields: {
      school_name: {required},
      graduation_time: {required},
    }
  },
  watch: {
    educations: {
        immediate: true,
        handler(edu) {
          this.education = edu
        }
     }
  },
  computed: {
    ...mapGetters({
      educations: "profile/educations"
    }),
    isEducationExist() {
      return Boolean(Object.keys(this.education).length)
    }
  },
  components: {
    "box": Box,
    "p-input": Input,
    "p-datepicker": DatePicker,
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (!this.$v.$error) {
        this.$store.dispatch("profile/postEducation", this.fields).then(() => {
          this.$v.$reset()
          Object.keys(this.fields).forEach(key => {
            this.fields[key] = ""
          })
        })
      }
    }
  }
}
</script>