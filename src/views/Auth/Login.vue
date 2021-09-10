<template>
  <!-- component -->
  <body class="bg-white">
    <!-- url('/img/hero-pattern.svg') -->
    <div class="flex min-h-screen bg-white">
      <div class="w-1/2 bg-cover bg-indigo-900 md:block hidden">
        <h1 class="text-center text-6xl text-white pt-60 font-medium">SUCH.</h1>
        <p class="text-center text-white font-medium">survey application</p>
      </div>
      <!-- <div class="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden">
            <img src="log_in.webp" alt="hey">
        </div> -->

      <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div class="text-left p-0 font-sans">
          <h1 class="text-gray-800 text-3xl font-medium">Authentification</h1>
          <h3 class="p-1 text-gray-700">Free forever. No payment needed.</h3>
        </div>
        <form action="#" class="p-0">
          <div class="mt-5">
            <n-input
              type="text"
              class="
                block
                w-full
                p-2
                border
                rounded
                border-gray-300
                focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent
              "
              placeholder="email"
            />
          </div>
          <div class="mt-5">
            <n-input
              type="password"
              show-password-on="mousedown"
              placeholder="Password"
              :maxlength="8"
              class="
                block
                w-full
                p-2
                border
                rounded
                border-gray-300
                focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent
              "
            >
            </n-input>
          </div>

          <div class="mt-10">
            <n-button
              type="submit"
              class="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
            >
              get in backoffice
            </n-button>
          </div>
        </form>
        <a class="" href="/login" data-test="Link"
          ><span class="block p-5 text-center text-gray-800 text-xs">
            <router-link to="/register"> don't have an account? </router-link>
          </span></a
        >
      </div>
    </div>
  </body>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/stores/user'

import { NInput, NSpace, NCheckbox, NButton, NIcon, NForm, NFormItem } from 'naive-ui'
import { BrandGoogle } from '@vicons/carbon'

export default defineComponent({
  name: 'Login',

  components: {
    NInput,
    NSpace,
    NCheckbox,
    NButton,
    NIcon,
    BrandGoogle,
    NForm,
    NFormItem,
  },

  setup() {
    const userStore = useUserStore()
    const router = useRouter()

    const form = ref({
      email: null,
      password: null,
      rememberMe: false,
    })

    const login = async () => {
      if (!form.value.email || !form.value.password) {
        window.$message.error("Le mot de passe ou l'email n'est pas correcte.")
        return
      }

      //await userStore.login(form.value.email, form.value.password)

      //router.push('/')
    }

    return {
      form,
      login,
      //loginWithGoogle: userStore.loginWithGoogle,
    }
  },
})
</script>
