<script>
    import QuestionAnswer from '$lib/components/QuestionAnswer.svelte';
    import { faqs } from '$lib/faqs';
</script>

<div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Frequently asked questions
            </h2>
            <dl class="mt-6 space-y-6 divide-y divide-gray-200">
                {#each faqs as faq}
                    <QuestionAnswer
                        question={faq.question}
                        answer={faq.answer}
                    />
                {/each}
            </dl>
        </div>
    </div>
</div>
