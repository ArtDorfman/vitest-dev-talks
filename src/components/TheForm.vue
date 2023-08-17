<template>
  <form @submit.prevent="submit">
    <input 
      v-model="email" 
      type="email" 
      placeholder="your@email.com" 
      required 
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const email = ref('')

const submit = () => {
  console.log(email.value)  
}
</script>