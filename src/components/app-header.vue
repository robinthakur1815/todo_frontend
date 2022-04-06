<template>
  <div class="flex justify-center w-full p-3">
      <div class="font-bold text-lg">
        <router-link to="/">
        
        Logo
        </router-link>
        </div>
      <div class="mx-auto flex">
        <nav class="text-sm font-semibold text-gray-700 flex align-middle">
          <ul class="flex items-center space-x-8">
            <li><router-link to="/list" v-if="isAuth">All Todos</router-link></li>
            <li><router-link to="/add" v-if="isAuth">Add Todo</router-link></li>
          </ul>
        </nav>
      </div>
      <div v-if="!isAuth">
        <router-link to="/signin"
          class="px-3 py-2  rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none text-white"
        >
          Sign In
        </router-link>
        <router-link to="/signup"
          class="px-3 py-2 rounded-lg text-sm font-medium ml-2 text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none"
        >
          Sign Up
        </router-link>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuth"]),
  },
};
</script>

<style></style>
