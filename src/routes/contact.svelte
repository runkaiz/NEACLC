<script>
    let showSuccess = false;

    async function submitMessage(event) {
        const form = event.target;
        const data = Object.fromEntries(new FormData(form));

        const url = `/submission/contact.json`;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            showSuccess = true;
        }
    }
</script>

<div class="max-w-7xl mx-auto sm:px-6 lg:px-8 h-screen">
    <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div class="relative max-w-xl mx-auto">
            <svg
                class="absolute left-full transform translate-x-1/2"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <svg
                class="absolute right-full bottom-0 transform -translate-x-1/2"
                width="404"
                height="404"
                fill="none"
                viewBox="0 0 404 404"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="85737c0e-0916-41d7-917f-596dc7edfa27"
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
                <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <div class="text-center">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Contact us
                </h2>
                <p class="mt-4 text-lg leading-6 text-gray-500">
                    Have any questions, concerns, or just want to send a message? Complete the
                    following form so you may reach us!
                </p>
            </div>
            <div class="mt-12">
                <form
                    on:submit|preventDefault={submitMessage}
                    class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                    <div>
                        <label for="first" class="block text-sm font-medium text-gray-700"
                            >First name</label
                        >
                        <div class="mt-1">
                            <input
                                type="text"
                                name="first"
                                id="first"
                                autocomplete="given-name"
                                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div>
                        <label for="last" class="block text-sm font-medium text-gray-700"
                            >Last name</label
                        >
                        <div class="mt-1">
                            <input
                                type="text"
                                name="last"
                                id="last"
                                autocomplete="family-name"
                                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-medium text-gray-700"
                            >Email</label
                        >
                        <div class="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="phone" class="block text-sm font-medium text-gray-700"
                            >Phone Number</label
                        >
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <label for="country" class="sr-only">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    class="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                >
                                    <option>US</option>
                                    <option disabled>CA</option>
                                    <option disabled>EU</option>
                                </select>
                            </div>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                autocomplete="tel"
                                class="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                placeholder="+1 (555) 987-6543"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block text-sm font-medium text-gray-700"
                            >Message</label
                        >
                        <div class="mt-1">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                    <div class="sm:col-span-2">
                        <button
                            type="submit"
                            class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >Let's talk</button
                        >
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

{#if showSuccess}
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div class="fixed z-10 inset-0 overflow-y-auto">
            <div
                class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
            >
                <div
                    class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6"
                >
                    <div>
                        <div
                            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
                        >
                            <svg
                                class="h-6 w-6 text-green-600"
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
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-5">
                            <h3
                                class="text-lg leading-6 font-medium text-gray-900"
                                id="modal-title"
                            >
                                Submission successful
                            </h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">
                                    Your message has been submitted successfully.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 sm:mt-6">
                        <button
                            type="button"
                            class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                            on:click={() => { showSuccess = false }}
                            >Return to Contact Form</button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
