<!-- routify:options preload="proximity" -->
<script>
  import Footer from "@/components/layout/Footer.svelte";
</script>

<main
  class="p-4 m-4 mt-3 md:mt-8 lg:mt-12 xl:mt-16 md:mx-8 md:px-11 box relative w-full min-h-screen overflow-y-visible"
>
  <slot />
</main>
<Footer />
