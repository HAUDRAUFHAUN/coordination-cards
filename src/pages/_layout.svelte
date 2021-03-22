<!-- routify:options preload="proximity" -->
<script>
  import Footer from "@/components/layout/Footer.svelte";
</script>

<main
  class="p-4 mt-3 md:mt-8 lg:mt-12 xl:mt-16 md:mx-8 md:px-11 box w-screen min-h-screen overflow-y-visible overflow-x-hidden"
>
  <slot />
</main>
<Footer />
