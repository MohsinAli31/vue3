<script setup>
import { ref } from 'vue'
import ChildComponent from '../Child/ChildCompoentLifeCycleHook.vue'

const count = ref(0)
const showChild = ref(true)

function increment() {
  count.value++
}

function toggle() {
  showChild.value = !showChild.value
}
</script>

<template>
    <div>
      <h2 class="heading">Vue 3 Lifecycle Demo</h2>
      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="toggle">Toggle Component</button>
  
      <!-- Conditional rendering -->
      <ChildComponent v-if="showChild" />
    </div>
</template>

  