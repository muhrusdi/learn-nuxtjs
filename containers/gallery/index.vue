<template>
  <div>
    <box title="Gallery Information" description="Information about your Education">
      <template v-slot:rightContent>
        <button @click="handleVisible">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="#54B78A"/>
          </svg>
        </button>
      </template>
      <div class="mt-4">
        <div>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="(img, i) in states.galleries" v-bind:key="i">
              <img class="rounded-md" :src="img.picture.url" alt="">
            </div>
          </div>
        </div>
      </div>
      <modal :states="states" :fields="fields" name="images" :onupload="handleSubmit"/>
    </box>
  </div>
</template>

<script>
import Box from "../../components/box/index.vue"
import Modal from "../../components/modal/index.vue"
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      states: {
        visible: false,
        galleries: []
      },
      fields: {
        images: [],
        imgs: []
      }
    }
  },
  components: {
    box: Box,
    modal: Modal
  },
  watch: {
    galleries: {
        immediate: true,
        handler(galleries) {
          this.states.galleries = galleries
        }
     }
  },
  computed: {
    ...mapGetters({
      galleries: "profile/galleries"
    })
  },
  methods: {
    handleVisible() {
      this.states.visible = true
    },
    handleSubmit() {
      if (this.fields.images.length < 2) {
        const formData = new FormData();
        formData.append("image", this.fields.imgs[0]);
        this.$store.dispatch("profile/postGalleries", formData)
        .then(() => {
          this.states.visible = false
          this.fields.images = []
          this.fields.imgs = []
        })
      } else {
        Promise.all(
          this.fields.imgs.map((file) => {
            const formData = new FormData();
            formData.append("image", file);
            return this.$store.dispatch("profile/postGalleries", formData)
          })
          )
          .finally(() => {
            this.fields.images = []
            this.fields.imgs = []
            this.states.visible = false
          })
      }
    }
  }
}
</script>