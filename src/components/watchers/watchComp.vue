<script setup>
    import { ref, computed, watch } from 'vue'
    const count = ref(0)
    const msg =ref("")
    const form = ref({
        email: ''
    })
    const increment = () => {
        count.value++
        // console.log(count.value, count.value % 2 === 0 ? 'Even' : 'Odd')

    }

    const decrement = () => {
    count.value--
    // console.log(count.value, count.value % 2 === 0 ? 'Even' : 'Odd')

    }

    // const validateEmail = () => {
        // const email = form.value.email
        // const isValid = String(email)
        //     .toLowerCase()
        //     .match(
        //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        //     )
            
        // msg.value = isValid ? "Valid email" : "Invalid email"
    // }


    
    const isEven = computed(() => {
        return count.value % 2 === 0
        })
        
    watch(count, (newValue, oldValue)=>{
        console.log("newValue", newValue)
        console.log("oldValue", oldValue)   
    })

    watch(count, (newValue, oldValue)=>{
        console.log("newValue", newValue)
        console.log("oldValue", oldValue)   
    })

    // watch(()=> form.value.email,(newValue, oldValue)=>{
    //     const isValid = String(newValue)
    //         .toLowerCase()
    //         .match(
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         )
            
    //     msg.value = isValid ? "Valid email" : "Invalid email"

    // })

    // deep watch

    watch(
        form, 
        (newForm) => {
            const email = newForm.email
            const isValid = String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            msg.value = isValid ? 'Valid email' : 'Invalid email'
        },
        { deep: true }
        )

  
</script>

<template>
    <div class="heading">
        <button @click="decrement"> Decrement --  </button>
        <h1>{{ count }}</h1>
        <p>{{ isEven ? 'Even' : 'Odd' }}</p>
        <button @click="increment"> Increment ++  </button>

        <!-- <input type="text" v-model="form.email" @input="validateEmail"/> -->
        <input type="text" v-model="form.email" />

        {{ msg }}
    </div>
</template>

<style scoped>
button {
  font-weight: bold;
  display: flex;
}
.heading{
    display: flex;
    justify-content: space-between;
    gap: 30px;
}
</style>