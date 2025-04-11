<template>
    <div>
      <h3>Child Component</h3>
      <p>Count: {{ countVal }}</p>
      <button @click="countVal++">Count ++</button>
    </div>
</template>
  
<script setup>
  import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
  } from 'vue'
  
  // Reactive state
  const countVal = ref(0)
  
  onBeforeMount(() => {
    console.log('beforeMount: Template is compiled but not mounted yet')
  })
  
  onMounted(() => {
    console.log('mounted: Component is mounted, DOM is accessible')
    const heading = document.querySelector('.heading')
    console.log('DOM querySelector .heading:', heading)
  })
  
  onBeforeUpdate(() => {
    console.log('beforeUpdate: State is changing, DOM about to re-render')
  })
  
  onUpdated(() => {
    console.log('updated: DOM has re-rendered, countVal is now:', countVal.value)
  })
  
  onBeforeUnmount(() => {
    console.log('beforeUnmount: Component is about to unmount, cleanup tasks start')
  })
  
  onUnmounted(() => {
    console.log('unmounted: Component fully removed from DOM, cleanup done')
  })
  </script>
  