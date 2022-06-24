<script context="module">
    export async function load({ fetch }) {
        const url = `/announcement/get.json`;
        const res = await fetch(url);

        if (res.ok) {
            return {
                props: {
                    announcement: await res.json()
                }
            };
        }

        return {
            status: res.status,
            error: new Error(`Failed to load ${url}`)
        };
    }
</script>

<script>
    import { session } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    export let announcement;
    let preview = false;
    let content = announcement ? announcement[0].content : '';

    onMount(async function () {
        if (!$session.user) {
            goto(`/`);
        }
    });

    async function saveAnnouncement() {
        const { status } = await fetch('/announcement/save.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content
            })
        });

        // TODO: Better error/success handling.
        if (status === 200) {
            alert('Announcement saved and published.');
        } else {
            // If not, show an error.
            alert('Error saving announcement.');
        }
    }

    async function clearAnnouncement() {
        content = '';

        const { status } = await fetch('/announcement/save.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content
            })
        });

        // TODO: Better error/success handling.
        if (status === 200) {
            alert('Announcement removed.');
        } else {
            // If not, show an error.
            alert('Error clearing announcement.');
        }
    }
</script>

<div class="mx-96 mt-14">
    <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
            <h1>Announcement</h1>
        </div>
        <div class="px-4 py-5 sm:p-6">
            <div>
                <div>
                    <div class="flex items-center" aria-orientation="horizontal" role="tablist">
                        {#if !preview}
                            <!-- Selected: "text-gray-900 bg-gray-100 hover:bg-gray-200", Not Selected: "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100" -->
                            <button
                                id="tabs-1-tab-1"
                                class="text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
                                aria-controls="tabs-1-panel-1"
                                role="tab"
                                type="button"
                                on:click={() => (preview = false)}>Write</button
                            >
                            <!-- Selected: "text-gray-900 bg-gray-100 hover:bg-gray-200", Not Selected: "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100" -->
                            <button
                                id="tabs-1-tab-2"
                                class="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
                                aria-controls="tabs-1-panel-2"
                                role="tab"
                                type="button"
                                on:click={() => (preview = true)}>Preview</button
                            >
                        {:else}
                            <!-- Selected: "text-gray-900 bg-gray-100 hover:bg-gray-200", Not Selected: "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100" -->
                            <button
                                id="tabs-1-tab-1"
                                class="text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
                                aria-controls="tabs-1-panel-1"
                                role="tab"
                                type="button"
                                on:click={() => (preview = false)}>Write</button
                            >
                            <!-- Selected: "text-gray-900 bg-gray-100 hover:bg-gray-200", Not Selected: "text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100" -->
                            <button
                                id="tabs-1-tab-2"
                                class="text-gray-900 bg-gray-100 hover:bg-gray-200 ml-2 px-3 py-1.5 border border-transparent text-sm font-medium rounded-md"
                                aria-controls="tabs-1-panel-2"
                                role="tab"
                                type="button"
                                on:click={() => (preview = true)}>Preview</button
                            >
                        {/if}
                    </div>
                    <div class="mt-2">
                        {#if !preview}
                            <div
                                id="tabs-1-panel-1"
                                class="p-0.5 -m-0.5 rounded-lg"
                                aria-labelledby="tabs-1-tab-1"
                                role="tabpanel"
                                tabindex="0"
                            >
                                <label for="comment" class="sr-only">Comment</label>
                                <div>
                                    <textarea
                                        rows="5"
                                        name="comment"
                                        id="comment"
                                        bind:value={content}
                                        class="shadow-sm focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Write your announcement..."
                                    />
                                </div>
                            </div>
                        {:else}
                            <div
                                id="tabs-1-panel-2"
                                class="p-0.5 -m-0.5 rounded-lg"
                                aria-labelledby="tabs-1-tab-2"
                                role="tabpanel"
                                tabindex="0"
                            >
                                <div class="border-b">
                                    <div
                                        class="mx-px mt-px px-3 pt-2 pb-12 text-sm leading-5 text-gray-800"
                                    >
                                        Preview content will render here.
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
                <div class="mt-2 flex justify-end">
                    <button
                        type="submit"
                        class="mx-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        on:click={() => clearAnnouncement()}>Clear</button
                    >
                    <button
                        type="submit"
                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                        on:click={() => saveAnnouncement()}>Post</button
                    >
                </div>
            </div>
        </div>
    </div>
</div>
