<template>
    <div v-if="product">
        <h2>Product Preview Page</h2>
    <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
    </div>
</template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { Products } from '@/constants/data';
  import { onMounted } from 'vue';
  
  const route = useRoute();
  const router = useRouter();
  const id = Number(route.params.slug);
  const product = Products.find(p => p.id === id);
  
  onMounted(() => {
    if (!product) {
        router.replace({ name: 'NotFound' });
    }
  });
  </script>
  
  