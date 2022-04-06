<template>
  <div>
      <div
      class="h-screen bg-white flex flex-col space-y-10 justify-center items-center"
    >
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <form class="space-y-5 mt-5" @submit.prevent="submitData()">
          <input
            type="text"
            class="w-full h-12 border border-gray-800 rounded px-3 outline-none"
            placeholder="Enter todo"
            v-model="allData.name"
            required
          />
          <button
            class="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium outline-none"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            allData: {
                name: ''
            }
        }
    },
    methods: {
        submitData() {
            axios.post('/regiser', this.allData).then(() => {
                alert('Loggin successfully')
            }).catch(err => {
                alert(err.response.data)
            })
        }
    },
};
</script>

<style></style>