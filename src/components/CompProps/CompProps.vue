<script setup>
  import ChildComponent from './ChildComp.vue'
  
  const dataList = ['Apple', 'Banana', 'Cherry', 'Date']
</script>
<template>
    <div>
      <h2>Parent Component</h2>
      <ChildComponent :items="dataList" />
    </div>
</template>
  