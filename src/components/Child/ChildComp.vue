<script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    initialMessage: String
  });
  
  const emit = defineEmits(['update-message']);
  
  const childMessage = ref('');
  
  const sendMessage = () => {
    emit('update-message', childMessage.value);
  };
</script>

<template>
    <h2>
      <h3>Child Component</h3>
      <p>Received from Parent: {{ initialMessage }}</p>
      <input v-model="childMessage" placeholder="Type a new message" />
      <button @click="sendMessage">Send to Parent</button>
    </h2>
</template>
  