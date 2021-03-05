<script>
  import { url } from "@roxi/routify";
  export let title,
    thumbnail = "";
</script>

<img src={$url(thumbnail)} alt={title + " Thumbnail"} class="w-full h-auto" />

<h1 class="text-xl md:text-2xl lg:text-4xl mb-6 pb-2">
  {title}
</h1>

<div
  class="prose md:prose-lg lg:prose-xl max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl"
>
  <slot />
</div>
