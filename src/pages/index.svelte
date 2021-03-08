<script>
  import { metatags, layout, components } from "@roxi/routify";
  import Card from "@/components/Card.svelte";

  let excerciseFolder = $components.find(
    ({ meta }) => meta.name === "excercise"
  );

  $: cards = excerciseFolder.children;

  metatags.title = "Koordinationsübungen";
  metatags.description =
    "Stationskarten für Fitnessübungen im Bereich der Koordination";
</script>

<h1 class="text-xl md:text-2xl lg:text-4xl mb-6 pb-2">
  Koordinationsübungen - Stationskarten
</h1>

<div
  class="w-full flex flex-col justify-center space-y-4 md:space-y-0 md:py-3 md:grid md:auto-rows-min md:place-content-stretch md:gap-2 md:grid-cols-2 lg:gap-3 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-4"
>
  {#each cards as card}
    <div id="card-wrapper">
      <Card
        title={card.meta.frontmatter.title}
        category={card.meta.frontmatter.category}
        color={card.meta.frontmatter.color}
        content={card.meta.frontmatter.preview}
        thumbnail={card.meta.frontmatter.thumbnail}
        path={card.path}
      />
    </div>
  {/each}
</div>

<style>
  @media print {
    @page {
      margin: 0.5cm;
    }

    #card-wrapper {
      page-break-inside: avoid;
    }
  }
</style>
