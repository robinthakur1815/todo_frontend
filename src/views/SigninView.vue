<template>
  <div>
    <div
      class="h-screen bg-white flex flex-col space-y-10 justify-center items-center"
    >
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <h1 class="text-3xl font-medium mb-2">Login Form</h1>
        <form class="space-y-5 mt-5" @submit.prevent="submitData()">
          <input
            type="text"
            class="w-full h-12 border border-gray-800 rounded px-3 outline-none"
            placeholder="Username / Email"
            v-model="allData.username"
            required
          />
           <input
              type="password"
              class="w-full h-12 border border-gray-800 rounded px-3 outline-none"
              placeholder="Password"
              v-model="allData.password"
              required
            />
          <button
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
                username: '',
                password: ''
            }
        }
    },
    methods: {
        submitData() {
            axios.post('http://127.0.0.1:8088/api/login', this.allData).then((res) => {
                this.$store.dispatch('SET_USER', res.data)
                this.$router.push('/list')
            }).catch(err => {
                alert(err.response.data)
            })
        }
    },
};
</script>

<style></style>
