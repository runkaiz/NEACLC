<script>
    import cong from '$lib/assets/cong.jpg';
    import team from '$lib/assets/team.jpg';
</script>

<main>
    <!-- Hero section -->
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div
            class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
        >
            <div>
                <div>
                    <img
                        class="h-11 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                        alt="Workflow"
                    />
                </div>
                <div class="mt-20">
                    <!-- <div>
                <a href="#" class="inline-flex space-x-4">
                  <span class="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-500 tracking-wide uppercase"> What's new </span>
                  <span class="inline-flex items-center text-sm font-medium text-rose-500 space-x-1">
                    <span>Just shipped version 0.1.0</span>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div> -->
                    <div class="mt-6 sm:max-w-xl">
                        <h1
                            class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
                        >
                            New England Academy of Chinese Language and Culture
                        </h1>
                        <p class="mt-6 text-xl text-gray-500">
                            Small Group Chinese Lessons for All Ages.
                        </p>
                    </div>
                    <!-- <form action="#" class="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div class="min-w-0 flex-1">
                  <label for="hero-email" class="sr-only">Email address</label>
                  <input id="hero-email" type="email" class="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-rose-500 focus:ring-rose-500" placeholder="Enter your email">
                </div>
                <div class="mt-4 sm:mt-0 sm:ml-3">3000
                  <button type="submit" class="block w-full rounded-md border border-transparent px-5 py-3 bg-rose-500 text-base font-medium text-white shadow hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10">Notify me</button>
                </div>
              </form>
              <div class="mt-6">
                <div class="inline-flex items-center divide-x divide-gray-300">
                  <div class="flex-shrink-0 flex pr-5">
                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div class="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3"><span class="font-medium text-gray-900">Rated 5 stars</span> by over <span class="font-medium text-rose-500">500 beta users</span></div>
                </div>
              </div> -->
                </div>
            </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div
                class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
            >
                <div class="hidden sm:block">
                    <div
                        class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"
                    />
                    <svg
                        class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                        width="404"
                        height="392"
                        fill="none"
                        viewBox="0 0 404 392"
                    >
                        <defs>
                            <pattern
                                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    class="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="392"
                            fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                        />
                    </svg>
                </div>
                <div
                    class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12"
                >
                    <img
                        class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/task-app-rose.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>

    <!-- Testimonial/stats section -->
    <div class="relative mt-20" id="about">
        <div
            class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
        >
            <div class="relative sm:py-16 lg:py-0">
                <div
                    aria-hidden="true"
                    class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                >
                    <div
                        class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"
                    />
                    <svg
                        class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                        width="404"
                        height="392"
                        fill="none"
                        viewBox="0 0 404 392"
                    >
                        <defs>
                            <pattern
                                id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                x="0"
                                y="0"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    width="4"
                                    height="4"
                                    class="text-gray-200"
                                    fill="currentColor"
                                />
                            </pattern>
                        </defs>
                        <rect
                            width="404"
                            height="392"
                            fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                        />
                    </svg>
                </div>
                <div
                    class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"
                >
                    <!-- Testimonial card-->
                    <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                        <img
                            class="absolute inset-0 h-full w-full object-cover"
                            src={cong}
                            alt="Cong Chen"
                        />
                        <div class="absolute inset-0 bg-rose-500 mix-blend-multiply" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"
                        />
                        <div class="relative px-8">
                            <blockquote class="mt-8">
                                <div class="relative text-lg font-medium text-white md:flex-grow">
                                    <svg
                                        class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                                        />
                                    </svg>
                                    <p class="relative">
                                        While its mission is similar to that of both the ACS and the
                                        PVCICS, it is independent and separate from them. The NEACLC
                                        has three major classes of stakeholders, its three volunteer
                                        directors, seven teachers whom are provided with a small
                                        stipend that compensates for their out-of-pocket expenses
                                        and, the students, who pay a modest fee.
                                    </p>
                                </div>

                                <footer class="mt-4">
                                    <p class="text-base font-semibold text-rose-200">
                                        Cong Chen, Board President
                                    </p>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                <!-- Content area -->
                <div class="pt-12 sm:pt-16 lg:pt-20">
                    <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                        Welcome to NEACLC!
                    </h2>
                    <div class="mt-6 text-gray-500 space-y-6">
                        <p class="text-lg">
                            The New England Academy of Chinese Language and Culture (NEACLC) <b
                                >meets on most Sundays between 1:30 and 3:30 remotely only for the
                                academic year 2020-21</b
                            >.
                        </p>
                        <p class="text-base leading-7">
                            NEACLC currently teaches mandarin to about 40 students of all ages,
                            ethnicities, and cultural heritages. It was incorporated as a 501(c)(3)
                            during August 2016 to fill the void resulting from the closure of the
                            40-year old Amherst Chinese School (ACS).
                        </p>
                        <p class="text-base leading-7">
                            Between 2016 and 2018, NEACLC held its weekly meetings at PVCICS in
                            Hadley. Since September 2018, the school meetings were moved to
                            Amherst-Pelham Reginal Middle School in Amherst.
                        </p>
                        <p class="text-base leading-7">
                            <b
                                >Intermediate Adult Classes and Beginner Adult Classes meet
                                Wednesdays and Tuesdays, respectively, between 8:30 am and 10:00 am</b
                            >
                            (used to be at Panera Bread also moved)
                            <b>online only for this year.</b>
                        </p>
                    </div>
                </div>

                <!-- Stats section -->
                <div class="mt-10">
                    <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
                        <div class="border-t-2 border-gray-100 pt-6">
                            <dt class="text-base font-medium text-gray-500">Founded</dt>
                            <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                                2016
                            </dd>
                        </div>

                        <div class="border-t-2 border-gray-100 pt-6">
                            <dt class="text-base font-medium text-gray-500">Students</dt>
                            <dd class="text-3xl font-extrabold tracking-tight text-gray-900">
                                ~40
                            </dd>
                        </div>
                    </dl>
                    <div class="mt-10">
                        <a href="#mission" class="text-base font-medium text-rose-500">
                            Learn more about our mission&nbsp&rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Logo cloud section -->
    <div class="mt-32" id="mission">
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                <div>
                    <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Our mission
                    </h2>
                    <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                        The school has ambitious plans to extend its services by increasing
                        geographic region, provide additional meeting times, and to support a new
                        summer school. There is considerable unmet demand to low-cost Mandarin
                        classes in New England, and the directors and teachers feel a strong mission
                        to deliver it.
                    </p>
                </div>
                <div class="mt-12">
                    <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                        <img
                            class="absolute inset-0 h-full w-full object-cover"
                            src={team}
                            alt="Cong and Ming"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- CTA section -->
    <div class="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" class="hidden sm:block">
            <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg
                class="absolute top-8 left-1/2 -ml-3"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
            >
                <defs>
                    <pattern
                        id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-gray-200"
                            fill="currentColor"
                        />
                    </pattern>
                </defs>
                <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
            </svg>
        </div>
        <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div
                class="relative rounded-2xl px-6 py-10 bg-rose-500 overflow-hidden shadow-xl sm:px-12 sm:py-20"
            >
                <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                    <svg
                        class="absolute inset-0 h-full w-full"
                        preserveAspectRatio="xMidYMid slice"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 1463 360"
                    >
                        <path
                            class="text-rose-400 text-opacity-40"
                            fill="currentColor"
                            d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                        />
                        <path
                            class="text-rose-600 text-opacity-40"
                            fill="currentColor"
                            d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                        />
                    </svg>
                </div>
                <div class="relative">
                    <div class="sm:text-center">
                        <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                            Get notified when we&rsquo;re launching.
                        </h2>
                        <p class="mt-6 mx-auto max-w-2xl text-lg text-rose-100">
                            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna
                            sed consectetur neque tristique pellentesque.
                        </p>
                    </div>
                    <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                        <div class="min-w-0 flex-1">
                            <label for="cta-email" class="sr-only">Email address</label>
                            <input
                                id="cta-email"
                                type="email"
                                class="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div class="mt-4 sm:mt-0 sm:ml-3">
                            <button
                                type="submit"
                                class="block w-full rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                                >Notify me</button
                            >
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
