<script>
    let mobileOpen = false;
    import { session } from '$app/stores';
	import { goto } from '$app/navigation';

    async function logout() {
        const url = `/auth/logout.json`;
        const res = await fetch(url, {
            credentials: 'same-origin',
            method: 'POST'
        });

        if (res.ok) {
            $session.user = null;
            goto('/');
        }
    }
</script>

<div class="relative pt-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <nav
            class="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
        >
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                    <a href="/" class="text-rose-600">
                        <span class="sr-only">NEACLC</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                            />
                        </svg>
                    </a>
                    <div class="-mr-2 flex items-center md:hidden">
                        <button
                            type="button"
                            class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
                            aria-expanded="false"
                            on:click={() => (mobileOpen = !mobileOpen)}
                        >
                            <span class="sr-only">Open main menu</span>
                            <!-- Heroicon name: outline/menu -->
                            <svg
                                class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="hidden md:flex md:space-x-10">
                <a href="/register" class="font-medium text-gray-500 hover:text-gray-900"
                    >Register</a
                >

                <a href="/faqs" class="font-medium text-gray-500 hover:text-gray-900">FAQs</a>

                <a href="/calendar" class="font-medium text-gray-500 hover:text-gray-900"
                    >Calendar</a
                >

                <a href="/payment" class="font-medium text-gray-500 hover:text-gray-900">Payment</a>

                {#if $session.user}
                    <a href="/console" class="font-medium text-gray-500 hover:text-gray-900">Console</a>
                {/if}
            </div>
            {#if !$session.user}
                <div
                    class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
                >
                    <span class="inline-flex rounded-md shadow">
                        <a
                            href="/login"
                            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50"
                        >
                            Log in
                        </a>
                    </span>
                </div>
            {:else}
                <div
                    class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
                >
                    <span class="inline-flex rounded-md shadow">
                        <button
                            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50"
                            on:click={logout}
                        >
                            Log out
                        </button>
                    </span>
                </div>
            {/if}
        </nav>
    </div>

    {#if mobileOpen}
        <div
            class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
            <div
                class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
                <div class="px-5 pt-4 flex items-center justify-between">
                    <div class="text-rose-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                            />
                        </svg>
                    </div>
                    <div class="-mr-2">
                        <button
                            type="button"
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
                            on:click={() => (mobileOpen = !mobileOpen)}
                        >
                            <span class="sr-only">Close menu</span>
                            <!-- Heroicon name: outline/x -->
                            <svg
                                class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                    <a
                        href="/register"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >Register</a
                    >

                    <a
                        href="/faqs"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >FAQs</a
                    >

                    <a
                        href="/calendar"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >Calendar</a
                    >

                    <a
                        href="/payment"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >Payment</a
                    >
                </div>
                {#if !$session.user}
                    <a
                        href="/login"
                        class="block w-full px-5 py-3 text-center font-medium text-rose-600 bg-gray-50 hover:bg-gray-100"
                        on:click={logout}
                    >
                        Log in
                    </a>
                {:else}
                    <button
                        class="block w-full px-5 py-3 text-center font-medium text-rose-600 bg-gray-50 hover:bg-gray-100"
                    >
                        Log out
                    </button>
                {/if}
            </div>
        </div>
    {/if}
</div>
