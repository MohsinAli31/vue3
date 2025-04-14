<script setup>
  const props = defineProps({
    items: {
      type: Array,
      required: true
    }
  })
</script>
<template>
    <div>
      <h3>Child Component</h3>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
</template>
  