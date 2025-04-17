<script setup>
      import Navbar from '@/pages/Navbar.vue'
</script>
<template>
    <main>
        <Navbar />
        <RouterView />
    </main>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
}

</style>