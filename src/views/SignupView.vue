<template>
  <div>
      <div
      class="h-screen bg-white flex flex-col space-y-10 justify-center items-center"
    >
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <h1 class="text-3xl font-medium mb-2">Register Form</h1>
        <form class="space-y-5 mt-5" @submit.prevent="submitData()">
          <input
            type="text"
            class="w-full h-12 border border-gray-800 rounded px-3 outline-none"
            placeholder="Name"
            v-model.trim="allData.name"
            required
          />
          <input
            type="email"
            class="w-full h-12 border border-gray-800 rounded px-3 outline-none"
            placeholder="Email"
            v-model.trim="allData.email"
            required
          />
           <input
              type="password"
              class="w-full h-12 border border-gray-800 rounded px-3 outline-none"
              placeholder="Password"
              v-model="allData.password"
              required
            />
            <input
              type="password"
              class="w-full h-12 border border-gray-800 rounded px-3 outline-none"
              placeholder="Confirm Password"
              v-model="allData.cofirm_password"
              required
            />
          <button
          type="submit"
            class="text-center w-full bg-blue-700 rounded-full text-white py-3 font-medium outline-none"
          >
            Login
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
                name: '',
                email: '',
                password: '',
                confirm_password: ''
            }
        }
    },
    methods: {
        submitData() {
            axios.post('/regiser', this.allData).then(() => {
                alert('user registered successfully')
            }).catch(err => {
                alert(err.response.data)
            })
        }
    },
};
</script>

<style></style>
