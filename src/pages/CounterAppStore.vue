<template>
    <div>
        <hr>
        <h2>Pinia State management </h2>

      <h2>Counter: {{ counter.count }}</h2>
      <button @click="counter.increment">+</button>
      <button @click="counter.decrement">-</button>
      <p>Double: {{ counter.doubleCount }}</p>
  
      <hr>
  
      <h2>User Info</h2>
      <div v-if="user.loading">Loading...</div>
      <div v-else-if="user.error">{{ user.error }}</div>
      <div v-else-if="user.userData">
        <p><strong>Name:</strong> {{ user.userData.name }}</p>
        <p><strong>Email:</strong> {{ user.userData.email }}</p>
      </div>
      <button @click="user.fetchUser">Fetch User</button>
    </div>
</template>
  
<script setup>
  import { useCounterStore } from '@/stores/counterStore'
  import { useUserStore } from '@/stores/userStore'
  import { storeToRefs } from 'pinia'

  // we can not destruct like this 
  //  const {count, doubleCount, increment, decrement } = counter
  const counter = useCounterStore()
  const user = useUserStore()

  const {count, doubleCount } = storeToRefs(counter)  // to destructure state 
  const {increment, decrement } = counter

  
</script>
  