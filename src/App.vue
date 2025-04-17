<script setup>
  import Count from '@/components/Count.vue'
  import { ref } from 'vue';
  import ChildComponent from '@/components/Child/ChildComp.vue';
  import CounterComponent from '@/components/ClassesAndStyles/Counter.vue';
  import WatchComp from '@/components/watchers/watchComp.vue';
  import LifeCycle from '@/components/LifeCycleHook/LifeCycleHook.vue';
  import TemplateRef from '@/components/TemplateRef/TemplateRef.vue';
  import CompProp from '@/components/CompProps/CompProps.vue';
  import { useRoute } from 'vue-router'
  import Navbar from '@/pages/Navbar.vue'

  const route = useRoute()

</script>

<template>

<!-- routing  -->

    <RouterView />
  
</template>

