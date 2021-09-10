<template>
  <!-- component -->

  <div class="max-w-screen-lg mx-auto">
    <!-- component -->

    <div class="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div
        x-data="{ open: false }"
        class="
          flex flex-col
          max-w-screen-xl
          px-4
          mx-auto
          md:items-center md:justify-between md:flex-row md:px-6
          lg:px-8
        "
      >
        <div class="p-4 flex flex-row items-center justify-between">
          <a
            href="#"
            class="
              text-lg
              font-bold
              tracking-widest
              text-gray-900
              uppercase
              rounded-lg
              dark-mode:text-white
              focus:outline-none focus:shadow-outline
            "
            >SUCH SURVEY</a
          >
          <button
            class="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            @click="open = !open"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
              <path
                x-show="!open"
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
              <path
                x-show="open"
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          :class="{ flex: open, hidden: !open }"
          class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row"
        >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm
              font-semibold
              text-gray-900
              bg-gray-200
              rounded-lg
              dark-mode:bg-gray-700
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
            href="#"
            >Accueil</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
            href="#"
            >Inscription</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
            href="#"
            >Déconnexion</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
            href="#"
            >About us</a
          >
          <a
            class="
              px-4
              py-2
              mt-2
              text-sm
              font-semibold
              bg-transparent
              rounded-lg
              dark-mode:bg-transparent
              dark-mode:hover:bg-gray-600
              dark-mode:focus:bg-gray-600
              dark-mode:focus:text-white
              dark-mode:hover:text-white
              dark-mode:text-gray-200
              md:mt-0 md:ml-4
              hover:text-gray-900
              focus:text-gray-900
              hover:bg-gray-200
              focus:bg-gray-200 focus:outline-none focus:shadow-outline
            "
            href="#"
            >Pricing
          </a>
        </nav>
      </div>
    </div>
    <main class="mt-2">
      <!-- featured section -->
      <div class="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
        <!-- main post -->
        <div class="mb-4 lg:mb-0 p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
          <img
            src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="rounded-md object-cover w-full h-64"
          />

          <h1 class="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
            Ignorant branched humanity led now marianne too.
          </h1>
          <p class="text-gray-600 mb-4">
            Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons
            yet understood decisively boy law she. Answer him easily are its barton little. Oh no
            though mother be things simple itself. Oh be me, sure wise sons, no. Piqued ye of am
            spirit regret. Stimulated discretion impossible admiration in particular conviction up.
          </p>
        </div>

        <h1 class="text-2xl font-bold pt-10">Survey Result</h1>

        <!-- recent posts -->
        <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between"></div>
        <div class="block space-x-0 lg:flex lg:space-x-6">
          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <apexchart width="300" type="bar" :options="chartOptions" :series="series"></apexchart>
            <div class="p-4 pl-0">
              <h6 class="font-bold text-xl text-gray-800">
                Put all speaking her delicate recurred possible.
              </h6>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <apexchart width="300" type="line" :options="chartOptions" :series="series"></apexchart>
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Is at purse tried jokes china ready decay an.
              </h2>
            </div>
          </div>

          <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
            <apexchart
              width="300"
              type="radar"
              :options="chartOptions"
              :series="series"
            ></apexchart>
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of.</h2>
            </div>
          </div>
        </div>
        <!-- end recent posts -->

        <!-- sub-main posts -->
        <div class="w-full md:w-4/7 text-center pt-10">
          <n-progress type="circle" :percentage="percentage" />
          <n-progress type="circle" status="info" :percentage="percentage" />
          <n-progress type="circle" status="success" :percentage="percentage" />
          <n-progress type="circle" status="warning" :percentage="percentage" />
          <n-progress type="circle" status="error" :percentage="percentage" />
        </div>
      </div>

      <!-- end featured section -->

      <!-- end popular posts -->
    </main>
    <!-- main ends here -->

    <!-- footer -->
    <footer class="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-2/5">
          <h1 class="text-3xl font-bold">SUCH</h1>
          <p class="text-gray-600 pt-4 hidden lg:block p-0 lg:pr-12">
            Boisterous he on understood attachment as entreaties ye devonshire. In mile an form snug
            were been sell. Extremely ham any his departure for contained curiosity defective. Way
            now instrument had eat diminution melancholy expression sentiments stimulated.
          </p>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li><a href="" class="block text-gray-600 py-2">Team</a></li>
            <li><a href="" class="block text-gray-600 py-2">About us</a></li>
            <li><a href="" class="block text-gray-600 py-2">Press</a></li>
          </ul>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Content</h6>
          <ul>
            <li><a href="" class="block text-gray-600 py-2">Blog</a></li>
            <li><a href="" class="block text-gray-600 py-2">Privacy Policy</a></li>
            <li><a href="" class="block text-gray-600 py-2">Terms & Conditions</a></li>
            <li><a href="" class="block text-gray-600 py-2">Documentation</a></li>
          </ul>
        </div>

        <div class="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
          <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li><a href="" class="block text-gray-600 py-2">Team</a></li>
            <li><a href="" class="block text-gray-600 py-2">About us</a></li>
            <li><a href="" class="block text-gray-600 py-2">Press</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <n-back-top :right="100" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { NCard, NProgress, NBackTop, NTimeline, NTimelineItem } from 'naive-ui'
export default defineComponent({
  components: {
    apexchart: VueApexCharts,
    NCard,
    NProgress,
    NBackTop,
    NTimeline,
  },
  setup() {},
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    }
  },
})
</script>
