<template>
  <div class="home">
    <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Todo to manage your</span>
              <!-- space -->
              <span class="block text-indigo-600 xl:inline">business timelines</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Get started
                </a>
              </div>

            </div>
          </div>
        </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
    // methods: {
    //     submitData() {
    //         axios.post('http://127.0.0.1:8088/api/index', this.allData).then(() => {
    //             alert('Loggin successfully')
    //         }).catch(err => {
    //             alert(err.response.data)
    //         })
    //     }
    // },
};
</script>
