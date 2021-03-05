<script>
  import { metatags, layout, components } from "@roxi/routify";
  import Card from "@/components/Card.svelte";

  let excerciseFolder = $components.find(
    ({ meta }) => meta.name === "excercise"
  );

  $: cards = excerciseFolder.children;

  console.log(excerciseFolder.children);

  metatags.title = "Koordinationsübungen";
  metatags.description =
    "Stationskarten für Fitnessübungen im Bereich der Koordination";
</script>

<h1 class="text-xl md:text-2xl lg:text-4xl mb-6 pb-2">
  Koordinationsübungen - Stationskarten
</h1>

<div
  class="w-full flex flex-col justify-center space-y-4 md:py-3 md:grid md:justify-items-center md:gap-2 md:grid-cols-2 lg:gap-3 xl:grid-cols-3"
>
  {#each cards as card}
    <Card
      title={card.meta.frontmatter.title}
      thumbnail={card.meta.frontmatter.thumbnail}
      path={card.path}>Here should be the card content 🤔</Card
    >
  {/each}
</div>
