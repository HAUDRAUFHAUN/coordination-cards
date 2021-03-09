<script>
  import { url } from "@roxi/routify";
  export let title,
    content,
    category,
    color,
    thumbnail,
    path = "";
</script>

<div class="w-7/8 m-auto" id="card">
  <div
    class="grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out"
  >
    {#if thumbnail != false}
      <div class="col-span-3 row-span-4">
        <a href={$url(path)}>
          <img
            src={$url(thumbnail)}
            alt="Thumbnail"
            class="lazyload rounded-t-xl h-auto w-full"
          />
        </a>
      </div>
    {:else}
      <br />
    {/if}
    <div class="col-span-3 row-span-2">
      <header class="flex flex-col justify-between leading-tight p-2 md:p-4">
        <span class="p-1 rounded-md bg-{color} text-sm lg:text-base w-min"
          >{category}</span
        >
        <h1 class="prose-lg lg:prose-xl">
          <a class="no-underline hover:underline text-black" href={path}>
            {title}
          </a>
        </h1>
      </header>
      <div class="px-4 md:px-4 pb-3 md:pb-4 prose" id="content">
        {@html content}
      </div>
    </div>
  </div>
</div>

<style>
  @media print {
    @page {
      margin: 0.5cm;
    }
    #card {
      page-break-inside: avoid;
    }
  }
</style>
