<script>
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="bg-white">
    <Navbar />
    <slot />
    <!-- Footer section -->
    <Footer />
</div>
