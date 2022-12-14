<template>
  <div>
    <box title="Gallery Information" description="Information about your Education">
      <template v-slot:rightContent>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" fill="#54B78A"/>
        </svg>
      </template>
      <div class="mt-4">
        <div>
          <div class="grid grid-cols-3 gap-4">
            <div>
              <img class="rounded-md" src="https://images.unsplash.com/photo-1670832215724-cce6d9ee619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="">
            </div>
            <div>
              <img class="rounded-md" src="https://images.unsplash.com/photo-1670832215724-cce6d9ee619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="">
            </div>
            <div>
              <img class="rounded-md" src="https://images.unsplash.com/photo-1670832215724-cce6d9ee619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="">
            </div>
            <div>
              <img class="rounded-md" src="https://images.unsplash.com/photo-1670832215724-cce6d9ee619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="">
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