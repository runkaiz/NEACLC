<script>
    import '../app.css';
    import Footer from '$lib/components/footer.svelte';
</script>

<div class="bg-white">
    <slot />
    <!-- Footer section -->
    <Footer />
</div>
