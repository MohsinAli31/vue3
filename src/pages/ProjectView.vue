<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

  const goToAbout=()=> {
      router.push('/about')
    }
    const goToHome=()=> {
      router.push('/')
    }  
</script>

<template>
  <h2>Project page</h2>
  <button @click="goToAbout">Go to About</button>
  <button @click="goToHome">Go to Home</button>
</template>