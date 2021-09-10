<template>
  <!-- component -->
  <div class="font-sans bg-white flex flex-col min-h-screen w-full">
    <div>
      <div class="bg-indigo-800 px-4 py-4">
        <div class="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
          <div>
            <a href="#" class="inline-block py-2 text-white text-3xl font-bold">SUCH</a>
          </div>

          <div>
            <div class="hidden md:block">
              <a href="#" class="inline-block py-1 md:py-4 text-white mr-6 font-bold"
                >How it Works</a
              >
              <a href="#" class="inline-block py-1 md:py-4 text-white hover:text-gray-600 mr-6"
                >Solutions</a
              >

              <a href="#" class="inline-block py-1 md:py-4 text-white hover:text-gray-600 mr-6"
                >Pricing</a
              >
              <a href="#" class="inline-block py-1 md:py-4 text-white hover:text-gray-600 mr-6"
                >Desktop</a
              >
            </div>
          </div>

          <div class="hidden md:block">
            <a class="inline-block py-1 md:py-4 text-white hover:text-gray-600 mr-6">
              <router-link to="/login">Login</router-link>
            </a>
            <a
              href="#"
              class="inline-block py-2 px-4 text-dark bg-white hover:bg-gray-100 rounded-lg"
            >
              <router-link to="/register">Inscription</router-link>
            </a>
          </div>
        </div>
      </div>

      <div class="bg-indigo-800 md:overflow-hidden">
        <div class="px-4 py-16">
          <div class="relative w-full md:max-w-2xl md:mx-auto text-center">
            <h1 class="font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
              Votre application de sondage
            </h1>

            <p class="text-white md:text-xl md:px-18">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
            </p>

            <div
              class="
                hidden
                md:block
                h-40
                w-40
                rounded-full
                bg-blue-800
                absolute
                right-0
                bottom-0
                -mb-64
                -mr-48
              "
            ></div>

            <div
              class="
                hidden
                md:block
                h-5
                w-5
                rounded-full
                bg-yellow-500
                absolute
                top-0
                right-0
                -mr-40
                mt-32
              "
            ></div>
          </div>
        </div>

        <svg
          class="fill-current bg-indigo-800 text-white hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill-opacity="1"
            d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div
        class="max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block"
        style="margin-top: -320px; border-radius: 20px"
      >
        <div
          class="h-20 w-20 rounded-full bg-yellow-500 absolute top-0 left-0 -ml-10 -mt-10"
          style="z-index: -1"
        ></div>

        <div
          class="h-5 w-5 rounded-full bg-blue-500 absolute top-0 left-0 -ml-32 mt-12"
          style="z-index: -1"
        ></div>

        <div class="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
        <div class="flex" style="height: 550px">
          <div class="w-32 bg-gray-200 p-6 overflow-hidden rounded-bl-lg">
            <div class="text-center mb-10">
              <div class="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"></div>
              <div class="h-2 rounded-full bg-blue-800"></div>
            </div>

            <div class="text-center mb-10">
              <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
              <div class="h-2 rounded-full bg-gray-300"></div>
            </div>

            <div class="text-center mb-10">
              <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
              <div class="h-2 rounded-full bg-gray-300"></div>
            </div>

            <div class="text-center">
              <div class="w-10 h-10 rounded-full bg-gray-300 mb-4 mx-auto"></div>
              <div class="h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
          <div class="flex-1 py-6 px-8">
            <div class="flex flex-wrap -mx-4">
              <div class="w-2/3 px-4">
                <div class="flex flex-wrap -mx-4 mb-10">
                  <div class="w-1/4 px-4">
                    <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                      <div class="w-10 h-10 rounded-full bg-green-600 mb-4 mx-auto"></div>
                      <div class="h-2 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                  <div class="w-1/4 px-4">
                    <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                      <div class="w-10 h-10 rounded-full bg-blue-600 mb-4 mx-auto"></div>
                      <div class="h-2 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                  <div class="w-1/4 px-4">
                    <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                      <div class="w-10 h-10 rounded-full bg-orange-400 mb-4 mx-auto"></div>
                      <div class="h-2 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                  <div class="w-1/4 px-4">
                    <div class="text-center mb-10 bg-white shadow rounded-lg p-6">
                      <div class="w-10 h-10 rounded-full bg-blue-800 mb-4 mx-auto"></div>
                      <div class="h-2 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                </div>

                <div class="h-32 percentage mb-10 pt-2">
                  <div class="h-4 bg-gray-200 w-64 mb-4 block"></div>
                  <div class="h-4 bg-gray-200 w-32 mb-4 block"></div>
                  <div class="h-4 bg-gray-200 w-40 mb-4 block"></div>
                  <div class="h-4 bg-gray-200 w-20 mb-4 block"></div>
                </div>

                <div class="w-full flex flex-wrap mb-6">
                  <div class="w-1/2">
                    <div class="flex items-center">
                      <div class="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                        <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="flex items-center">
                      <div class="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                        <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full flex flex-wrap">
                  <div class="w-1/2">
                    <div class="flex items-center">
                      <div class="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                        <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div class="w-1/2">
                    <div class="flex items-center">
                      <div class="h-8 w-8 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <div class="h-2 w-16 bg-gray-200 mb-1 rounded-full"></div>
                        <div class="h-2 w-10 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/3 px-4">
                <div class="rounded-lg shadow-lg p-6">
                  <div class="block w-12 h-2 rounded-full bg-gray-200 mb-6"></div>

                  <svg height="150" width="150" viewBox="0 0 20 20" class="mx-auto mb-12">
                    <circle r="10" cx="10" cy="10" fill="#4299e1" />
                    <circle
                      r="5"
                      cx="10"
                      cy="10"
                      fill="transparent"
                      stroke="#2b6cb0"
                      stroke-width="10"
                      stroke-dasharray="11 31.4"
                      transform="rotate(-90) translate(-20)"
                    />
                  </svg>

                  <div class="flex flex-wrap -mx-2 mb-10">
                    <div class="w-1/3 px-2">
                      <div class="block h-2 rounded-full bg-gray-200"></div>
                    </div>
                    <div class="w-1/3 px-2">
                      <div class="block h-2 rounded-full bg-gray-200"></div>
                    </div>
                    <div class="w-1/3 px-2">
                      <div class="block h-2 rounded-full bg-gray-200"></div>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between my-10">
                  <div>
                    <div class="h-2 w-10 bg-gray-300 rounded-full mb-2"></div>
                    <div class="h-2 w-16 bg-gray-300 rounded-full mb-2"></div>
                    <div class="h-2 w-8 bg-gray-300 rounded-full"></div>
                  </div>
                  <div>
                    <div class="ml-auto h-2 w-5 bg-gray-300 rounded-full mb-2"></div>
                    <div class="ml-auto h-2 w-6 bg-gray-300 rounded-full mb-2"></div>
                    <div class="ml-auto h-2 w-8 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                <div class="text-right flex justify-end">
                  <div class="rounded-lg h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                  <div class="rounded-lg h-8 w-60 px-4 bg-green-400">
                    <router-link to="/survey"></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 md:hidden">
        <div
          class="-mt-10 max-w-4xl mx-auto bg-white shadow-lg relative z-20"
          style="border-radius: 20px"
        >
          <div class="h-10 bg-white rounded-t-lg border-b border-gray-100"></div>
          <div class="flex" style="height: 340px">
            <div class="w-16 bg-gray-200 px-2 py-6 overflow-hidden rounded-bl-lg">
              <div class="text-center mb-6">
                <div class="w-4 h-4 rounded-full bg-blue-800 mb-2 mx-auto"></div>
                <div class="h-2 w-8 mx-auto rounded-full bg-blue-800"></div>
              </div>
              <div class="text-center mb-6">
                <div class="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"></div>
                <div class="h-2 w-8 mx-auto rounded-full bg-gray-300"></div>
              </div>
              <div class="text-center mb-6">
                <div class="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"></div>
                <div class="h-2 w-8 mx-auto rounded-full bg-gray-300"></div>
              </div>
              <div class="text-center">
                <div class="w-4 h-4 rounded-full bg-gray-300 mb-2 mx-auto"></div>
                <div class="h-2 w-8 mx-auto rounded-full bg-gray-300"></div>
              </div>
            </div>
            <div class="flex-1 py-6 px-4">
              <div class="flex flex-wrap -mx-2">
                <div class="w-1/3 px-2">
                  <div class="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                    <div class="w-4 h-4 rounded-full bg-green-600 mb-2 mx-auto"></div>
                    <div class="h-2 w-8 mx-auto rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <div class="w-1/3 px-2">
                  <div class="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                    <div class="w-4 h-4 rounded-full bg-blue-600 mb-2 mx-auto"></div>
                    <div class="h-2 w-8 mx-auto rounded-full bg-gray-200"></div>
                  </div>
                </div>
                <div class="w-1/3 px-2">
                  <div class="text-center mb-6 bg-white shadow rounded-lg px-2 py-3">
                    <div class="w-4 h-4 rounded-full bg-orange-600 mb-2 mx-auto"></div>
                    <div class="h-2 w-8 mx-auto rounded-full bg-gray-200"></div>
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -mx-2 mb-6">
                <div class="w-1/2 px-2">
                  <div class="shadow h-24 p-2 rounded-lg">
                    <div class="h-20 percentage pt-2">
                      <div class="h-2 bg-gray-200 w-24 mb-2 block"></div>
                      <div class="h-2 bg-gray-200 w-12 mb-2 block"></div>
                      <div class="h-2 bg-gray-200 w-20 mb-2 block"></div>
                      <div class="h-2 bg-gray-200 w-8 mb-2 block"></div>
                    </div>
                  </div>
                </div>
                <div class="w-1/2 px-2">
                  <div class="rounded-lg shadow px-2 py-2">
                    <div class="block w-8 h-2 rounded-full bg-gray-200 mb-2"></div>

                    <div class="mb-2">
                      <svg height="50" width="50" viewBox="0 0 20 20" class="mx-auto">
                        <circle r="10" cx="10" cy="10" fill="#ddd" />
                        <circle
                          r="5"
                          cx="10"
                          cy="10"
                          fill="transparent"
                          stroke="#eee"
                          stroke-width="10"
                          stroke-dasharray="11 31.4"
                          transform="rotate(-90) translate(-20)"
                        />
                      </svg>
                    </div>

                    <div class="flex flex-wrap -mx-2">
                      <div class="w-1/3 px-2">
                        <div class="block h-2 rounded-full bg-gray-200"></div>
                      </div>
                      <div class="w-1/3 px-2">
                        <div class="block h-2 rounded-full bg-gray-200"></div>
                      </div>
                      <div class="w-1/3 px-2">
                        <div class="block h-2 rounded-full bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full flex flex-wrap mb-2">
                <div class="w-1/2">
                  <div class="flex items-center">
                    <div class="h-4 w-4 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <div class="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                      <div class="h-2 w-6 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div class="w-1/2">
                  <div class="flex items-center">
                    <div class="h-4 w-4 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <div class="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                      <div class="h-2 w-6 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full flex flex-wrap mb-6">
                <div class="w-1/2">
                  <div class="flex items-center">
                    <div class="h-4 w-4 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <div class="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                      <div class="h-2 w-6 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div class="w-1/2">
                  <div class="flex items-center">
                    <div class="h-4 w-4 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <div class="h-2 w-10 bg-gray-200 mb-1 rounded-full"></div>
                      <div class="h-2 w-6 bg-gray-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-right flex justify-end">
                <div class="rounded-lg h-6 w-16 px-4 bg-gray-200 mr-2"></div>
                <div class="rounded-lg h-6 w-16 px-4 bg-green-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- component -->
  <header>
    <!-- Section Hero -->
    <div class="py-14 mt-0">
      <h3 class="text-2xl tracking-widest text-indigo-900 text-center">FEATURES</h3>
      <h1 class="mt-8 text-center text-5xl text-indigo-900 font-bold">Our Features & Services.</h1>

      <!-- Box -->
      <div class="md:flex md:justify-center md:space-x-8 md:px-14">
        <!-- box-1 -->
        <div
          class="
            mt-16
            py-4
            px-4
            bg-whit
            w-72
            bg-white
            rounded-xl
            shadow-lg
            hover:shadow-xl
            transform
            hover:scale-110
            transition
            duration-500
            mx-auto
            md:mx-0
          "
        >
          <div class="w-sm">
            <img
              class="w-64"
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
              alt=""
            />
            <div class="mt-4 text-indigo-900 text-center">
              <h1 class="text-xl font-bold">Communications</h1>
              <p class="mt-4 text-gray-600">
                Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.
              </p>
              <button
                class="
                  mt-8
                  mb-4
                  py-2
                  px-14
                  rounded-full
                  bg-indigo-900
                  text-white
                  tracking-widest
                  hover:bg-indigo-500
                  transition
                  duration-200
                "
              >
                MORE
              </button>
            </div>
          </div>
        </div>

        <!-- box-2 -->
        <div
          class="
            mt-16
            py-4
            px-4
            bg-whit
            w-72
            bg-white
            rounded-xl
            shadow-lg
            hover:shadow-xl
            transform
            hover:scale-110
            transition
            duration-500
            mx-auto
            md:mx-0
          "
        >
          <div class="w-sm">
            <img
              class="w-64"
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg"
              alt=""
            />
            <div class="mt-4 text-indigo-900 text-center">
              <h1 class="text-xl font-bold">Inspired Design</h1>
              <p class="mt-4 text-gray-600">
                Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.
              </p>
              <button
                class="
                  mt-8
                  mb-4
                  py-2
                  px-14
                  rounded-full
                  bg-indigo-900
                  text-white
                  tracking-widest
                  hover:bg-indigo-500
                  transition
                  duration-200
                "
              >
                MORE
              </button>
            </div>
          </div>
        </div>

        <!-- box-3 -->
        <div
          class="
            mt-16
            py-4
            px-4
            bg-whit
            w-72
            bg-white
            rounded-xl
            shadow-lg
            hover:shadow-xl
            transform
            hover:scale-110
            transition
            duration-500
            mx-auto
            md:mx-0
          "
        >
          <div class="w-sm">
            <img
              class="w-64"
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg"
              alt=""
            />
            <div class="mt-4 text-indigo-900 text-center">
              <h1 class="text-xl font-bold">Happy Customers</h1>
              <p class="mt-4 text-gray-600">
                Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.
              </p>
              <button
                class="
                  mt-8
                  mb-4
                  py-2
                  px-14
                  rounded-full
                  bg-indigo-900
                  text-white
                  tracking-widest
                  hover:bg-indigo-500
                  transition
                  duration-200
                "
              >
                MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="bg-indigo-900 p-20">
    <h1 class="text-center text-3xl text-white font-bold pt-10">Nos clients</h1>
    <div class="md:flex pt-10">
      <div
        class="
          md:w-6/12
          text-white
          bg-indigo-800
          p-8
          sm:rounded-tr-lg
          md:rounded-tr-none md:rounded-bl-lg
          rounded-tl-lg
          flex
          items-center
        "
      >
        <div>
          <h1 class="text-3xl mb-5 font-bold">
            Lorem <span class="text-red-300">ipsum</span> is simply dummy text.
          </h1>
          <h2 class="text-sm mb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the
          </h2>
          <div class="flex">
            <div class="mr-8">
              <p class="text-2xl font-bold">10k+</p>
              <p class="text-sm">companies</p>
            </div>
            <div class="mr-8">
              <p class="text-2xl font-bold">120+</p>
              <p class="text-sm">teams</p>
            </div>
            <div>
              <p class="text-2xl font-bold">10k+</p>
              <p class="text-sm">events</p>
            </div>
          </div>
        </div>
      </div>
      <div class="md:w-6/12 relative">
        <div
          class="
            w-full
            h-full
            opacity-60
            absolute
            sm:rounded-bl-lg
            md:rounded-bl-none md:rounded-tr-lg
            rounded-br-lg
          "
        ></div>
        <img
          class="
            h-full
            w-full
            object-cover
            sm:rounded-bl-lg
            md:rounded-bl-none md:rounded-tr-lg
            rounded-br-lg
          "
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=550&q=80"
          alt="Banner Desktop"
        />
      </div>
    </div>
  </div>

  <!-- component -->
  <section>
    <div class="container max-w-full mx-auto py-24 px-6">
      <h1 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
        Pricing
      </h1>
      <p class="text-center text-lg text-gray-700 mt-2 px-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.
      </p>
      <div class="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

      <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
        <div class="relative block flex flex-col md:flex-row items-center">
          <div
            class="
              w-11/12
              max-w-sm
              sm:w-3/5
              lg:w-1/3
              sm:my-5
              my-8
              relative
              z-0
              rounded-lg
              shadow-lg
              md:-mr-4
            "
          >
            <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
              <div
                class="
                  block
                  text-left text-sm
                  sm:text-md
                  max-w-sm
                  mx-auto
                  mt-2
                  text-black
                  px-8
                  lg:px-6
                "
              >
                <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  Hobby
                </h1>
                <h2 class="text-sm text-gray-500 text-center pb-6">FREE</h2>

                Stripe offers everything needed to run an online business at scale. Get in touch for
                details.
              </div>

              <div class="flex flex-wrap mt-3 px-6">
                <ul>
                  <li class="flex items-center">
                    <div class="rounded-full p-2 fill-current text-green-700">
                      <svg
                        class="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="text-gray-700 text-lg ml-3">No setup</span>
                  </li>
                  <li class="flex items-center">
                    <div class="rounded-full p-2 fill-current text-green-700">
                      <svg
                        class="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="text-gray-700 text-lg ml-3">No setups</span>
                  </li>
                  <li class="flex items-center">
                    <div class="rounded-full p-2 fill-current text-green-700">
                      <svg
                        class="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="text-gray-700 text-lg ml-3">Speed</span>
                  </li>
                </ul>
              </div>
              <div class="block flex items-center p-8 uppercase">
                <button
                  class="
                    mt-3
                    text-lg
                    font-semibold
                    bg-indigo-900
                    w-full
                    text-white
                    rounded-lg
                    px-6
                    py-3
                    block
                    shadow-xl
                    hover:bg-gray-700
                  "
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div
            class="
              w-full
              max-w-md
              sm:w-2/3
              lg:w-1/3
              sm:my-5
              my-8
              relative
              z-10
              bg-white
              rounded-lg
              shadow-lg
            "
          >
            <div
              class="
                text-sm
                leading-none
                rounded-t-lg
                bg-indigo-900
                text-white
                font-semibold
                uppercase
                py-4
                text-center
                tracking-wide
              "
            >
              Most Popular
            </div>
            <div
              class="
                block
                text-left text-sm
                sm:text-md
                max-w-sm
                mx-auto
                mt-2
                text-indigo-900
                px-8
                lg:px-6
              "
            >
              <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                Expert
              </h1>
              <h2 class="text-sm text-gray-500 text-center pb-6">
                <span class="text-3xl">€19</span> /mo
              </h2>

              Stripe offers everything needed to run an online business at scale. Get in touch for
              details.
            </div>
            <div class="flex pl-12 justify-start sm:justify-start mt-3">
              <ul>
                <li class="flex items-center">
                  <div class="rounded-full p-2 fill-current text-green-700">
                    <svg
                      class="w-6 h-6 align-middle"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span class="text-gray-700 text-lg ml-3">No setup</span>
                </li>
                <li class="flex items-center">
                  <div class="rounded-full p-2 fill-current text-green-700">
                    <svg
                      class="w-6 h-6 align-middle"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Hidden fees</span>
                </li>
                <li class="flex items-center">
                  <div class="rounded-full p-2 fill-current text-green-700">
                    <svg
                      class="w-6 h-6 align-middle"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span class="text-gray-700 text-lg ml-3">Original</span>
                </li>
              </ul>
            </div>

            <div class="block flex items-center p-8 uppercase">
              <button
                class="
                  mt-3
                  text-lg
                  font-semibold
                  bg-indigo-900
                  w-full
                  text-white
                  rounded-lg
                  px-6
                  py-3
                  block
                  shadow-xl
                  hover:bg-gray-700
                "
              >
                Select
              </button>
            </div>
          </div>
          <div
            class="
              w-11/12
              max-w-sm
              sm:w-3/5
              lg:w-1/3
              sm:my-5
              my-8
              relative
              z-0
              rounded-lg
              shadow-lg
              md:-ml-4
            "
          >
            <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
              <div
                class="
                  block
                  text-left text-sm
                  sm:text-md
                  max-w-sm
                  mx-auto
                  mt-2
                  text-indigo-900
                  px-8
                  lg:px-6
                "
              >
                <h1 class="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  Enteprise
                </h1>
                <h2 class="text-sm text-gray-500 text-center pb-6">€39 /mo</h2>

                Stripe offers everything needed to run an online business at scale. Get in touch for
                details.
              </div>
              <div class="flex flex-wrap mt-3 px-6">
                <ul>
                  <li class="flex items-center">
                    <div class="rounded-full p-2 fill-current text-green-700">
                      <svg
                        class="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="text-gray-700 text-lg ml-3">Electric</span>
                  </li>
                  <li class="flex items-center">
                    <div class="rounded-full p-2 fill-current text-green-700">
                      <svg
                        class="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="text-gray-700 text-lg ml-3">Monthly</span>
                  </li>
                  <li class="flex items-center">
                    <div class="rounded-full p-2 fill-current text-green-700">
                      <svg
                        class="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span class="text-gray-700 text-lg ml-3">No setup</span>
                  </li>
                </ul>
              </div>

              <div class="block flex items-center p-8 uppercase">
                <button
                  class="
                    mt-3
                    text-lg
                    font-semibold
                    bg-indigo-900
                    w-full
                    text-white
                    rounded-lg
                    px-6
                    py-3
                    block
                    shadow-xl
                    hover:bg-gray-700
                  "
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <div class="min-w-screen min-h-screen flex items-center justify-center py-5">
    <div
      class="
        w-full
        bg-white
       
        px-5
        py-16
        md:py-24
        text-gray-800
        font-light
      "
    >
      <div class="w-full max-w-6xl mx-auto pb-5">
        <div class="-mx-3 md:flex items-center">
          <div class="px-3 md:w-2/3 mb-10 md:mb-0">
            <h1 class="text-6xl md:text-8xl font-bold mb-5 leading-tight">
              Such <br class="hidden md:block" />Application.
            </h1>
            <h3 class="text-gray-600 mb-7 leading-tight">
              Subscribe now and receive the latest updates.
            </h3>
            <div>
              <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div class="px-3 md:w-1/3">
            <form>
              <div class="flex mb-3">
                <div
                  class="
                    w-10
                    z-10
                    pl-1
                    text-center
                    pointer-events-none
                    flex
                    items-center
                    justify-center
                  "
                >
                  <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  class="
                    w-full
                    -ml-10
                    pl-10
                    pr-3
                    py-2
                    rounded-lg
                    border-2 border-gray-200
                    outline-none
                    focus:border-indigo-500
                  "
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <button
                  class="
                    block
                    w-full
                    bg-indigo-500
                    hover:bg-indigo-700
                    focus:bg-indigo-700
                    transition-colors
                    text-white
                    rounded-lg
                    px-3
                    py-2
                    font-semibold
                  "
                >
                  Subscribe now.
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
  

  <footer class="bg-indigo-900 pt-10 sm:mt-10">
    <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      <!-- Col-1 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <h1 class="text-3xl text-white font-bold">SUCH</h1>
        <!-- Links -->
      </div>

      <!-- Col-2 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-400 font-medium mb-6">Core Concepts</div>

        <!-- Links -->
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Utility-First
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Responsive Design
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Hover, Focus, & Other States
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Dark Mode
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Adding Base Styles
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Extracting Components
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Adding New Utilities
        </a>
      </div>

      <!-- Col-3 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-400 font-medium mb-6">Customization</div>

        <!-- Links -->

        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Theme Configuration
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Breakpoints
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Customizing Colors
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Customizing Spacing
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Configuring Variants
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Plugins
        </a>
      </div>

      <!-- Col-3 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-400 font-medium mb-6">Community</div>

        <!-- Links -->
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          GitHub
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Discord
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Twitter
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          YouTube
        </a>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
      <div
        class="
          flex
          pb-5
          px-3
          m-auto
          pt-5
          border-t border-gray-500
          text-gray-400 text-sm
          flex-col
          md:flex-row
          max-w-6xl
        "
      >
        <div class="mt-2">© Copyright 1998-year. All Rights Reserved.</div>

        <!-- Required Unicons (if you want) -->
        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-facebook-f"></i>
          </a>
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-twitter-alt"></i>
          </a>
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-youtube"></i>
          </a>
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-linkedin"></i>
          </a>
          <a href="#" class="w-6 mx-1">
            <i class="uil uil-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NInput, NButton } from 'naive-ui'
export default defineComponent({
  name: 'Landing',
  components: {
    NInput,
    NButton,
  },
  setup() {},
})
</script>
