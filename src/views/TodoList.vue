<template>
  <div>
      <div>
          <div class="bg-white rounded shadow p-6 m-4 w-full max-w-3xl mx-auto mt-12">
            <div class="flex mb-4 items-center" v-for="n in 10" :key="n">
                <p class="w-full">Add another component to Tailwind Components</p>
                <button class="p-2 ml-2 border-2 rounded" @click="removeTodo()">Remove</button>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    methods: {
        removeTodo() {
            axios.post('http://127.0.0.1:8000/api/todos/{todo}').then(() => {}).catch(() => {})
        }
    },
        listTodo() {
            axios.post('http://127.0.0.1:8000/api/index').then(() => {}).catch(() => {})
        }

}
</script>

<style>

</style>