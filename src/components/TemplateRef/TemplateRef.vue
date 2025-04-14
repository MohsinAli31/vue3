<!-- // 

when to use
access native dom elements directly
work with 3rd parties dom based library
Managig focus state 
Handle file inputs and media elements
perform dom measurements

-->

<script setup>
import {ref, useTemplateRef, onMounted } from 'vue'

// the first argument must match the ref value in the template
const input = useTemplateRef('my-input')
const inputElement = ref(null)

const setInputRef = (el) => {
  inputElement.value = el
}

onMounted(() => {
    console.log("input...", input.value)
  input.value.focus()

  console.log("itemRefs",itemRefs.value)

  console.log("inputElement:", inputElement.value)
  if (inputElement.value) {
    inputElement.value.focus()  // focus the input when mounted
  }
})
const handleCHage = (e) =>{
    console.log("e", e.target.value)
} 

const handleInput = (e) =>{
    console.log("e", e.target.value)
} 

const list = ref([
  'item1','item2','item3'
])

const itemRefs = useTemplateRef('items')



</script>

<template>
  <input ref="my-input" @change="handleCHage" @input="handleInput"/>
  <!-- list ref -->
   <h2>list ref</h2>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>

  <input :ref="setInputRef" placeholder="Type here..." />

</template>