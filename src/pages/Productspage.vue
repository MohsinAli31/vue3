<script setup>
  import {Products} from '@/constants/data';
</script>

<template>
    <h2>Products page</h2>
    <div class="wrapper">
        <div v-for="product in Products" :key="product.id" class="card">
            <h1>{{ product.name }}</h1>
            <h1>{{ product.price }}</h1>
            <h1>{{ product.description }}</h1>
            <RouterLink :to="`/product-preview/${product.id}`">Go to Products</RouterLink>
        </div>

    </div>
</template>
<style scoped>
    .wrapper{
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .card{
        display: flex;
        border: 1px solid;
        gap: 30px;
        flex-direction: column;
        border-radius: 10px;
        padding: 12px;
    }

</style>