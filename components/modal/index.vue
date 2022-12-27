<template>
  <div>
    <v-dialog
      v-model="states.visible"
      click:outside="handleClose"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5">
          Upload Picture
        </v-card-title>

        <v-card-text>
          <div class="border border-dashed border-gray-300 bg-gray-800 text-center rounded-md overflow-hidden">
            <div v-if="isImagesExist"  class="grid grid-cols-3 gap-4 p-4">
              <div v-for="(img, key) in fields.images" v-bind:key="key" class="rounded overflow-hidden" style="height: 133px">
                <img :src="img" alt="" class="h-full object-cover">
              </div>
              <div class="grid place-items-center border border-gray-600 rounded" style="height: 133px">
                <button @click="handleSelect" class="font-bold text-green-600 cursor-pointer">
                  <v-icon
                    large
                    color="primary darken-2"
                  >
                  mdi-plus-box-multiple
                  </v-icon>
                </button>
              </div>
            </div>
            <div v-if="!isImagesExist" class="px-8 py-16">
              <div>
                <v-icon
                  large
                  color="primary darken-2"
                >
                mdi-plus-box-multiple
                </v-icon>
              </div>
              <h4 class="font-bold mt-4">Drag & Drop your Picture here</h4>
              <div>Or</div>
              <button @click="handleSelect" class="font-bold text-green-600 cursor-pointer"><span>Browse file</span></button>
            </div>
          </div>
        </v-card-text>
        <input
          type="file"
          hidden
          ref="files"
          @change="handleChange"
        />

        <v-card-actions class="pb-6">
          <v-btn
            color="primary"
            outlined
            text
            width="100%"
            @click="onupload"
          >
            Upload
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["fields", "name", "states", "onupload"],
  data() {
    return {
      modal: true
    }
  },
  computed: {
    isImagesExist() {
      return Boolean(this.fields.images.length)
    }
  },
  methods: {
    handleSelect() {
      this.$refs.files.click()
    },
    handleChange(e) {
      const reader = new FileReader();

      if (e.target.files.length) {
        const file = e.target.files[0];
        this.fields.imgs.push(e.target.files[0])
  
        reader.onloadend = () => {
          this.fields.images.push(reader.result)
        };
  
        reader.readAsDataURL(file);
      }
    },
    handleClose() {
      this.states.visible = false
    }
  }
}
</script>

<style>
[role=dialog] .v-dialog .theme--dark.v-card {
  background-color: initial;
  backdrop-filter: blur(50px);
}
</style>