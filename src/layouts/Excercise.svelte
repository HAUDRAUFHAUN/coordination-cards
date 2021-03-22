<script>
  import { url } from "@roxi/routify";
  export let category,
    color,
    title,
    thumbnail = "";
</script>

<div class="flex flex-col justify-center overflow-x-hidden max-w-full">
  <div class="flex justify-center items-center">
    <img
      src={$url(thumbnail)}
      alt={title + " Thumbnail"}
      class="lazyload h-auto w-full md:w-3/5"
      id="thumbnail"
    />
  </div>

  <h1 class="text-xl md:text-2xl lg:text-4xl mt-10 md:mb-2 pb-2">
    {title}
  </h1>

  <div class="text-gray-700 text-base md:text-lg lg:text-xl mb-8 pl-6">
    Kategorie: <span class="text-black bg-{color} p-1 rounded-md" id="tag"
      >{category}</span
    >
  </div>

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
      -webkit-print-color-adjust: exact !important;
    }
    #tag {
      -webkit-print-color-adjust: exact !important;
    }
    #thumbnail {
      width: 60%;
      height: auto;
    }
  }
</style>
