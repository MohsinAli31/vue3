<script setup>
  import Count from '@/components/Count.vue'
  import { ref } from 'vue';
  import ChildComponent from '@/components/Child/ChildComp.vue';
  import CounterComponent from '@/components/ClassesAndStyles/Counter.vue';
  import WatchComp from '@/components/watchers/watchComp.vue';
  import LifeCycle from '@/components/LifeCycleHook/LifeCycleHook.vue';
  import TemplateRef from '@/components/TemplateRef/TemplateRef.vue';
  import CompProp from '@/components/CompProps/CompProps.vue';

//  below is syntax is optional api

  // export default {
  //   components:{
  //     CounterComponent,
  //     ChildComponent
  //   }
  // }

  const message = ref("Hello from Parent!");
  const message2 = ref("");

  const updateMessage = (newMessage) => {
    message2.value = newMessage;
  };
</script>

<template>
  <!-- <h1>My name is Mohsin</h1>
  <h2>

    <Count />
  </h2>
  <h2>Message from Parent: {{ message }}</h2>
  <h2>Message from Child: {{ message2 }}</h2>
  <h2>

    <ChildComponent :initialMessage="message" @update-message="updateMessage" />
  </h2>

  <h2>2: Now classes and styles here </h2>
  <CounterComponent /> -->
  <!-- <WatchComp /> -->
  <!-- <LifeCycle /> -->
   <TemplateRef />
   <CompProp />

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
