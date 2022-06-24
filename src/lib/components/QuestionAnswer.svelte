<script>
    let open = false;
    export let question = '';
    export let answer = '';
</script>

<div class="pt-6">
    <dt class="text-lg">
        <button
            type="button"
            class="text-left w-full flex justify-between items-start text-gray-400"
            aria-controls="faq-0"
            aria-expanded="false"
            on:click={() => { open = !open }}
        >
            <span class="font-medium text-gray-900">
                {question}
            </span>
            <span class="ml-6 h-7 flex items-center">
                <svg
                    class="{open ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </span>
        </button>
    </dt>
    {#if open}
    <dd class="mt-2 pr-12" id="faq-0">
        <p class="text-base text-gray-500">
            {@html answer}
        </p>
    </dd>
    {/if}
</div>
