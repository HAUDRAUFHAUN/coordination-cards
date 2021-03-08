<script>
  import { url } from "@roxi/routify";
  export let title,
    thumbnail = "";
</script>

<div class="flex flex-col justify-center overflow-hidden">
  <div class="flex justify-center items-center">
  <img src={$url(thumbnail)} alt={title + " Thumbnail"} class="h-auto w-3/5" />
</div>
  <h1 class="text-xl md:text-2xl lg:text-4xl mt-10 mb-6 pb-2">
    {title}
  </h1>

  <div
    class="prose md:prose-lg lg:prose-xl max-w-5/7 sm:max-w-md md:max-w-3xl lg:max-w-5xl"
    id="content"
  >
    <slot />
  </div>
</div>

<style>
  @media print {
    @page {
      margin: 0.5cm;
    }
    #content {
      width: 100%;
    }
  }
</style>
