<script setup>
import { useRouter } from 'vue-router'
import CounterAppStore from '@/pages/CounterAppStore.vue'

const router = useRouter()

  const goToAbout=()=> {
      router.push('/about')
    }
</script>

<template>
  <h2>HomeView</h2>
  <button @click="goToAbout">Go to About</button>

  <!-- COunter APP -->

   <CounterAppStore />
</template>