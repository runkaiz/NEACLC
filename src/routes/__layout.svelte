<script>
    import '../app.css';
    import Footer from '$lib/components/Footer.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import { page } from '$app/stores';
    import ConsoleNav from '$lib/components/ConsoleNav.svelte';
</script>

<div class="bg-white">
    <Navbar />
    <ConsoleNav />
    <slot />
    <!-- Footer section -->
    <Footer />
</div>
