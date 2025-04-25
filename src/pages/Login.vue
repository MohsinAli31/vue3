<template>
    <div style="max-width: 400px; margin: auto; padding: 2rem;">
      <h2>Login Page</h2>
  
      <form @submit.prevent="handleLogin">
        <div style="margin-bottom: 1rem;">
          <label>Email:</label>
          <input v-model="email" type="email" required style="width: 100%;" />
        </div>
  
        <div style="margin-bottom: 1rem;">
          <label>Password:</label>
          <input v-model="password" type="password" required style="width: 100%;" />
        </div>
  
        <button type="submit">Login</button>
      </form>
  
      <!-- <RouterLink to="/">Back to Home</RouterLink> -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  
  function handleLogin() {
    if (email.value && password.value) {
      // Dummy check passed — set token and redirect
      localStorage.setItem('authToken', 'dummy_token_123')
      router.push('/')
    } else {
      alert('Please enter email and password')
    }
  }
  </script>
  